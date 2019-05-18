<template>
  <div class="userlist">
    <div class="list-show" @click="listHover">
      <div class="list-show-box" id="0">1</div>
      <div class="list-show-box" id="1">2</div>
      <div class="list-show-box" id="2">3</div>
      <div class="list-show-box" id="3">4</div>
      <div class="list-show-box" id="4">5</div>
      <div class="list-show-box" id="5">6</div>
      <div class="list-show-box" id="6">7</div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "FoldBox",
  data() {
    return {
      lock: true
    };
  },
  methods: {
      //优化点击效果
    listHover: function(e) {
      let _this = this;
      if (_this.lock == true) {
        _this.lock = false;
        let nowId = (parseInt(e.target.id) + 1).toString();
        console.log(typeof e.target.id);
        $(".list-show-box:not(:first-child)").css("margin-left", "-33%");
        $("#" + nowId + ".list-show-box").css("margin-left", "0");
        let timer = setTimeout(function() {
          _this.lock = true;
          clearTimeout(timer);
        },400);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.userlist {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(97, 97, 97);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
}
.list-show {
  position: relative;
  width: 40%;
  height: 50%;
  background-color: white;
  overflow: hidden;
  display: flex;
}
.list-show-box {
  width: 42.6%;
  height: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
  flex-shrink: 0;
  transition: margin-left 0.4s ease-in-out;
}
.list-show-box:nth-child(2) {
  margin-left: -33%;
  background-color: red;
}
.list-show-box:nth-child(3) {
  margin-left: -33%;
  background-color: yellow;
}
.list-show-box:nth-child(4) {
  margin-left: -33%;
  background-color: green;
}
.list-show-box:nth-child(5) {
  margin-left: -33%;
  background-color: blue;
}
.list-show-box:nth-child(6) {
  margin-left: -33%;
  background-color: black;
}
.list-show-box:nth-child(7) {
  margin-left: -33%;
  background-color: blueviolet;
}
.list-show-box:hover {
  background-color: rgb(173, 173, 173);
}
</style>
