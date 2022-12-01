<script>
  import { onDestroy } from "svelte";
  import { _settings } from "../../lib/data";
  export let todo, updateTodo, deleteTodo;
  let open;
  onDestroy(() => {
		open = false;
	});
</script>

<div class="p-0" class:done={todo.isComplete}>
  <div class="input-group my-1" class:input-group-lg={$_settings.op1}>
    <div class="input-group-text">
      <input
        class="form-check-input mt-0"
        type="checkbox"
        checked={todo.isComplete}
        on:change={(e) => {
          todo.isComplete = e.currentTarget.checked;
          updateTodo(todo);
        }}
      />
    </div>
    <input
      type="text"
      value={todo.task}
      on:blur={(e) => {
        todo.task = e.currentTarget.value;
        updateTodo(todo);
      }}
      class="form-control"
      placeholder="..."
    />
    <button
      class="btn btn-outline-danger"
      type="button"
      on:click={() => {
        open = true;
      }}>Delete</button
    >
  </div>
</div>

{#if open}

  <div
    class="modal modal-alert modal-sm show fade"
    tabindex="-1"
    role="dialog"
   style="display: block;"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content rounded-3 shadow">
        <div class="modal-body p-4 text-center">
          <h5 class="mb-0">Delete Task?</h5>
          <p class="mb-0">
            {todo.task}
          </p>
        </div>
        <div class="modal-footer flex-nowrap p-0">
          <button
            on:click={() => {
              open = false;
              deleteTodo(todo);
              
              }}
            type="button"
            class="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-end"
            ><strong>Yes, delete</strong></button
          >
          <button
            on:click={() => {
              open = false;
            }}
            type="button"
            class="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0"
            >No thanks</button
          >
        </div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop fade show"></div>
{/if}

<style>
  .done {
    opacity: 0.5;
  }
  .done input[type="text"] {
    text-decoration: line-through;
  }
</style>
