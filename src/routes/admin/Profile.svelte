<script>
  import SignOut from "../../lib/components/SignOut.svelte";
  import Icon from "../../lib/components/Icon.svelte";
  import { _user, _settings } from "../../lib/data";
  import { fade } from "svelte/transition";
  import { quintIn } from 'svelte/easing';
  export let profile = {};
  export let editing;
  export let dura = 600;
  let { username, website, location, img_url } = profile;
  let loading;
  export let icon_size = "20";
  let icon_style = `--fs: ${icon_size}px;`;
</script>

<section in:fade={{duration: dura, easing: quintIn}}>
  <div class="container-lg">
      <div class="card">
          <figure class="py-2 mb-0">
              <img src={img_url ? img_url : "http://pinegrow.com/placeholders/img18_thumb.jpg" } alt="img" class="img-fluid" />
          </figure>
          <div class="border-top border-bottom my-2">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                      <div class="align-items-start d-flex fs-6 justify-content-between">
                          <span>
                              <Icon name="user" style={icon_style} /></span>
                          <span class="ms-1 text-truncate">{username}</span>
                      </div>
                  </li>
                  <li class="list-group-item">
                      <div class="align-items-start d-flex fs-6 justify-content-between">
                          <span>
                              <Icon name="location" style={icon_style} /></span>
                          <span class="ms-1 text-truncate">{location}</span>
                      </div>
                  </li>
                  <li class="list-group-item">
                      <div class="align-items-start d-flex fs-6 justify-content-between">
                          <span>
                              <Icon name="link" style={icon_style} /></span>
                          <span class="ms-1 text-truncate">{website}</span>
                      </div>
                  </li>
                  <li class="list-group-item">
                      <div class="align-items-start d-flex fs-6 justify-content-between">
                          <span>
                              <Icon name="team" style={icon_style} /></span>
                          <span class="ms-4 text-truncate fs-6">{img_url}</span>
                      </div>
                  </li>
                  <li class="list-group-item text-muted">
                      <div class="align-items-start d-flex fs-6 justify-content-between">
                          <span>
                              <Icon name="mail" style={icon_style} /></span>
                          <span class="ms-1 text-truncate">{$_user && $_user.email ? $_user.email : ""}</span>
                      </div>
                  </li>
                  <li class="list-group-item text-muted">
                      <div class="align-items-start d-flex fs-6 justify-content-between">
                          <span>
                              <Icon name="power" style={icon_style} /></span>
                          <span class="ms-4 text-truncate">{$_user && $_user.id ? $_user.id : ""}</span>
                      </div>
                  </li>
              </ul>
          </div>
          <footer class="card-body">
              <div class="text-end">
                  <button on:click={()=> { editing = true; }} class="btn btn-primary me-3" class:btn-lg={true}>Bearbeiten</button>
                  <SignOut bind:loading>
                      <button type="button" class="btn btn-danger" class:btn-lg={true}>{loading ? "... loading" : "Logout"}</button>
                  </SignOut>
              </div>
          </footer>
      </div>
  </div>
</section>

<style>
  figure {
    max-height: 150px;
    text-align: center;
  }
</style>
