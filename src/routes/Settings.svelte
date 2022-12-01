<script>
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import Page from "../lib/components/Page.svelte";
  import SetForm from "./admin/SetForm.svelte";
  import { _user, _settings } from "../lib/data";
</script>

<Page>
  <section class="container-lg py-4">
    <nav
      class="nav justify-content-end {$_settings.op2
        ? 'nav-pills'
        : 'nav-tabs'}"
    >
      <a class="nav-link" href="/settings/" use:link use:active>Settings</a>
    </nav>
  </section>
  {#if $_user}
    <section class="container-lg">
      <SetForm />
    </section>
  {/if}
</Page>
