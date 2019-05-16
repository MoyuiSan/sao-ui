<template>
  <div class="user-box">
    <div class="user-box-img"></div>
    <div class="user-box-level">
      <img src="../../../public/SAOIcon/etc/hp_green.png" />
      <span>lv.4</span>
      <div class="honer">简介：一起努力吧</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserBox',
  data() {
    return {

    }
  },
  mounted: function () {
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
.user-box {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 5px;
  // margin-left: 20px;
  .user-box-img {
    position: relative;
    width: 60px;
    height: 60px;
    background: url("./../../../public/SAOIcon/img/img1.jpg");
    background-size: cover;
    border-radius: 2px;
    // margin-left: 20px;
  }
  .user-box-level {
    position: relative;
    width: 200px;
    height: 60px;
    background: url("../../../public/SAOIcon/etc/hp_bar.png") no-repeat;
    background-size: contain;
    background-size: 100%;
    background-position-x: 0px;
    background-position-y: -12px;
    img {
      position: absolute;
      width: 143px;
      height: 13px;
      top: 6px;
      left: 45px;
      clip: rect(0px, 143px, 13px, 0px);//进度条
      // z-index: 10;
    }
    span{
      position: absolute;
      top: 18px;
      right: 46px;
      color: white;
      font-size: 12px;
    }
    .honer{
      position: absolute;
      width: 200px;
      height: 20px;
      // background-color: white;
      color: white;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      font-size: 12px;
      padding-left: 10px;
    }
    // background-color: aqua;
  }
}
</style>
