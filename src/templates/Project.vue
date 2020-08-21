<template>
  <Layout>
    <g-link to="/experiments/">Experiments</g-link>
    <div v-html="$page.project.content"/>
  </Layout>
</template>

<page-query>
query Project ($path: String!) {
  project: project (path: $path) {
    title
    content
    tags
    image
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.title,
      tags: this.$page.tags
    }
  },
	props: {

	},
	components: {

	},
	computed: {

	}
}
</script>
