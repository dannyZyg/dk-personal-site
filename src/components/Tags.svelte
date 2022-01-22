<script>
  export let tags = [];
</script>

<div class="tags-container">
  {#each tags as tag}
    <span class="tag">{tag}</span>
  {/each}
</div>

<style>
  .tags-container {
    display: flex;
    flex-direction: row;
  }

  .tag {
    background: var(--tag-col);
    color: var(--tag-text);
    margin: 5px;
    border: 2px solid var(--border-col);
    border-radius: 10px;
    padding: 8px;
    text-align: center;
    font-size: 12px;
  }
</style>
