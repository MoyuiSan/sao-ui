<template>
  <div class="userinfo"></div>
</template>
<script>
export default {
  name: "UserInfo",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.userinfo {
  position: relative;
  width: 1150px;
  height: 560px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  overflow: hidden;
  animation: showBox .4s ease-in-out;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 25px;
    background-color: rgb(221, 221, 221);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    left: 0;
    top: 0;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 25px;
    background-color: rgb(221, 221, 221);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    left: 0;
    bottom: 0;
  }
}
@keyframes showBox {
  0% {
      height: 50px
  }
  100% {
      height: 568px;
  }
}
</style>
