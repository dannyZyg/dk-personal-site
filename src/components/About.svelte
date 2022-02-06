<script lang='ts'>
  import Links from '../components/Links.svelte';

  export let description: string;
  export let source: HTMLElement;

</script>

<div>
    <div class="source content">
      {@html source}
      <Links />
    </div>
</div>

<style>
  .source {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }
</style>
