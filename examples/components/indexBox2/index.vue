<template>
  <div id="index2" class="index2">
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
    <div class="search">
      <div class="search-box">
        <input type="text" placeholder="快来搜搜吧！">
        <button>lasd</button>
      </div>
    </div>
    <div class="artivle">
      <div class="article-box">
        <div class="bigbox">
          <div id="1" class="article-box-item item0"></div>
          <div id="2" class="article-box-item item1"></div>
          <div id="3" class="article-box-item item2"></div>
        </div>
        <div class="right-btn" @click="test3"></div>
        <div class="left-btn" @click="test4"></div>
        <div class="small-circle">
          <ul @click="selectLi">
            <li class="smallon" id="0"></li>
            <li class="smalloff" id="1"></li>
            <li class="smalloff" id="2"></li>
          </ul>
        </div>
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
      powerI: 0,
      bannerI: 0,
      inter: null
    };
  },
  mounted() {
    this.borderCtl();
    this.bannerLunbo();
  },
  beforeDestroy() {
    clearInterval(this.inter);
    this.inter = null;
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
    test3: function() {
      if (
        Math.abs(parseInt($(".bigbox").css("left"))) < 1320 * 2 &&
        parseInt($(".bigbox").css("left")) % 1320 == 0 &&
        this.bannerI <= 2
      ) {
        this.bannerI = this.bannerI + 1;
        $(".bigbox").css(
          "left",
          -(-parseInt($(".bigbox").css("left")) + 1320) + "px"
        );
        $(".small-circle ul li").attr("class", "smalloff");
        $(".small-circle ul li")
          .eq(this.bannerI)
          .attr("class", "smallon");
      } else {
        this.bannerI = 0;
        $(".bigbox").css("left", "0px");
        $(".small-circle ul li").attr("class", "smalloff");
        $(".small-circle ul li")
          .eq(this.bannerI)
          .attr("class", "smallon");
      }
    },
    test4: function() {
      if (
        parseInt($(".bigbox").css("left")) < 0 &&
        parseInt($(".bigbox").css("left")) % 1320 == 0 &&
        this.bannerI <= 2
      ) {
        this.bannerI = this.bannerI - 1;
        $(".bigbox").css(
          "left",
          parseInt($(".bigbox").css("left")) + 1320 + "px"
        );
        $(".small-circle ul li").attr("class", "smalloff");
        $(".small-circle ul li")
          .eq(this.bannerI)
          .attr("class", "smallon");
      } else {
        this.bannerI = 2;
        $(".bigbox").css("left", "-2640px");
        $(".small-circle ul li").attr("class", "smalloff");
        $(".small-circle ul li")
          .eq(this.bannerI)
          .attr("class", "smallon");
      }
    },
    selectLi: function(e) {
      if (parseInt($(".bigbox").css("left")) % 1320 == 0) {
        this.bannerI = e.target.id;
        $(".bigbox").css("left", (-1320 * e.target.id).toString() + "px");
        $(".small-circle ul li").attr("class", "smalloff");
        $(".small-circle ul li")
          .eq(e.target.id)
          .attr("class", "smallon");
      }
    },
    bannerLunbo: function() {
      this.inter = setInterval(() => {
        if (
          this.bannerI < 2 &&
          parseInt($(".bigbox").css("left")) % 1320 == 0
        ) {
          console.log(1);
          this.bannerI++;
          $(".bigbox").css(
            "left",
            -(-parseInt($(".bigbox").css("left")) + 1320) + "px"
          );
          $(".small-circle ul li").attr("class", "smalloff");
          $(".small-circle ul li")
            .eq(this.bannerI)
            .attr("class", "smallon");
        } else {
          this.bannerI = 0;
          $(".bigbox").css("left", "0px");
          $(".small-circle ul li").attr("class", "smalloff");
          $(".small-circle ul li")
            .eq(0)
            .attr("class", "smallon");
        }
      }, 4000);
    }
    // ,loveAndpeace(e) {
    //   let myLoveX = e.clientX + "px";
    //   let myLoveY = e.clientY + "px";
    //   var _this = this;
    //   function addTips() {
    //     $("#index2").append(
    //       "<div id='mylove" +
    //         _this.powerI +
    //         "' style='position:fixed;top:" +
    //         myLoveY +
    //         ";left:" +
    //         myLoveX +
    //         ";color:red;'>" +
    //         _this.power[_this.powerI % 12] +
    //         "!" +
    //         "</div>"
    //     );
    //     let now = _this.powerI;
    //     let timer = setTimeout(() => {
    //       $("#mylove" + now).remove();
    //       clearTimeout(timer);
    //     }, 1000);
    //   }
    //   async function count() {
    //     const test = await addTips();
    //     return test;
    //   }
    //   count().then(() => {
    //     _this.powerI++;
    //   });
    // }
  }
};
</script>
<style lang="less" scoped>
.index2 {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgb(172, 172, 172);
  display: flex;
  flex-direction: column;
}
.search {
  position: relative;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 140px;
  background-color: white;
  justify-content: center;
  bottom: 20px;
  .search-box {
    position: absolute;
    height: 30px;
    bottom: 30px;
    input {
      height: 25px;
      width: 200px;
      text-indent: 4px;
      box-sizing: border-box;
      outline: none;
    }
    button {
      height: 25px;
      width: 40px;
      margin-left: 5px;
      background-color: black;
      outline: none;
      border: 0;
      color: white;
      cursor: pointer;
    }
  }
}
.banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: rgba(241, 241, 241, 0.6);
  display: flex;
  justify-content: center;
  z-index: 20;
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
        border-bottom: 1px solid rgb(202, 202, 202);
        background-color: rgb(202, 202, 202);
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
      display: flex;
      align-items: center;
      img {
        position: relative;
        width: 80%;
        height: 80%;
        z-index: 10;
        border-radius: 20px;
        box-sizing: border-box;
        border: 1px solid rgb(255, 255, 255);
        box-shadow: 0px 0xp 3px white;
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
.artivle {
  display: flex;
  width: 100%;
  height: auto;
  background-color: white;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  .article-box {
    position: relative;
    width: 1320px;
    height: 200px;
    background-color: aliceblue;
    overflow: hidden;
    .bigbox {
      position: absolute;
      width: 3960px;
      height: 100%;
      left: 0;
      top: 0;
      transition: left 1s ease-in-out;
      .article-box-item {
        position: relative;
        display: inline-block;
        width: 1320px;
        height: 100%;
        left: 0;
        top: 0;
      }
      .item0 {
        // left: -1320px;
        background-color: red;
      }
      .item1 {
        // left: 0px;
        background-color: green;
      }
      .item2 {
        // left: 1320px;
        background-color: yellow;
      }
    }
    .right-btn {
      position: absolute;
      width: 20px;
      height: 200px;
      right: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.5);
      cursor: pointer;
    }
    .left-btn {
      position: absolute;
      width: 20px;
      height: 200px;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.5);
      cursor: pointer;
    }
    .small-circle {
      position: absolute;
      bottom: 10px;
      right: 50px;
      ul {
        width: 80px;
        height: 20px;
        display: flex;
        justify-content: space-between;
        li {
          width: 20px;
          height: 20px;
          list-style: none;
          cursor: pointer;
        }
      }
    }
  }
}
.mylove {
  position: fixed;
}
.abs-userinfo {
  position: absolute;
  top: 50px;
  width: 260px;
  height: 400px;
  background-color: white;
  left: -105px;
  box-shadow: 0px 0px 3px rgb(221, 221, 221);
  // animation: showInfo 0.4s ease-in-out;
}
.smallon {
  background-color: white;
}
.smalloff {
  background-color: black;
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
