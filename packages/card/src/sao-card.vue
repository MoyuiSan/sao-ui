<template>
  <div class="sao-card"></div>
</template>
<script>
export default {
  name: "SaoCard"
}
</script>
<style lang="less" scoped>
.sao-card {
  width: 200px;
  height: 200px;
  background:url("./../../../public/SAOIcon/img/img1.jpg");
  background-size: cover;
  position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  margin: 15px;
  &::before,
  &::after {
    content: "";
    border: 2px solid #2ecc71;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: -15px;
    // clip: rect(0px 230px 2px 0px);
    // clip: rect(0px 2px 230px 0px);
    //  clip: rect(228px 230px 230px 0px);
    //  clip: rect(0px 230px 230px 228px);
    animation: borderClip 6s ease infinite;
  }
  &::after {
    animation-delay: 3s;
  }
  &:hover {
    &::before,
    &::after {
      animation-play-state: paused;
    }
  }
}
@keyframes borderClip {
  0%,
  100% {
    clip: rect(0px 230px 2px 0px);
  }
  25% {
    clip: rect(0px 2px 230px 0px);
  }
  50% {
    clip: rect(228px 230px 230px 0px);
  }
  75% {
    clip: rect(0px 230px 230px 228px);
  }
}
</style>
