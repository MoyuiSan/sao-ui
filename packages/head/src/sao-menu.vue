<template>
  <div class="mask">
    <div class="menu-box">
      <div class="menu-item" >1</div>
      <div class="menu-item">1</div>
      <div class="menu-item">1</div>
      <div class="menu-item">1</div>
      <div class="menu-item">1</div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "SaoMenu",
  data() {
    return {};
  },
  mounted: function() {
    $(".mask").height($(window).height());
  },
  methods: {}
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
  justify-content: center;
  align-items: center;
}
.menu-box{
  width: 50px;
  .menu-item{
    height: 50px;
    background: url('../../../SAOIcon/background/btn_normal.png');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }
}
</style>
