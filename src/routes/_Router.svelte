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
  function routeLoading(event) {
   // console.log('XXX---RouteLoading event',event.detail)
    // console.log('Route', event.detail.route)
    // console.log('Location', event.detail.location)
    // console.log('Querystring', event.detail.querystring)
    // console.log('User data', event.detail.userData)
}

function routeLoaded(event) {
   // console.log('OOO---routeLoaded event', event.detail)
    // The first 5 properties are the same as for the routeLoading event
    // console.log('Route', event.detail.route)
    // console.log('Location', event.detail.location)
    // console.log('Querystring', event.detail.querystring)
    // console.log('Params', event.detail.params)
    // console.log('User data', event.detail.userData)
    // The last two properties are unique to routeLoaded
    // console.log('OO---Component', event.detail.component) // This is a Svelte component, so a function
    // console.log('OO---Name', event.detail.name)
}
</script>

<TopBar />
<Transition>
  <Router {routes} on:routeLoading={routeLoading}
  on:routeLoaded={routeLoaded} />
</Transition>
