<template>
  <div class="index2">
    <div class="banner">
      <div class="banner-logo"></div>
      <div class="banner-left">
        <div class="banner-left-item">test1</div>
        <div class="banner-left-item">test2</div>
        <div class="banner-left-item">test3</div>
        <div class="banner-left-item">test4</div>
      </div>
      <div class="banner-right">
        <div class="banner-right-info" @mouseenter="test" @mouseleave="test2">
          <transition name="info">
            <div class="abs-userinfo" v-if="isInfo">12312</div>
          </transition>
        </div>
        <div class="banner-right-txt">登陆</div>
        <div class="banner-right-txt">消息</div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "IndexBox2",
  data() {
    return {
      power: ["富强", "民主", "法治", "文明"],
      isInfo: false
    };
  },
  mounted() {
    this.borderCtl();
  },
  methods: {
    borderCtl: function() {
      $(".banner-left-item").click(function() {
        $(".banner-left-item").css("border-bottom", "");
        $(this).css("border-bottom", "1px solid blue");
      });
    },
    test: function() {
      this.isInfo = true;
    },
    test2: function() {
      this.isInfo = false;
    }
  }
};
</script>
<style lang="less" scoped>
.index2 {
  width: 100%;
  height: 100%;
  background-color: rgb(172, 172, 172);
}
.banner {
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  .banner-logo {
    width: 120px;
    height: 100%;
    background-color: green;
  }
  .banner-left {
    width: 800px;
    height: 100%;
    display: flex;
    align-items: center;
    .banner-left-item {
      position: relative;
      // flex-grow: 1;
      width: 80px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-sizing: border-box;
      &:hover {
        border-bottom: 1px solid blue;
        background-color: rgb(241, 241, 241);
      }
    }
  }
  .banner-right {
    position: relative;
    width: 400px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    .banner-right-info {
      position: relative;
      width: 50px;
      height: 50px;
      background-color: red;
      margin-right: 20px;
      cursor: pointer;
    }
    .banner-right-txt {
      width: 80px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 14px;
    }
  }
}
.abs-userinfo {
  position: absolute;
  top: 50px;
  width: 260px;
  height: 400px;
  background-color: white;
  left: -105px;
  // animation: showInfo 0.4s ease-in-out;
}
.info-enter-active {
  animation: showInfo 0.4s ease-in-out;
}
.info-leave-active {
  animation: noInfo 0.4s ease-in-out;
}
@keyframes showInfo {
  0% {
    top: -210px;
    transform: scale(0);
  }
  100% {
    top: 50px;
    transform: scale(1);
  }
}
@keyframes noInfo {
  0% {
    top: 50px;
    transform: scale(1);
  }
  100% {
    top: -210px;
    transform: scale(0);
  }
}
</style>
