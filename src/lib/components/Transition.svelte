<script>
  import { location } from "svelte-spa-router";
  import { fade } from "svelte/transition";
  export let dura = 500;
</script>


  {#key $location}
    <main in:fade={{ duration: dura }}>
      <slot />
    </main>
  {/key}


<style>
  main {
    flex: 1;
    width: 100%;
  }
</style>
