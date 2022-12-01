<script>
  import { _user } from "../lib/data";
  import bgimg from '../assets/jc001.jpg';
  import SignOut from "../lib/components/SignOut.svelte";
  export let titel = "Nwp-Studio";
  export let bg_size = "cover";
</script>

<section style="background-image: url({bgimg}); background-size: {bg_size}; background-repeat: no-repeat;">
  <header class="container p-4">
      <h2 class="display-1 fw-bold"> {titel} </h2>
      <div> {#if $_user}
      <div class="py-4">
        <a class="btn btn-outline-primary btn-lg px-4" href="#/data/" role="button"
          >Start Application</a
        >
      </div>
      <div>
        <SignOut>
        <button class="btn btn-link text-danger btn-sm"
          >Logout</button
        ></SignOut>
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
