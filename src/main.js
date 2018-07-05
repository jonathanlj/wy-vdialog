// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VuejsDialog from './plugin/js'
import router from './router'

Vue.config.productionTip = false

// Install VuejsDialog
Vue.use(VuejsDialog, {
  message: 'Please confirm action'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
