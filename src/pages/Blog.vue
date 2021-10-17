<template>
  <Layout>
  </Layout>
</template>

<page-query>
query {
  allBlogPost {
    edges {
      node {
        id
        path
        content
      }
    }
  }
}
</page-query>

<script>
</script>

<style>

</style>
