<template>
  <div id="index2" class="index2" @click="loveAndpeace">
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
          <img class="banner-right-img" :src="userImg">
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
import userimg from "../../assets/logo.png";
export default {
  name: "IndexBox2",
  data() {
    return {
      power: [
        "富强",
        "民主",
        "文明",
        "和谐",
        "自由",
        "平等",
        "公正",
        "法治",
        "爱国",
        "敬业",
        "诚信",
        "友善"
      ], //"富强"、"民主"、"文明"、"和谐"，"自由"、"平等"、"公正"、"法治"，"爱国"、"敬业"、"诚信"、"友善"
      isInfo: false,
      userImg: userimg,
      powerI: 0
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
      $(".banner-right-img").addClass("showimg");
      $(".banner-right-img").removeClass("noshowimg");
    },
    test2: function() {
      this.isInfo = false;
      $(".banner-right-img").addClass("noshowimg");
      $(".banner-right-img").removeClass("showimg");
    },
    loveAndpeace(e) {
      let myLoveX = e.clientX + "px";
      let myLoveY = e.clientY + "px";
      var _this = this;
      function addTips() {
        $("#index2").append(
          "<div id='mylove" +
            _this.powerI +
            "' style='position:fixed;top:" +
            myLoveY +
            ";left:" +
            myLoveX +
            ";color:red;'>" +
            _this.power[_this.powerI % 12] +
            "!" +
            "</div>"
        );
        let now = _this.powerI;
        let timer = setTimeout(() => {
          $("#mylove" + now).remove();
          clearTimeout(timer);
        }, 1000);
      }
      async function count() {
        const test = await addTips();
        return test;
      }
      count().then(() => {
        _this.powerI++;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.index2 {
  position: relative;
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
      margin-right: 20px;
      // cursor: pointer;
      img {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 10;
        // animation-fill-mode: forwards;
        cursor: pointer;
      }
      .showimg {
        animation: imgDo 0.4s ease-in-out;
        animation-fill-mode: forwards;
      }
      .noshowimg {
        animation: noimgDo 0.4s ease-in-out;
        animation-fill-mode: forwards;
      }
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
.mylove{
  position: fixed;
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
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes noInfo {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes imgDo {
  0% {
    top: 0px;
    transform: scale(1);
  }
  100% {
    top: 25px;
    transform: scale(1.2);
  }
}
@keyframes noimgDo {
  0% {
    top: 25px;
    transform: scale(1.2);
  }
  100% {
    top: 0px;
    transform: scale(1);
  }
}
@keyframes wordHide {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
