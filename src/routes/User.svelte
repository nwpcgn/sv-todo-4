<script>
  import Loader from "../lib/data/comp/Loader.svelte";
  import { _user, supabase, sleep, _settings } from "../lib/data";
  import Profile from "./admin/Profile.svelte";
  import ProfileEdit from "./admin/ProfileEdit.svelte";
  let loading;
  let profile = null;
  let editing;
  const generateProfil = async () => {
    console.log("generateProfil");
    try {
      loading = true;
      let uid = $_user.id;
      const { data, error } = await supabase
        .from("profiles")
        .insert([{ id: uid, username: "New User" }]);
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    } finally {
      loading = false;
      promise = getProfil($_user.id);
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

{#if profile}
  {#if loading}
    <Loader />
  {:else if editing}
    <ProfileEdit bind:editing {profile} {getProfil} />
  {:else}
    <Profile bind:editing {profile} />
  {/if}
{/if}
