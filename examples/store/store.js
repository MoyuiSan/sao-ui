import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {//状态
        isShow: true,
        items: [{
                name: "张三",
                num: "1"
            },
            {
                name: "李四",
                num: "2"
            },
            {
                name: "王五",
                num: "3"
            }
        ]
    },
    computed: {//计算返回新属性
        itemList() {
            return this.$store.state.items;
        }
    },
    getters: {//获取属性
        isShow(state) {
            return state.isShow;
        }
    },
    mutations: {//改变state
        noshow(state) {
            state.isShow = false;
        }
    },
    actions: {//触发mutations
        noShow(context) {
            context.commit("noshow");
        }
    }
})