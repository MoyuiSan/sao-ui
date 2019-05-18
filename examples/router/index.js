
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
            path: '/fold',
            name: 'Fold',
            component: resolve => require(['../components/foldBox/foldbox'], resolve)
        },{
            path: '/share',
            name: 'Share',
            component: resolve => require(['../components/shareWall/sharewall'], resolve)
        },
        {
            path: '/canvas',
            name: 'Canvas',
            component: resolve => require(['../components/canvasBox/canvasbox'], resolve)
        }
    ]
})