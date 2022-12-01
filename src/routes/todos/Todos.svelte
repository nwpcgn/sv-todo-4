<script>
  import { _user, supabase, sleep } from "../../lib/data";
  import Todo from "./Todo.svelte";
  import Loader from "../../lib/data/comp/Loader.svelte";
  import { onMount } from "svelte";
  import TodosAdd from "./TodosAdd.svelte";
  export let open;
  let ops = { od: "id", asc: false, id: false };
  let todos = [];
  const getAllTodos = async () => {
    let uid = $_user.id;
    let query = supabase.from("todos").select("*");
    if (uid) {
      query = query.eq("user_id", uid);
    }
    if (ops && ops.od) {
      query = query.order(ops.od, { ascending: ops.asc });
    }
    try {
      let { data, error } = await query;
      if (error) throw error;
      todos = data;
    } catch (err) {
      console.log(err);
    }
  };

  const updateTodo = async (todo) => {
    try {
      const { data, error } = await supabase
        .from("todos")
        .update({
          task: todo.task,
          info: todo.info,
          isComplete: todo.isComplete,
        })
        .eq("id", todo.id);
      await getAllTodos();
    } catch (err) {
      console.log(err);
    }
  };
  const deleteTodo = async (todo) => {
    try {
      const { data, error } = await supabase
        .from("todos")
        .delete()
        .eq("id", todo.id);
      await reload();
    } catch (err) {
      console.log(err);
    }
  };
  const reload = async () => {
    await getAllTodos();
  };
  let promise;

  onMount(async () => {
    promise = getAllTodos();
  });
</script>

{#await promise}
  <Loader />
{:then value}
  <section {...$$restProps}>
    <header class="mb-4">
      <TodosAdd {reload} bind:open />
      <hr />
    </header>

    <div class="list-group">
      {#each todos as todo}
        <Todo {todo} {updateTodo} {deleteTodo} />
      {/each}
    </div>
  </section>
{/await}


