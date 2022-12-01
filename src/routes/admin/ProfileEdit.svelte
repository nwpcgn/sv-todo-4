<script>
  import { _user, supabase, sleep, _settings } from "../../lib/data";
  let loading;
  export let profile = {};
  export let getProfil;
  export let editing;
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
  username;
</script>

<section {...$$restProps}>
  <div class="container-lg py-4">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-10 text-center">
        <!--  <h3>Profile</h3> -->
        <img
          src={img_url
            ? img_url
            : "http://pinegrow.com/placeholders/img18_thumb.jpg"}
          alt="img"
          class="img-fluid mb-5"
        />
      </div>
      <div class="col-12 col-lg-10">
        <form class="" on:submit|preventDefault={updateProfile}>
          <div class="mb-2 row">
            <label
              for="in1"
              class="col-3 col-form-label"
              class:label-lg={$_settings.op1}
            >
              Username
            </label>
            <div class="col-9">
              <input
                id="in1"
                type="text"
                class="form-control"
                class:form-control-lg={$_settings.op1}
                placeholder="Username"
                value={username ? username : ""}
                on:change={(e) => {
                  username = e.currentTarget.value;
                }}
              />
            </div>
          </div>
          <div class="mb-2 row">
            <label
              for="in2"
              class="col-3 col-form-label"
              class:label-lg={$_settings.op1}
            >
              Location
            </label>
            <div class="col-9">
              <input
                id="in2"
                type="text"
                class="form-control"
                class:form-control-lg={$_settings.op1}
                placeholder="Location"
                value={location ? location : ""}
                on:change={(e) => {
                  location = e.currentTarget.value;
                }}
              />
            </div>
          </div>
          <div class="mb-2 row">
            <label
              for="in3"
              class="col-3 col-form-label"
              class:label-lg={$_settings.op1}
            >
              Website
            </label>
            <div class="col-9">
              <input
                id="in3"
                type="url"
                class="form-control"
                class:form-control-lg={$_settings.op1}
                placeholder="https://"
                value={website ? website : ""}
                on:change={(e) => {
                  website = e.currentTarget.value;
                }}
              />
            </div>
          </div>
          <div class="mb-2 row">
            <label
              for="in4"
              class="col-3 col-form-label"
              class:label-lg={$_settings.op1}
            >
              Avatar
            </label>
            <div class="col-9">
              <input
                id="in4"
                type="url"
                class="form-control"
                class:form-control-lg={$_settings.op1}
                placeholder="https://"
                value={img_url ? img_url : ""}
                on:blur={(e) => {
                  img_url = e.currentTarget.value;
                }}
              />
            </div>
          </div>
          <hr class="mb-5 mt-4" />

          <div class="mb-2 py-2 text-end">
            
              <button
                on:click={() => {
                  editing = false;
                }}
                class="d-blockxw-100 btn btn-primary me-2"
                class:btn-lg={$_settings.op1}>Show Profile</button
              >
        
              <button
                type="submit"
                class="d-blockxw-100 btn btn-secondary"
                class:btn-lg={$_settings.op1}
                >{loading ? "... loading" : "Save Changes"}</button
              >
            
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<style>
  .label-lg {
    font-size: 1.25rem;
  }
  .form-control-plaintext {
    font-weight: 600;
  }
</style>
