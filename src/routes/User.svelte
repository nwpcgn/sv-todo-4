<script>
  import Router from "svelte-spa-router";
  import { link, push } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import Page from "../lib/components/Page.svelte";
  import Profile from "./Profile.svelte";
  import ProfileEdit from "./ProfileEdit.svelte";
  import SetForm from "./SetForm.svelte";
  import { _user, _settings, supabase } from "../lib/data";
  let promise, profil;
  const prefix = "/user";
  const routes = {
    "/": Profile,
    "/edit/": ProfileEdit
  };

</script>

<Page>
  <section class="container-lg py-4">
    <div class="row justify-content-center">
      <div class="col col-lg-10">
    <nav class="nav {$_settings.op2 ? 'nav-pills' : 'nav-tabs'} justify-content-end">
       <a class="nav-link" href="/user/" use:link use:active>Profile</a>
      <a class="nav-link" href="/user/edit/" use:link use:active>Edit</a>
    </nav>
  </div>
</div>
  </section>
  {#if $_user}
    <section class="container-lg py-4">
      <Router {routes} {prefix} />
    </section>
  {/if}
</Page>

<style>
</style>
