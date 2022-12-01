<script>
  import Loader from "../lib/data/comp/Loader.svelte";
  import { _user, supabase, _settings } from "../lib/data";
  import Profile from "./admin/Profile.svelte";
  import ProfileEdit from "./admin/ProfileEdit.svelte";
  let loading;
  let profile = null;
  let editing;
  let dura = 500;
  const generateProfil = async () => {
    console.log("generateProfil");
    try {
      loading = true;
      let uid = $_user.id;
      const { data, error } = await supabase
        .from("profiles")
        .insert([{ id: uid, username: "New User" }]);
      if (error) throw error;
      getProfil();
    } catch (error) {
      alert(error.message);
    } finally {
      loading = false;
    }
  };
  const getProfil = async () => {
    let uid = $_user.id;
    try {
      loading = true;
      let { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", uid);
      if (error) throw error;

      if (!data.length) {
        generateProfil();
      } else {
        profile = data[0];
        return data;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      loading = false;
    }
  };
  $: if ($_user) {
    getProfil();
  }
</script>

<section class="container-lg py-4">
  <nav class="nav justify-content-end {$_settings.op2 ? 'nav-pills' : 'nav-tabs'}">
      <button class="nav-link" on:click={()=> { editing = false; }} class:active={!editing}>Profile</button>
      <button class="nav-link" on:click={()=> { editing = true; }} class:active={editing}>Edit</button>
  </nav>
</section> 

{#if profile}
  {#if loading}
    <Loader />
  {:else if editing}
    <ProfileEdit bind:editing {profile} {dura} {getProfil} />
  {:else}
    <Profile bind:editing {profile} {dura} />
  {/if}
{/if}


