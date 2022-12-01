<script>
  import { _user, supabase, _settings } from "../../lib/data";
  import { fade } from "svelte/transition";
  import { quintIn } from 'svelte/easing';
  let loading;
  export let profile = {};
  export let getProfil;
  export let editing;
  export let dura = 600;
  let username = profile.username,
    website = profile.website,
    img_url = profile.img_url,
    location = profile.location;

  const updateProfile = async () => {
    try {
      loading = true;
      let uid = $_user.id;
      const updates = {
        id: uid,
        username,
        website,
        img_url,
        location,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);

      if (error) {
        throw error;
      } else {
        getProfil();
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      loading = false;
      editing = false;
    }
  };
</script>

<section in:fade={{duration: dura, easing: quintIn}}>
  <div class="container-lg">
      <div class="card">
          <figure class="py-2 mb-0">
              <img src={img_url ? img_url : "http://pinegrow.com/placeholders/img18_thumb.jpg" } alt="img" class="img-fluid" />
          </figure>
          <hr class="my-2">
          <div class="card-body py-4">
              <form class="" on:submit|preventDefault={updateProfile}>
                  <div class="mb-2 row">
                      <label for="in1" class="col-3 col-form-label" class:label-lg={$_settings.op1}> Username </label>
                      <div class="col-9">
                          <input id="in1" type="text" class="form-control" class:form-control-lg={$_settings.op1} placeholder="Username" value={username ? username : "" } on:change={(e)=> { username = e.currentTarget.value; }} /> </div>
                  </div>
                  <div class="mb-2 row">
                      <label for="in2" class="col-3 col-form-label" class:label-lg={$_settings.op1}> Location </label>
                      <div class="col-9">
                          <input id="in2" type="text" class="form-control" class:form-control-lg={$_settings.op1} placeholder="Location" value={location ? location : "" } on:change={(e)=> { location = e.currentTarget.value; }} /> </div>
                  </div>
                  <div class="mb-2 row">
                      <label for="in3" class="col-3 col-form-label" class:label-lg={$_settings.op1}> Website </label>
                      <div class="col-9">
                          <input id="in3" type="url" class="form-control" class:form-control-lg={$_settings.op1} placeholder="https://" value={website ? website : "" } on:change={(e)=> { website = e.currentTarget.value; }} /> </div>
                  </div>
                  <div class="mb-1 row">
                      <label for="in4" class="col-3 col-form-label" class:label-lg={$_settings.op1}> Avatar </label>
                      <div class="col-9">
                          <input id="in4" type="url" class="form-control" class:form-control-lg={$_settings.op1} placeholder="https://" value={img_url ? img_url : "" } on:blur={(e)=> { img_url = e.currentTarget.value; }} /> </div>
                  </div>
              </form>
          </div>
          <hr class="my-2">
          <footer class="card-body">
              <div class="text-end">
                  <button on:click={()=> { editing = false; }} class="btn btn-secondary me-3" class:btn-lg={true}>Abbruch</button>
                  <button on:click={updateProfile} type="button" class="btn btn-primary" class:btn-lg={true}>{loading ? "... loading" : "Speichern"}</button>
              </div>
          </footer>
      </div>
</section>

<style>
  .label-lg {
    font-size: 1.25rem;
  }
  figure {
    max-height: 150px;
    text-align: center;
  }
</style>
