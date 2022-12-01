<script>
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import Page from "../lib/components/Page.svelte";
  import SetForm from "./SetForm.svelte";
  import { _user, _settings, supabase } from "../lib/data";
</script>

<Page>
  <section class="container-lg py-4">
    <div class="row justify-content-center">
      <div class="col col-lg-10">
        <nav
          class="nav justify-content-end {$_settings.op2
            ? 'nav-pills'
            : 'nav-tabs'}"
        >
          <a class="nav-link" href="/settings/" use:link use:active>Settings</a>
        </nav>
      </div>
    </div>
  </section>
  {#if $_user}
    <section class="container-lg py-4">
      <div class="row justify-content-center">
        <div class="col col-lg-10">
          <SetForm />
        </div>
      </div>
    </section>
    {:else}
    <div>
      <a class="btn btn-dark btn-lg" href="#/login/" role="button">Anmelden</a
      >
    </div>
  {/if}
</Page>
