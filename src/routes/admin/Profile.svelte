<script>
  import SignOut from "../../lib/components/SignOut.svelte";
  import Icon from "../../lib/components/Icon.svelte";
  import { _user, _settings } from "../../lib/data";
  export let profile = {};
  export let editing;
  let { username, website, location, img_url } = profile;
  let loading;
  let icon_size = "20";
  let icon_style = `--fs: ${icon_size}px;`;
  let colClass = "col-lg-10";
</script>

<section {...$$restProps}>
  <div class="container-lg py-4">
    <div class="row justify-content-center">
      <div class="col-12 {colClass} text-center">
        <!-- <h3>Profile</h3> -->
        <img
          src={img_url
            ? img_url
            : "http://pinegrow.com/placeholders/img18_thumb.jpg"}
          alt="img"
          class="img-fluid mb-5"
        />
      </div>
      <div class="col-12 {colClass}">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="align-items-start d-flex fs-6 justify-content-between">
              <span> <Icon name="user" style={icon_style} /></span>
              <span class="ms-1 text-truncate">{username}</span>
            </div>
          </li>
          <li class="list-group-item">
            <div class="align-items-start d-flex fs-6 justify-content-between">
              <span> <Icon name="location" style={icon_style} /></span>
              <span class="ms-1 text-truncate">{location}</span>
            </div>
          </li>
          <li class="list-group-item">
            <div class="align-items-start d-flex fs-6 justify-content-between">
              <span> <Icon name="link" style={icon_style} /></span>
              <span class="ms-1 text-truncate">{website}</span>
            </div>
          </li>
          <li class="list-group-item">
            <div class="align-items-start d-flex fs-6 justify-content-between">
              <span> <Icon name="team" style={icon_style} /></span>
              <span class="ms-4 text-truncate fs-6">{img_url}</span>
            </div>
          </li>
          <li class="list-group-item text-muted">
            <div class="align-items-start d-flex fs-6 justify-content-between">
              <span> <Icon name="mail" style={icon_style} /></span>
              <span class="ms-1 text-truncate"
                >{$_user && $_user.email ? $_user.email : ""}</span
              >
            </div>
          </li>
          <li class="list-group-item text-muted">
            <div class="align-items-start d-flex fs-6 justify-content-between">
              <span> <Icon name="power" style={icon_style} /></span>
              <span class="ms-4 text-truncate"
                >{$_user && $_user.id ? $_user.id : ""}</span
              >
            </div>
          </li>
        </ul>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-12 col-lg-10 text-end">
          <button
          on:click={() => {
            editing = true;
          }}
            class="btn btn-primary"
            class:btn-lg={$_settings.op1}
            role="button">Bearbeiten</button>
          <SignOut bind:loading>
            <button
              type="button"
              class="btn btn-danger"
              class:btn-lg={$_settings.op1}
              >{loading ? "... loading" : "User Logout"}</button
            >
          </SignOut>
        </div>
      </div>
    </div>
  </div>
</section>
