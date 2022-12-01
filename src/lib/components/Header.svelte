<script>
  export let titel = "Nwp-Studio";
  export let sub = "Application";
  export let bg =
    "https://nwp-cgn.de/studio/upload/kat11/server/php/files/jc1.png";
</script>

<section class="flex-grow-x1 bg-dark text-light">
  <div class="container-xl">
    <div class="align-items-center row">
      <div class="col-lg-6 order-lg-last p-0">
        <!-- {@html image1} -->
        <img
          src={bg
            ? bg
            : "https://nwp-cgn.de/studio/upload/kat11/server/php/files/id_card.png"}
          class="img-fluid"
          alt=""
        />
      </div>
      <div class="col-lg-6 pb-5 pe-4 pe-sm-5 ps-4 ps-sm-5 pt-5">
        <p class="h6 text-primary text-uppercase fst-italic fw-semibold mb-3">
          Nwp-Studio
        </p>
        <h1 class="display-4 fw-bold mb-3">
          {titel ? titel : "The Natural Experience"}
        </h1>
        <p class="fw-light fs-2 text-muted mb-5">
          {sub
            ? sub
            : "Our ability to feel, act and communicate is indistinguishable from magic."}
        </p>
        <slot>
          
        </slot>
      </div>
    </div>
  </div>
</section>
