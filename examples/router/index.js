
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/a',
            name: 'A',
            component: resolve => require(['../components/HelloWorld'], resolve)
        },
        {
            path: '/b',
            name: 'B',
            component: resolve => require(['../components/test'], resolve)
        }
    ]
})