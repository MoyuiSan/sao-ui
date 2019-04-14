
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'A',
            component: resolve => require(['./components/HelloWorld'], resolve)
        },
        {
            path: '/',
            name: 'b',
            component: resolve => require(['./components/test'], resolve)
        }
    ]
})