<script>
  import { _user, supabase } from "../data";
  import { router } from "tinro";
  let email = '';
  let password = '';
  let loading;
  let header = "Anmeldung";
  let label = "Anmelden";
  const signUp = async () => {
    loading = true;
    try {
      let { user, error } = await supabase.auth.signUp({
        email,
        password
      });
      if (error) throw error;
    } catch (error) {
      alert("Error Sign Up!");
    } finally {
      loading = false;
      router.goto('/login'); 
    }
  };
</script>

<section {...$$restProps}>
  <form class="form-signin text-center" on:submit|preventDefault={signUp}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="72"
      height="72"
      class="mb-3"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M14.256 21.744L12 24l-2.256-2.256C5.31 20.72 2 16.744 2 12 2 6.48 6.48 2 12 2s10 4.48 10 10c0 4.744-3.31 8.72-7.744 9.744zm-8.233-6.328C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
        />
      </g>
    </svg>
    <h1 class="h3 mb-3 fw-normal">{header}</h1>
    <label for="inputEmail" class="visually-hidden">Email address</label>
    <input
      bind:value={email}
      type="email"
      id="inputEmail"
      class="form-control"
      placeholder="Email address"
      required=""
      autofocus=""
    />
    <label for="inputPassword" class="visually-hidden">Password</label>
    <input
      bind:value={password}
      type="password"
      id="inputPassword"
      class="form-control"
      placeholder="Password"
      required=""
    />
    <div class="mb-3" />
    <button class="w-100 btn btn-lg btn-primary" type="submit"
      >{!loading ? label : "...loading"}</button
    >
    <button class="w-100 btn btn-link" type="reset"
      >Clear</button
    >
    <p class="mt-4 mb-3 text-muted">©nwp-studio <a href="/login" class="mb-3 text-center">Einloggen</a></p>
    
  </form>
</section>

<style>
  section {
    width: 100%;
  }

</style>
