<script>
  import { _user, supabase, sleep } from "../data";
  export let loading;
  const signOut = async () => {
    loading = true;
    try {
      let { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      alert("Error Logout!");
    } finally {
      await sleep(800);
      loading = false;
    }
  };
</script>

<span on:click={signOut} {...$$restProps}>

<slot><!-- optional fallback --></slot>

</span>