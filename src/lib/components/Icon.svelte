<script>
  export let name = "edit"
</script>

<svg {...$$restProps}>
  <use xlink:href="#nwp-{name}" />
</svg>

<style>
  svg {
    display: inline-block;
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: var(--st, currentColor);
    fill: var(--fi, currentColor);
    font-size: var(--fs, 1rem);
  }
</style>
