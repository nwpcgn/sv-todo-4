<script>
  import Router from "svelte-spa-router";
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import Page from "../lib/components/Page.svelte";
  import { _user, _settings } from "../lib/data";
  import Todos from "./todos/Todos.svelte";
  const prefix = "/data";
  const routes = {
    "/": Todos,
  };
</script>

<Page>
  <section class="container-lg py-4">
    <div class="row justify-content-center">
      <div class="col col-lg-10">
        <nav
          class="nav {$_settings.op2
            ? 'nav-pills'
            : 'nav-tabs'} justify-content-end"
        >
          <a class="nav-link" href="/data/" use:link use:active>Application</a>
        </nav>
      </div>
    </div>
  </section>
  {#if $_user}
    <section class="container-lg py-4">
      <div class="row justify-content-center">
        <div class="col col-lg-10">
          <Router {routes} {prefix} />
        </div>
      </div>
    </section>
  {/if}
</Page>

<style>
</style>
