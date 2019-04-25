import Vue from 'vue'
import App from './App.vue'
import SaoUI from '../packages/index'
import router from './router/index'
import {store} from './store/store'
Vue.use(SaoUI)


Vue.config.productionTip = false

new Vue({
  store:store,//使用store
  render: h => h(App),
  router
}).$mount('#app')