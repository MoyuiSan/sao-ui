import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
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
    computed: {
        itemList() {
            return this.$store.state.items
        }
    },
})