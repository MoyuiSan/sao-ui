<template>
  <div class="mask">
    <div
      class="menu-box"
      v-if="resetBtn"
      @click="reload"
    >
      <div>
        <slot name='btn'></slot>
      </div>
      <div
        class="menu-main"
        v-if="isClick"
      ><img :src="indicator">
        <!-- <div class="menu-main-item">
          <div v-for="value in menuSonList" :key="value.id">
            <div class="item"> <img :src="listNomal"></div>
          </div>

        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import iconImg from "../../../SAOIcon/background/btn_normal.png";
import iconImgPress from "../../../SAOIcon/background/btn_press.png";
import indicator from "../../../SAOIcon/etc/indicator.png";
import listNomal from "../../../SAOIcon/background/list_normal.png";
export default {
  name: "SaoMenu",
  provide() {
    //组件刷新
    return {
      reload: this.reload,
      nowMenuitem: "0"
      // menuSonList: []
    };
  },
  data() {
    return {
      nowItem: "0",
      indicator: indicator,
      listNomal: listNomal,
      resetBtn: true,
      preBtn: {},
      isClick: false
    };
  },
  created: function() {},
  mounted: function() {
    $(".mask").height($(window).height());
  },
  methods: {
    resetItem: function() {
      for (let i = 0; i < this.$slots.btn.length; i++) {
        this.$slots.btn[i].componentInstance.reset();
      }
    },
    reload(e) {
      //选项卡重加载
      // this.menuSonList = e.target.list;
      // console.log(this.$slots.btn);
      this.resetItem();
      let _this = this;
      if (e.target.id) {
        let showImg = new Promise(function(resolve, reject) {//promise 方法进行异步
          if (_this) {
            _this.isClick = true;
            resolve("ok!");
          } else {
            reject("no _this!");
          }
        });
        showImg.then(function() {
          let newTop = (e.target.id - 1) * 50 - 90 + "px";
          let id = e.target.id;
          _this.nowMenuitem = id;
          $(".menu-main").css("top", newTop);
          _this.preBtn.src = iconImg;
          _this.preBtn = e.target;
          e.target.src = iconImgPress;
        });
        // let showT = setTimeout(function() {//定时器方法
        //   let newTop = (e.target.id - 1) * 50 - 90 + "px";
        //   let id = e.target.id;
        //   _this.nowMenuitem = id;
        //   $(".menu-main").css("top", newTop);
        //   _this.preBtn.src = iconImg;
        //   _this.preBtn = e.target;
        //   e.target.src = iconImgPress;
        //   clearTimeout(showT);
        // }, 10);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.mask {
  width: 100%;
  background-color: rgba(105, 105, 105, 0.473);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.menu-box {
  position: relative;
  width: 50px;
  .menu-main {
    position: absolute;
    left: 60px;
    top: 0px;
    height: 230px;
    top: -90px;
    display: flex;
    transition: top 0.4s;
    animation: showIdentifier 0.4s normal;
    img {
      height: inherit;
      background-size: contain;
    }
  }
}
@keyframes showIdentifier {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
