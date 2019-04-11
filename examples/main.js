import Vue from 'vue'
import App from './App.vue'
import SaoUI from '../packages/index'
Vue.use(SaoUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
