<template>
  <Layout>
    <AllProjects />
  </Layout>
</template>

<script>
import AllProjects from '~/components/AllProjects.vue'

export default {
  components: {
    AllProjects
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
