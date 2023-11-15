<script>
  import { Svelvet, Node } from "svelvet";
</script>

<div class="container">
  <Svelvet height={window.innerHeight * 0.4} theme="custom" controls>
    <Node
      bgColor="white"
      label="Just"
      position={{ x: 50, y: 50 }}
      connections={[]}
    />
    <Node
      bgColor="white"
      label="Simply"
      position={{ x: 350, y: 50 }}
      connections={[]}
    />
    <Node
      bgColor="white"
      label="Connect"
      position={{ x: 350, y: 350 }}
      connections={[]}
    />
    <Node
      bgColor="white"
      label="Blocks"
      position={{ x: 650, y: 350 }}
      connections={[]}
    />
  </Svelvet>
</div>
<p class="subtitle">
  *our build tool is currently in beta, sign up to try our beta for free
</p>

<style>
  :root[svelvet-theme="custom"] {
    --background-color: #d8594329;
    --selection-box-color: #67b9a4;
    --node-border-radius: 16px;
  }

  .container {
    width: 80vw;
    max-width: 1000px;
    margin: 8px auto;
    box-shadow: 4px 4px rgba(128, 128, 128, 0.072);
  }
</style>
