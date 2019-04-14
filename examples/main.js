import Vue from 'vue'
import App from './App.vue'
import SaoUI from '../packages/index'
import router from '../examples/index.js'
Vue.use(SaoUI)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
