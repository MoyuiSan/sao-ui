<template>
  <div class="menu-item" @click="test" :style="{'animation-delay':+id/5+'s'}">
    <div class="item_bottom"><img :src="iconI" :id='id'></div>
    <div class="item_icon"><img :src="icon"></div>
    <div class="item_main" v-if="isItemMain">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import iconImg from "../../../public/SAOIcon/background/btn_normal.png";
import infoItem from "../../../public/SAOIcon/symbol/info_hover.png";
import msgItem from "../../../public/SAOIcon/symbol/Msg_hover.png";
import partyItem from "../../../public/SAOIcon/symbol/Party_hover.png";
import pluginItem from "../../../public/SAOIcon/symbol/plugin_hover.png";
import settingItem from "../../../public/SAOIcon/symbol/setting_hover.png";
export default {
  name: "MenuBtn",
  props: ["id", "system"],
  data() {
    return {
      iconI: iconImg,
      icon: "",
      isItemMain: false
    };
  },
  created: function () {
    let now = this.system;//id选择按钮,默认为5个。
    if (now == 1) {
      this.icon = infoItem;
    } else if (now == 2) {
      this.icon = msgItem;
    } else if (now == 3) {
      this.icon = partyItem;
    } else if (now == 4) {
      this.icon = pluginItem;
    } else if (now == 5) {
      this.icon = settingItem;
    }
  },
  mounted: function () {
    // console.log(this.id)
  },
  methods: {
    test: function () {//打开选项卡
      let _this = this;
      let showItem = setTimeout(function () {
        _this.isItemMain = true;
        clearTimeout(showItem);
      }, 50);
    },
    //重置按钮
    reset: function () {
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
  animation: upup 0.4s ease-in;
  opacity: 0;
  animation-fill-mode: forwards;
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
@keyframes upup {
  0% {
    top: 50px;
    opacity: 0;
  }
  100% {
    top: 0px;
    opacity: 1;
  }
}
</style>

