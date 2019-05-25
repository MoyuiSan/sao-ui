import Vue from 'vue'
import App from './App.vue'
import SaoUI from '../packages/index'
import router from './router/index'
import Mojs from 'mo-js'
import {
  store
} from './store/store'
Vue.use(SaoUI)
Vue.use(Mojs)
Vue.config.keyCodes.esc = 27
Vue.config.productionTip = false

new Vue({
  store: store, //使用store
  render: h => h(App),
  router
}).$mount('#app')