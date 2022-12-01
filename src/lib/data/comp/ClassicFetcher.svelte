<script>
  import { _bb_classics } from "../stores/_bb_classics";
  import Loader from "./Loader.svelte";
  export let refresh = true;
  let daten;
  const unsubscribe = _bb_classics.subscribe((value) => {
    daten = value;
  });
</script>

{#if refresh}
  <nav {...$$restProps}>
    <span class="flex-1">
      <slot name="top" />
    </span>
    <button on:click={() => _bb_classics.fetchAll()} class="button">
      <i class="gg-sync" />
    </button>
  </nav>
{/if}

{#await daten}
  <Loader />
{:then payload}
  <slot {payload}
    >
    <pre class="p-4 rounded-xl">{payload.length ? `Array Length: ${payload.length}` : 'Press The Refresh Button'}</pre>
    </slot
  >
{:catch error}
  <div class="block p-4 text-lg text-bold text-red-800 text-center">Error</div>
{/await}

<style>
  :root {
    --btn-size: 34px;
    --btn-p: rgba(37, 99, 235, 1);
    --btn-bg: transparent; 
    --btn-s: #fff;
    --lo-h: 100px;
    --lo-w: 100%;
    --ggs: 24px;
  }
  .gg-sync {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    border-radius: 40px;
    border: 2px solid;
    margin: 1px;
    border-left-color: transparent;
    border-right-color: transparent;
    width: 18px;
    height: 18px
  }

  .gg-sync::after,
  .gg-sync::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    transform: rotate(-45deg)
  }

  .gg-sync::before {
    border-left: 6px solid;
    bottom: -1px;
    right: -3px
  }

  .gg-sync::after {
    border-right: 6px solid;
    top: -1px;
    left: -3px
  }

  button {
    color: var(--btn-p);
    background-color: var(--btn-bg);
    width: var(--btn-size);
    height: var(--btn-size);
    @apply flex justify-center items-center shadow rounded-full transition duration-300;
  }

  button:hover {
    color: var(--btn-s, #ffffff);
    background-color: var(--btn-p);
  }
  nav {
    @apply flex items-center py-2;
  }
</style>
