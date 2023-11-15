<script>
  import Board from "./lib/Board.svelte";
  import Headline from "./lib/Headline.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Footer from "./lib/Footer.svelte";
  import Subsection from "./lib/Subsection.svelte";
  import Option from "./lib/Option.svelte";
  import SignUpButton from "./lib/SignUpButton.svelte";

  const title1 = "What is Caviato?";
  const content1 = `
    Caviato is a simple drag-and-drop AI Assistant build tools that lets ANYONE
    build their own custom AI Assistant or Virtual Personalities.
  `;

  const title2 = "What can you build with Caviato?";
  const content2 = `
    With Caviato, the possibility is only limited by your imagination.
    Whether to help you settle your daily tasks or
    to help streamline your cusomter support process,
    Caviato can empower you to do more with less.
  `;

  const title3 = "Why should you use Caviato?";
  const content3 = `
    Caviato made building autonomous agents quick and easy with our intuitive drag-and-drop,
    no-code interface. You can also choose to deploy your model either on our cloud or
    internally within your company, we give you the flexibility and the privacy that you need
    without sacrificing speed and convienience. We also provide first-class support to all of
    our customers, and frequently updates our module to suit your needs. 
  `;
</script>

<div class="container">
  <Navbar />
  <div class="body">
    <Headline />
    <SignUpButton />

    <Board />

    <Subsection title={title1} content={content1}>
      <Option
        green
        description="
            Build out your logic
        "
      >
        <img
          src="   https://cdn-icons-png.flaticon.com/512/4187/4187334.png "
          width="100"
          height="100"
          alt=""
          title=""
          class="img-small"
        />
      </Option>
      <Option
        green
        description="
          Upload your business document and knowledge
        "
      >
        <img
          src="   https://cdn-icons-png.flaticon.com/512/4041/4041438.png "
          width="100"
          height="100"
          alt=""
          title=""
          class="img-small"
        />
      </Option>
      <Option
        green
        description="
          Deploy to anywhere in 5 minutes
        "
      >
        <img
          src="   https://cdn-icons-png.flaticon.com/512/1584/1584892.png "
          width="100"
          height="100"
          alt=""
          title=""
          class="img-small"
        />
      </Option>
    </Subsection>

    <br />

    <Subsection title={title2} content={content2}>
      <Option
        description="
            Build your own assistant to help you with managing your daily 
            task such as drafting email and schedule meeting
        "
      >
        <img
          src="   https://cdn-icons-png.flaticon.com/512/780/780623.png "
          width="100"
          height="100"
          alt=""
          title=""
          class="img-small"
        />
      </Option>
      <Option
        description="
          Build a customized virtual personality for your hospitality robot
        "
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/5828/5828521.png "
          width="100"
          height="100"
          alt=""
          title=""
          class="img-small"
        />
      </Option>
      <Option
        description="
          Build a smart chatbot that helps sell products to your customer
        "
      >
        <img
          src="   https://cdn-icons-png.flaticon.com/512/10472/10472979.png "
          width="100"
          height="100"
          alt=""
          title=""
          class="img-small"
        />
      </Option>
    </Subsection>
    <br />

    <!-- {#if window.innerWidth <= 600}
      <SignUpButton />
    {/if}
    <br /> -->

    <!-- <Subsection title={title3} content={content3}>
      <Option
        description="
          Easy to use drag-and-drop, no-code interface.
        "
      >
        <img
          src="   https://cdn-icons-png.flaticon.com/512/1589/1589085.png "
          width="100"
          height="100"
          alt=""
          title=""
          class="img-small"
        />
      </Option>
      <Option
        description="
          Flexibility in deployment, with focus on privacy and reliability.
        "
      >
        <img
          src="   https://cdn-icons-png.flaticon.com/512/1163/1163497.png "
          width="100"
          height="100"
          alt=""
          title=""
          class="img-small"
        />
      </Option>
      <Option
        description="
          First-class customer support and updates.
        "
      >
        <img
          src="   https://cdn-icons-png.flaticon.com/512/4233/4233839.png "
          width="100"
          height="100"
          alt=""
          title=""
          class="img-small"
        />
      </Option>
    </Subsection>
    <br /> -->

    <SignUpButton />
  </div>
  <Footer />
</div>

<style>
  .body {
    margin: auto;
    flex-grow: 1;
    max-width: 1000px;
    padding: 0px 32px;
  }

  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
