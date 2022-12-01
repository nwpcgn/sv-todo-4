<script>
  import { onMount } from "svelte";
  import { _user, supabase, sleep } from "./lib/data";
  import { push } from "svelte-spa-router";
  import SignIn from "./lib/components/SignIn.svelte";
  import Page from "./lib/components/Page.svelte";
  import Iconlib from "./lib/components/Iconlib.svelte";
  import Router from "./routes/_Router.svelte";

  const changeAuth = async (obj) => {
    await sleep(1000);
    _user.set(obj);
  };

  onMount(async () => {
    _user.set(supabase.auth.getUser());
    push("/");
  });

  supabase.auth.onAuthStateChange((event, session) => {
    if (event == "SIGNED_IN") {
      changeAuth(session.user);
    } else {
      changeAuth(null);
    }
  });
  $: if (!$_user) {
    push("/");
  }
</script>

<Iconlib />

{#if $_user}
  <Router />
{:else}
  <Page center>
    <SignIn />
  </Page>
{/if}
