<script>
  import Icon from "./Icon.svelte";
  import NwpLogo from "./_NwpLogo.svelte";
  import { _user, navData } from "../data";
  import { location, link } from "svelte-spa-router";
  export let icon_size = "24";
  export let brand_size = "36";
  let icon_style = `--fs: ${icon_size}px;`;
  // $: console.log($router.path);
</script>

<nav class="bg-primary navbar navbar-dark navbar-expand shadow sticky-top">
  <div class="container-lg">
    <a class="my-0 navbar-brand py-0" href="#/">
      <NwpLogo height={brand_size} />
    </a>
    <ul class="ms-auto navbar-nav ps-2 w-auto">
      {#if $_user}
        <li class="nav-item px-1">
          <a
            use:link
            class="nav-link"
            class:active={$location.includes("data")}
            href="/data/"
          >
            <Icon name="db" style={icon_style} />
          </a>
        </li>
        <li class="nav-item px-1">
          <a
            use:link
            class="nav-link"
            class:active={$location.includes("user")}
            href="/user/"
          >
            <Icon name="user" style={icon_style} />
          </a>
        </li>
        <li class="nav-item px-1">
          <a
            use:link
            class="nav-link"
            class:active={$location.includes("settings")}
            href="/settings/"
          >
            <Icon name="settings" style={icon_style} />
          </a>
        </li>
      {:else}
        <li class="nav-item px-1">
          <span class="nav-link">
            <Icon name="hidden" style={icon_style} />
          </span>
        </li>
      {/if}
    </ul>
  </div>
</nav>
