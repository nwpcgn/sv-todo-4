<script>
  export let center = false;
</script>

<section class="page-container" class:center {...$$restProps}>
  <slot><!-- optional fallback --></slot>
</section>

<style global>
  .page-container {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }

  .page-container.center {
    align-items: center;
    justify-content: center;
  }
</style>
