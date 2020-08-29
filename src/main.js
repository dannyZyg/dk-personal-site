// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vuelidate from 'vuelidate'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component

  library.add(
    faLinkedin,
    faGithub
  )
  Vue.config.productionTip = false
  
  Vue.use(Vuelidate)
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome-icon', FontAwesomeIcon)

  head.script.push({
	  src: 'https://kit.fontawesome.com/719ec3f2a9.js',
	  crossorigin: 'anonymous'
  })
}
