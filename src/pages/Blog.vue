<template>
  <Layout>
  </Layout>
</template>

<page-query>
query {
  allPost {
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
