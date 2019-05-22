import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    // mode:'history',
    routes: [{
            path: '/a',
            name: 'A',
            component: resolve => require(['../components/HelloWorld'], resolve)
        },
        { //折叠板
            path: '/fold',
            name: 'Fold',
            component: resolve => require(['../components/foldBox/foldbox'], resolve)
        },
        { //安利墙
            path: '/share',
            name: 'Share',
            component: resolve => require(['../components/shareWall/sharewall'], resolve)
        },
        { //画布
            path: '/canvas',
            name: 'Canvas',
            component: resolve => require(['../components/canvasBox/canvasbox'], resolve)
        }, ,
        { //用户信息
            path: '/user',
            name: 'User',
            component: resolve => require(['../components/userInfo/userinfo'], resolve)
        },
        { //首页
            path: '/index',
            name: 'Index',
            component: resolve => require(['../components/indexBox/index'], resolve)
        },
        { //输入框
            path: '/input',
            name: 'Input',
            component: resolve => require(['../components/inputBox/inputbox'], resolve)
        }, 
        {
            path: '/carousel',
            name: 'Carousel',
            component: resolve => require(['../components/carouselFigure/carouselfigure'], resolve)
        }
    ]
})