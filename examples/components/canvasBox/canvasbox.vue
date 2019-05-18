<template>
  <div class="mask">
    <canvas id="canvas" class="canvas" width="600" height="300"></canvas>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "CanvasBox",
  data() {
    return {};
  },
  mounted() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let raf;
    let running = false;
    let random = Math.random("1")*10;
    let ball = {
      x: 50,
      y: 50,
      vx: 5,
      vy: 2,
      radius: 6,
      color: "blue",
      draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(this.x+random , this.y+random, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    };
    function draw() {
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      //   ctx.clearRect(0, 0, canvas.width, canvas.height);
      ball.draw();
      ball.x += ball.vx;
      ball.y += ball.vy;
      ball.vy *= 0.99;
      ball.vy += 0.25;
      if (
        ball.y + ball.vy > canvas.height - ball.radius ||
        ball.y + ball.vy < 0 + ball.radius
      ) {
        ball.vy = -ball.vy;
      }
      if (
        ball.x + ball.vx > canvas.width - ball.radius ||
        ball.x + ball.vx < 0 + ball.radius
      ) {
        ball.vx = -ball.vx;
      }
      raf = window.requestAnimationFrame(draw);
    }
    canvas.addEventListener("click", function(e) {
      if (!running) {
        ball.x = e.layerX;
        ball.y = e.layerY;
        raf = window.requestAnimationFrame(draw);
        running = true;
      }
    });
    canvas.addEventListener("mouseout", function(e) {
      window.cancelAnimationFrame(raf);
      running = false;
    });
    ball.draw();
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.mask {
  position: relative;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 99;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  .canvas {
    border: 1px solid black;
  }
}
</style>
