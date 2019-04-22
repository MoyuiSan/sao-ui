<template slot-scope='show'>
  <div class="menu-item-son" @click="test">
    <img :src="listNomal" alt="背景">
    <!-- <div>{{this.name}}</div> -->
    <slot>{{name}}</slot>
    <!-- {{show}} -->
  </div>
</template>
<script>
import $ from "jquery";
import listNomal from "../../../SAOIcon/background/list_normal.png";
export default {
  name: "MenuItem",
  data() {
    return {
      listNomal: listNomal
    };
  },
  props: ["id", "to", "name"],
  mounted: function () { },
  methods: {
    test: function () {
      this.$router.push(this.to);
      // $(".mask").hide();
    }
  }
};
</script>
<style lang="less" scoped>
.menu-item-son {
  height: 46px;
  width: 200px;
  position: relative;
  top: 0px;
  animation: showItem 0.4s normal;
  transform: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
  }
  &:hover {
    transform: scale(1.1);
  }
}
@keyframes showItem {
  0% {
    top: 100px;
  }
  100% {
    top: 0px;
  }
}
</style>


