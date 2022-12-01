<script>
  import { _user } from "../lib/data";
  import bgimg from '../assets/jc001.jpg';
  import SignOut from "../lib/components/SignOut.svelte";
  export let titel = "Nwp-Studio";
  export let sub = "Application";
  export let bg =
    "https://nwp-cgn.de/studio/upload/kat11/server/php/files/jc1.png";
  export let bg_size = "cover";
</script>

<section
  style="background-image: url({bgimg}); background-size: {bg_size}; background-repeat: no-repeat;"
>
  <header class="container p-5">
    <h2 class="display-4">
      {titel}
    </h2>
    <p class="fs-5">{sub}</p>
    <div class="py-2">
      {#if $_user}
        <div class="mb-2">
          <a class="btn btn-dark btn-lg" href="#/data/" role="button"
            >Start Application</a
          >
        </div>
        <div>
          <SignOut>
          <button class="btn btn-link text-danger btn-md"
            >Logout</button
          ></SignOut>
        </div>
      {:else}
        <div>
          <a class="btn btn-dark btn-lg" href="#/login/" role="button">Anmelden</a
          >
        </div>
      {/if}
    </div>
  </header>
</section>

<style>
  section {
    flex: 1;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  header {
    background-color: rgba(0, 0, 0, 0.25);
    color: white;
    border-radius: 1rem;
  }
</style>
