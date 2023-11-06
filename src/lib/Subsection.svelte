<script>
  export let title = "Tempor eu eiusmod ut";
  export let content =
    "Aliquip consectetur magna culpa cillum laborum eiusmod laboris ipsum magna. Irure dolore deserunt commodo proident reprehenderit reprehenderit consectetur esse ex reprehenderit nulla quis velit. Enim sint tempor excepteur ut Lorem minim ullamco veniam irure laboris id magna exercitation magna sit. Eiusmod excepteur esse non ea fugiat eu culpa sit sunt mollit. Eiusmod tempor eiusmod ex elit. Eiusmod occaecat deserunt nostrud deserunt amet. Laborum voluptate deserunt nostrud magna ipsum ut";
</script>

<div class="container">
  <div class="title">{title}</div>
  <div class="content">{@html content}</div>
  <div class="options">
    <slot />
  </div>
</div>

<style>
  .container {
    display: block;
    margin: 32px auto;
    text-align: center;
    font-family: "Poppins", sans-serif;
    max-width: 800px;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
  }
  .content {
    font-size: 1.2rem;
    margin: 32px auto;
    text-align: justify;
  }

  .options {
    margin-top: 64px;
    display: flex;
    justify-content: space-around;
    gap: 24px;
  }

  @media only screen and (max-width: 600px) {
    .title {
      font-size: 1.6rem;
      max-width: 300px;
      margin: auto;
    }

    .content {
      font-size: 1rem;
      max-width: 300px;
    }

    .options {
      flex-direction: column;
    }
  }
</style>
