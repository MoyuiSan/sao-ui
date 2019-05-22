<template>
  <div class="indexbox">
    <div
      class="indexbox-main"
      v-for="(value,index) in boxList"
      :id="index"
      :key="index"
      :style="{top:boxList[index].top+'px',left:boxList[index].left+'px',transform: boxList[index].scale}"
      name="sao"
      @mouseenter="myOver"
      @mouseleave="myLeave"
    >
      {{index}}
      <div class="indexbox-main-info">
        <p>发布者：大阿达</p>
        <p>发布时间：2019-5-22</p>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "IndexBox",
  data() {
    return {
      boxList: [
        { id: 0, top: 120, left: 440, scale: "scale(1.2)" },
        { id: 1, top: 480, left: 450, scale: "scale(1)" },
        { id: 2, top: 300, left: 580, scale: "scale(0.8)" },
        { id: 3, top: 320, left: 180, scale: "scale(1.2)" },
        { id: 4, top: 220, left: 980, scale: "scale(1)" },
        { id: 5, top: 120, left: 1380, scale: "scale(0.8)" },
        { id: 6, top: 580, left: 1280, scale: "scale(1.2)" },
        { id: 7, top: 680, left: 880, scale: "scale(1)" },
        { id: 8, top: 440, left: 920, scale: "scale(0.8)" },
        { id: 9, top: 390, left: 1480, scale: "scale(1.2)" },
        { id: 10, top: 710, left: 380, scale: "scale(1)" },
        { id: 11, top: 710, left: 1600, scale: "scale(0.8)" }
      ]
    };
  },
  mounted() {
    console.log($(".indexbox").height());
    console.log($(".indexbox").width());
    $(".indexbox-main-info").hide();
  },
  methods: {
    myOver: function(e) {
      // e.target.style.animationPlayState = "paused";
      e.target.children[0].style.display = "flex";
      e.target.style.transform = "scale(1)";
    },
    myLeave: function(e) {
      e.target.children[0].style.display = "none";
      // e.target.style.animationPlayState = "running";
      e.target.style.transform = this.boxList[e.target.id].scale;
      console.log(e.target.style);
      //Dom更新之后进行相关数据绑定！
    }
  }
};
</script>
<style lang="less" scoped>
.indexbox {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  opacity: 0.8;
  //   justify-content: center;
  //   align-items: center;
  //   background-color: rgb(221, 221, 221);
  //   box-sizing: border-box;
  //   transform-style: preserve-3d;
  //   perspective: 700;
  //   transform: translateZ(1200px);
  //   border-top: 20px solid rgb(221, 221, 221);
  .indexbox-main {
    position: absolute;
    transform: translateY(1000px);
    width: 10%;
    height: 10%;
    background-color: white;
    // box-shadow: 0px 0px 5px white;
    // border: 1px solid white;
    cursor: pointer;
    border-radius: 4px;
    transition: transform 0.4s ease-in-out;
    animation-fill-mode: forwards;
    &:hover {
      box-shadow: 0px 0px 5px white;
    }
    // &:nth-child(3n-2) {
    //   background-color: red;
    //   animation: boxAni1 15s ease-in infinite;
    //   // &:hover {
    //   //   animation-play-state: paused;
    //   // }
    // }
    // &:nth-child(3n-1) {
    //   background-color: blue;
    //   animation: boxAni2 18s ease-in infinite;
    // }
    // &:nth-child(3n) {
    //   background-color: green;
    //   animation: boxAni3 12s ease-in infinite;
    // }
  }
  .indexbox-main-info {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    animation: showInfo 0.4s ease-in-out;
    border-radius: 4px;
    p {
      font-size: 12px;
    }
  }
}
@keyframes showInfo {
  0% {
    background-color: rgba(0, 0, 0, 0);
  }
  100% {
    background-color: rgba(0, 0, 0, 0.5);
  }
}
@keyframes boxAni1 {
  0% {
    transform: scale(1.2);
  }
  10% {
    transform: scale(1.2);
  }
  40% {
    transform: scale(0.8);
  }
  60% {
    transform: scale(0.8);
  }
  90% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1.2);
  }
}
@keyframes boxAni2 {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.2);
  }
  70% {
    transform: scale(1.2);
  }
  90% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes boxAni3 {
  0% {
    transform: scale(0.8);
  }
  10% {
    transform: scale(0.8);
  }
  40% {
    transform: scale(1.2);
  }
  60% {
    transform: scale(1.2);
  }
  90% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(0.8);
  }
}
</style>
