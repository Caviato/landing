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
    Caviato is a platform that enable you to build your own autonomous agents
    by providing you with the fundamental building blocks supercharged with
    Generative AI capability, making it as straight forward and simple as playing with Lego.
    <br/><br/>
    You provide us with the blueprint,
    and we will help you take care of the rest.
    No technical knowledge required!
  `;

  const title2 = "What can you build with Caviato?";
  const content2 = `
    With Caviato, the possibility is only limited by your imagination.
    Whether to help you streamline your daily tasks or to make a virtual avatar for your company,
    Caviato can help make your vision come true.
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
    <Subsection title={title1} content={content1} />
    <Subsection title={title2} content={content2}>
      <Option
        green
        description="
            Build your own assistant to help you with managing your daily 
            task such as drafting email and schedule meeting.
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
        green
        description="
          Build a customized virtual avatar for your business
          or a personality for your own fleet of hospitality robot.
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
        green
        description="
          Build your own librarian for your business
          to help answer all of your business inquiry and
          even generate insight on the data you already have.
        "
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/5597/5597148.png "
          width="100"
          height="100"
          alt=""
          title=""
          class="img-small"
        />
      </Option>
    </Subsection>
    <br />

    {#if window.innerWidth <= 600}
      <SignUpButton />
    {/if}
    <br />
    <Subsection title={title3} content={content3}>
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
    <br />
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
