<script>
  export let width = 'auto';
</script>

<span style="width: {width}"><slot /></span>

<style>
  span {
    display: inline-block;
    border: 1px solid;
    border-radius: 0;
    padding: 0.5em 1em;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
  }
  span:focus,
  span:hover {
    border: 1px solid var(--c-salmon);
    border-radius: var(--border-radius);
    background: var(--alt-bg-col);
    color: var(--alt-col);
    transition: border-radius 1s ease, background 1s ease, color 1s ease, border 0.1s linear;
  }
</style>
