<template>
  <div class="animateT">1</div>
</template>
<script>
export default {
  name: "AnimateTest",
  data() {
    return {};
  },
  mounted() {
let rect = new mojs.Shape({
  shape: 'rect',
  fill: 'none',
  stroke: 'cyan',
  radius: 10,
  strokeWidth: 20, // 画笔宽度
  angle: {
    [-180]: 0 // 使用对象的形式设置，key为开始值，val为结束值（任何属性都可以设置过渡）
  },
  delay:500,
  repeat:Infinity 
// duration: 400 // 默认为300ms
}).play()
    // Notification.requestPermission().then(function(permission) {
    //   if (permission === "granted") {
    //     console.log("用户允许通知");
    //   } else if (permission === "denied") {
    //     console.log("用户拒绝通知");
    //   }
    // });
    // var n = new Notification("状态更新提醒", {
    //   body: "你的朋友圈有3条新状态，快去查看吧",
    //   tag: "linxin",
    //   icon: "http://blog.gdfengshuo.com/images/avatar.jpg",
    //   requireInteraction: true
    // });
  }
};
</script>
<style lang="less" scoped>
.animateT {
  width: 100%;
  height: 100%;
  background-color: rgb(211, 211, 211);
}
</style>
