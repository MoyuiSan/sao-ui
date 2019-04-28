<template>
  <div class="mask" v-show="isShow">
    <div class="menu-box" v-if="resetBtn" @click="reload">
      <div>
        <slot name='btn'></slot>
      </div>
      <div class="menu-main" v-if="isClick"><img :src="indicator">
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import iconImg from "../../../public/SAOIcon/background/btn_normal.png";
import iconImgPress from "../../../public/SAOIcon/background/btn_press.png";
import indicator from "../../../public/SAOIcon/etc/indicator.png";
import listNomal from "../../../public/SAOIcon/background/list_normal.png";
export default {
  name: "SaoMenu",
  provide() {
    //组件刷新
    return {
      reload: this.reload,
      nowMenuitem: "0"
    };
  },
  props: ["ShowMask"],
  data() {
    return {
      nowItem: "0",
      indicator: indicator,
      listNomal: listNomal,
      resetBtn: true,
      preBtn: {},
      isClick: false,
      isShow: this.ShowMask
    };
  },
  created: function () { },
  mounted: function () {
    $(".mask").height($(window).height());
    console.log(this.isShowThis, "sdasdas");
  },
  methods: {
    resetItem: function () {
      for (let i = 0; i < this.$slots.btn.length; i++) {
        this.$slots.btn[i].componentInstance.reset();
      }
    },
    reload(e) {
      //选项卡重加载
      // this.menuSonList = e.target.list;
      if (!!e.target.id) {
        this.resetItem(); //重置图片
        let id = e.target.id; //当前Id
        let newTop = (e.target.id - 1) * 50 - 90 + "px"; //图片的当前距离
        let isImg = !!this.$slots.btn[id - 1].componentInstance.$slots.default; //是否显示图片
        let _this = this;
        let showImg = new Promise(function (resolve, reject) {
          //promise 方法进行异步
          if (_this) {
            if (isImg) {
              _this.isClick = true;
            } else {
              _this.isClick = false;
            }
            resolve("ok!");
          } else {
            reject("no _this!");
          }
        });
        showImg
          .then(function () {
            _this.nowMenuitem = id;
            $(".menu-main").css("top", newTop);
            _this.preBtn.src = iconImg;
            _this.preBtn = e.target;
            e.target.src = iconImgPress;
          })
          .catch(e => { });
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
    },
    noShow: function () {
      this.isShow = false;
    },
    showMask: function () {
      this.isShow = true;
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
  min-height: 600;
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
