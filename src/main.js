// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vuelidate from 'vuelidate'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(Vuelidate)
  Vue.component('Layout', DefaultLayout)

  head.script.push({
	  src: 'https://kit.fontawesome.com/719ec3f2a9.js',
	  crossorigin: 'anonymous'
  })
}
