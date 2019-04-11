<template>
  <div class="mask">
    <div class='main-box'>
      <div class='mes-header'>Message</div>
      <div class='mes-message'>{{this.msg}}</div>
      <div class='mes-contral'>
        <div class='confirm'><img :src="confirmI" /></div>
        <div class='cancel'><img :src="cancelI"></div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import test from "../../../SAOIcon/icon/ok_normal.png"
import test2 from "../../../SAOIcon/icon/cancel_normal.png"
export default {
  name: "SaoAlert",
  props: ["msg", "confirmImg", "cancelImg"],
  data() {
    return {
      // confirmI: require("../../static/SAOIcon/icon/ok_normal.png")
      confirmI: test,
      cancelI:test2
    };
  },
  mounted: function() {
    $(".mask").height($(window).height());
  }
};
</script>
<style lang="less" scoped>
.mask {
  width: 100%;
  background-color: rgb(202, 202, 202);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-box {
  width: 400px;
  height: 280px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  .mes-header {
    height: 30%;
    width: 100%;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
  }
  .mes-message {
    width: 100%;
    height: 40%;
    background-color: rgba(100, 100, 100, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mes-contral {
    height: 30%;
    width: 100%;
    box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .confirm {
      width: 50px;
      height: 50px;
      // background: url("../../assets/SAOIcon/icon/ok_normal.png");
      background-size: cover;
      cursor: pointer;
      &:hover {
        // background: url("../../assets/SAOIcon/icon/ok_hover.png");
        background-size: cover;
      }
      img {
        width: 100%;
        height: 100%;
        background-size: cover;
      }
    }
    .cancel {
      width: 50px;
      height: 50px;
      // background: url("../../assets/SAOIcon/icon/cancel_normal.png");
      background-size: cover;
      cursor: pointer;
      &:hover {
        // background: url("../../assets/SAOIcon/icon/cancel_hover.png");
        background-size: cover;
      }
      img {
        width: 100%;
        height: 100%;
        background-size: cover;
      }
    }
  }
}

@keyframes showbox {
  0% {
    height: 0px;
  }
  75% {
    height: 300px;
  }
  100% {
    height: 280px;
  }
}

@keyframes hidebox {
  0% {
    height: 280px;
  }
  75% {
    height: 300px;
  }
  100% {
    height: 0px;
  }
}
</style>