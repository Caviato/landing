<script>
  function delay(e) {
    e.preventDefault();
    setTimeout(() => {
      window.open(e.target.parentNode.href);
    }, 300);
  }
</script>

<div class="container">
  <div class="button-container">
    <div class="shadow" />
    <a href="https://www.google.com/" target="_blank" on:click={delay}>
      <button>Sign Up</button>
    </a>
  </div>
  <div class="subtitle">for early access now!</div>
</div>

<style>
  .container {
    max-width: 300px;
    text-align: center;
    margin: 32px auto;
  }

  .button-container {
    width: 150px;
    margin: auto;
    display: grid;
  }

  a,
  .shadow {
    grid-column: 1;
    grid-row: 1;
  }

  button {
    width: 150px;
    height: 60px;
    padding: 16px;
    border-radius: 32px;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    background-color: #d85943f3;
    border: none;
    transition: all 0.2s;
    font-family: "Poppins", sans-serif;
  }

  .shadow {
    width: 150px;
    height: 60px;
    background-color: #892f1ff3;
    border-radius: 32px;
    margin-top: 3px;
    margin-left: 2px;
  }

  button:active {
    border: none;
    transform: translate(2px, 3px);
  }

  .subtitle {
    font-size: 1rem;
  }
</style>
