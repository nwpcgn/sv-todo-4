<script>
  import { _user, _settings, supabase, sleep } from "../../lib/data";
  export let reload;
  export let open;
  let newTask = "";
  let loading = false;

  const addNewTodo = async () => {
    loading = true;
    try {
      const { data, error } = await supabase
        .from("todos")
        .insert([{ task: newTask, user_id: $_user.id }]);
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    } finally {
      await sleep(200);
      reload();
      loading = false;
      newTask = "";
      open = true;
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && newTask !== "") {
      addNewTodo();
    }
  };
</script>

<section {...$$restProps}>
  <header class="py-2">
    <div class="input-group" class:input-group-lg={$_settings.op1}>
      <input
        bind:value={newTask}
        type="text"
        class="form-control"
        placeholder="new Task"
      />
      <button
        on:click={() => addNewTodo()}
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2">{loading ? "... loading" : "Add Task"}</button
      >
    </div>
  </header>
</section>

<svelte:window on:keypress={handleKeyPress} />
