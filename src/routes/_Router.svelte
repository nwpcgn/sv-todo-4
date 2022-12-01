<script>
  import Router from "svelte-spa-router";
  import TopBar from "../lib/components/TopBar.svelte";
  import Transition from "../lib/components/Transition.svelte";
  import Start from "./Start.svelte";
  import NotFound from "./NotFound.svelte";
  import Settings from "./Settings.svelte";
  import User from "./User.svelte";
  import Data from "./Data.svelte";
  const routes = {
    "/": Start,
    "/data/*": Data,
    "/settings/*": Settings,
    "/user/*": User,
    "*": NotFound,
  };
</script>

<TopBar />
<Transition>
  <Router {routes} />
</Transition>
