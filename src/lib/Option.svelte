<script>
  export let description =
    "Occaecat excepteur velit consequat eiusmod incididunt proident eu ullamco cillum Lorem quis qui eu";
  export let green = false;
</script>

<div class="container" class:green>
  <div class="icon">
    <slot />
  </div>
  <div class="description">{description}</div>
</div>

<style>
  .container {
    border-top: 1px solid #8080802c;
    border-left: 1px solid #8080802c;
    border-radius: 16px;
    background-color: #d8594329;
    box-shadow: 2px 2px #8080802c;
    flex: 1;
  }

  .green {
    background-color: #67b9a442;
  }

  .icon {
    margin: 24px;
  }

  .description {
    font-size: 0.9rem;
    margin: 16px 16px;
  }
</style>
