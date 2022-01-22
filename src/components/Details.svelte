<script>
import Button from '../components/Button.svelte';
let buttonWidth = '200px';
</script>

<div class="content center-flex">
  <div class="title">
    <h1>Danny Keig</h1>
    <h5>software engineer | art maker | sound explorer | tinkerer</h5>
  </div>
  <div class="buttons">
    <a href="/about">
      <Button width={buttonWidth}>about me</Button>
    </a>
    <a href="/projects">
      <Button width={buttonWidth}>projects</Button>
    </a>
  </div>
</div>

<style>
  .center-flex {
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .title {
    text-align: left;
    margin-bottom: 2rem;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  a {
    margin: 20px 0 20px 0;
  }
  :global(span) {
    /* width: 70%; */
  }
</style>
