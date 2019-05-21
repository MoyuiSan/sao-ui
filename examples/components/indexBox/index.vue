<template>
  <div class="indexbox">
    <div
      class="indexbox-main"
      v-for="(value,index) in boxList"
      :key="index"
      :style="{top:boxList[index].top+'px',left:boxList[index].left+'px',transform: boxList[index].scale}"
      name="sao"
      @mouseover="myOver"
      @mouseleave="myLeave"
    >
      {{index}}
      <div class="indexbox-main-info">
        <p>
          发布者：大阿达
          <br>发布时间：2019-9-2
        </p>
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
        { id: 4, top: 220, left: 980, scale: "scale(0.8)" },
        { id: 5, top: 120, left: 1380, scale: "scale(1.1)" },
        { id: 6, top: 580, left: 1280, scale: "scale(0.8)" },
        { id: 7, top: 680, left: 880, scale: "scale(1.1)" },
        { id: 8, top: 440, left: 920, scale: "scale(1.2)" },
        { id: 9, top: 390, left: 1480, scale: "scale(1)" },
        { id: 10, top: 710, left: 380, scale: "scale(1.2)" },
        { id: 11, top: 710, left: 1600, scale: "scale(1)" }
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
      e.target.children[0].style.display = "flex";
    },
    myLeave: function(e) {
      e.target.children[0].style.display = "none";
    }
  }
};
</script>
<style lang="less" scoped>
.indexbox {
  position: relative;
  width: 100%;
  height: 100%;
  //   background-color: rgb(221, 221, 221);
  display: flex;
  //   justify-content: center;
  //   align-items: center;
  background-color: rgb(221, 221, 221);
  box-sizing: border-box;
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
    color: white;
    p {
      font-size: 12px;
    }
  }
}
</style>
