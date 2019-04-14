<template>
  <div
    class="menu-item"
    @click="test"
  >
    <div class="item_bottom"><img
        :src="iconI"
        :id='id'
      ></div>
    <div class="item_icon"><img :src="icon"></div>
    <div
      class="item_main"
      v-if="isItemMain"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
import iconImg from "../../../SAOIcon/background/btn_normal.png";
import iconItem from "../../../SAOIcon/symbol/info_normal.png";
export default {
  name: "MenuBtn",
  props: ["id", "icon"],
  data() {
    return {
      iconI: iconImg,
      icon: this.icon,
      isItemMain: false
    };
  },
  created: function() {//初始化默认图标
    if (!this.icon) {
      this.icon=iconItem
    }
  },
  mounted: function() {
    // console.log(this.sonlist);
  },
  methods: {
    test: function() {
      let _this = this;
      let showItem = setTimeout(function() {
        _this.isItemMain = true;
        clearTimeout(showItem);
      }, 50);
    },
    reset: function() {
      this.isItemMain = false;
    }
  }
};
</script>
<style lang="less" scoped>
.menu-item {
  height: 50px;
  width: 100%;
  // background: url('../../../SAOIcon/background/btn_normal.png');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  position: relative;
  cursor: pointer;
}
.item_bottom {
  position: absolute;
  top: 0px;
  left: 0xp;
  height: 50px;
  width: 100%;
  z-index: 99;
  img {
    width: 100%;
    height: 50px;
  }
}
.item_icon {
  position: absolute;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  img {
    width: 30px;
    height: 30px;
  }
}
.item_main {
  position: absolute;
  z-index: 0;
  left: 100px;
  height: 200px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>

