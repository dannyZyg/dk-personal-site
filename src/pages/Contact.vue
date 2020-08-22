<template>
  <Layout>
    <ContactForm>
    </ContactForm>
  </Layout>

</template>


<script>

import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    ContactForm
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
