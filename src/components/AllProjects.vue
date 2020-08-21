<template>
	<div class="all-projects">
    <ul class="flexbox-container">
      <li class="flex-item" v-for="project in $static.projects.edges" :key="project.id">
        <g-link :to="project.node.path">
          <g-image :src="require(`!!assets-loader!@images/${project.node.image}`)" :alt="project.node.path" loop="infinite"/>
        </g-link>
      </li>
    </ul>
	</div>
</template>

<static-query>
query Projects {
  projects: allProject {
    edges {
      node {
        id
        title
        tags
        image
        path
      }
    }
  }
}
</static-query>

<script>
export default {
  name: 'All Projects',
  data () {
    return {
      message: 'Try change me!'
    }
  },
  methods: {
    onClick () {
      this.message = 'Here you go :)'
    }
  }
}
</script>

<style>

.flexbox-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.flex-item {
  order: 1;
  padding: 0.5rem;
  flex-shrink: 1;
}

ul {
  margin: 0px;
  padding: 0px;
}

li {
  list-style-type: none;
}
</style>
