<script>
    import Tags from './Tags.svelte';
    export let project;
</script>

<a style="display:block" href={project.url}>
  <div class="preview-block" on:click={console.log()}>
    <div style="background-image:url({project.img})">
      <h1>{project.title}</h1>
      <p class="description">{project.description || ''}</p>
    </div>
  </div>
</a>

<style>
  a:link { text-decoration: none; }
  a:visited { text-decoration: none; }
  a:hover { text-decoration: none; }
  a:active { text-decoration: none; }

  .preview-block {
    word-wrap: break-word;
    border: 1px solid var(--bg-col);
    border-radius: var(--border-radius);
    min-height: 150px;
    padding: 14px;
    margin: 14px;
    cursor: pointer;
    transition: border 1s ease;
  }

  .preview-block:hover {
    border: 1px solid var(--c-salmon);
    background: var(--alt-bg-col);
    color: var(--alt-col);
    transition: background 1s ease, color 1s ease, border 0.1s linear;
  }

  p {
    font-size: 1.2em;

  }
</style>
