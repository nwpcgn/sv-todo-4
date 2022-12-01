<script>
    import { location } from "svelte-spa-router";
    import {fade} from 'svelte/transition';
    export let dura = 500;
</script>

<!-- {#key $location}
    <main in:fade="{{ duration: dura }}">
        <slot></slot>
    </main>
{/key} -->
<main><slot><!-- optional fallback --></slot></main>

<style>
  main {
    flex: 1;
  }
</style>
