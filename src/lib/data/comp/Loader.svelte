<script>
  import { fade } from "svelte/transition";
</script>

<aside transition:fade={{ duration: 250 }}>
  <i class="gg-spinner" />
</aside>

<style>
  :root {
    --ggs: 9;
  }
  aside {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.8);
    color: rgba(255, 255, 255, 0.8);
    z-index: 2000;
  }
  /* .gg-spinner {
    --ggs: 8;
  } */
  .gg-spinner {
    transform: scale(var(--ggs, 1));
  }

  .gg-spinner,
  .gg-spinner::after,
  .gg-spinner::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 20px;
    height: 20px;
  }

  .gg-spinner::after,
  .gg-spinner::before {
    content: "";
    position: absolute;
    border-radius: 100px;
  }

  .gg-spinner::before {
    animation: spinner 1s cubic-bezier(0.6, 0, 0.4, 1) infinite;
    border: 3px solid transparent;
    border-top-color: currentColor;
  }

  .gg-spinner::after {
    border: 3px solid;
    opacity: 0.2;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
</style>
