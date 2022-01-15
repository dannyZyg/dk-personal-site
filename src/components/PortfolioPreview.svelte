<script>
    export let project;
</script>

<div class="card">
    <div class="titleCard" style="background-image:url({project.img})">
        <h1 class="title">{project.title}</h1>
    </div>
    <div class="pa3">
        <p class="desc mt0 mb2">{project.description}</p>
        <div class="tags">
            Tagged:
            {#each project.tags as t}
                <div class="tag" data-tag={t}>
                    {t}
                </div>
            {/each}
        </div>
        <a class="link" href={project.url}>
            <span class="linkInner">View</span>
        </a>
    </div>
</div>

<style>
</style>
