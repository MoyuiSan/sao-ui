<template>
  <div class="mask" @mousemove="saotxt">
    <div class="img-box" @click="selectImg" @mouseover="test">
      <img :src="img1" class="imgbox1" id='1' />
      <img :src="img2" class="imgbox2" id='2' />
      <img :src="img3" class="imgbox3" id='3' />
      <img :src="img4" class="imgbox4" id='4' />
      <img :src="img5" class="imgbox5" id='5' />
    </div>
    <div class="back-img" v-if="resetImg">
      <img :src="backImg" />
    </div>
    <div class="back-txt">这虽然是游戏，可不是闹着玩的！</div>
  </div>
</template>
<script>
import $ from 'jquery';
import img1 from "../../../SAOIcon/img/share1.png"
import img2 from "../../../SAOIcon/img/share2.png"
import img3 from "../../../SAOIcon/img/share3.jpg"
import img4 from "../../../SAOIcon/img/share4.png"
import img5 from "../../../SAOIcon/img/share5.jpg"
export default {
  name: "ShareWall",
  data() {
    return {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
      img5: img5,
      backImg: img2,
      resetImg: true,
      mouseX: '',
      mouseY: ''
    }
  },
  props: [],
  mounted: function () {
    $(".mask").css('height', $(window).height());
    $(".back-img").css('height', $(window).height());
  },
  updated: function () {
    $(".back-img").css('height', $(window).height());
  },
  methods: {
    selectImg(e) {
      let id = e.target.id;
      console.log(id);
      if (!!e.target.id) {
        this.resetImg = false;
        let _this = this;
        let timer = setTimeout(function () {
          if (id == 1) {
            _this.backImg = img1;
          } else if (id == 2) {
            _this.backImg = img2;
          } else if (id == 3) {
            _this.backImg = img3;
          } else if (id == 4) {
            _this.backImg = img4;
          } else if (id == 5) {
            _this.backImg = img5;
          }
          _this.resetImg = true;
          clearTimeout(timer)
        }, 100)
      }
    },
    test(e) {
      if (!!e.target.id) {
        $(".img-box img").css('animation-play-state', 'paused');
      } else {
        $(".img-box img").css('animation-play-state', 'running');
      }

    },
    saotxt(e) {
      console.log(e.clientX)
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      let _this = this;
      let timer = setTimeout(function () {
        if (_this.mouseX == e.clientX) {
          $(".back-txt").css('left', _this.mouseX+20);
          $(".back-txt").css('top', _this.mouseY);
        }
      }, 20);


    }
  }
}
</script>
<style lang="less" scoped>
.mask {
  position: relative;
  width: 100%;
  background-color: #c0c0c0;
  // background: url(../../../SAOIcon/img/share1.png);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  .img-box {
    width: 600px;
    height: 400px;
    // background-color: white;
    position: relative;
    perspective: 1200;
    z-index: 100;
    img {
      width: 200px;
      height: 120px;
      position: absolute;
      transform-style: preserve-3d;
      animation-fill-mode: forwards;
      left: 200px;
      top: 200px;
      cursor: pointer;
      box-sizing: border-box;
      &:hover {
        border: 2px solid white;
        box-shadow: 5px black;
      }
    }
    .imgbox1 {
      animation: test 10s linear infinite;
      transform: rotateY(0deg) translateZ(250px);
    }
    .imgbox2 {
      animation: test2 10s linear infinite;
      transform: rotateY(72deg) translateZ(250px);
    }
    .imgbox3 {
      animation: test3 10s linear infinite;
      transform: rotateY(144deg) translateZ(250px);
    }
    .imgbox4 {
      animation: test4 10s linear infinite;
      transform: rotateY(216deg) translateZ(250px);
    }
    .imgbox5 {
      animation: test5 10s linear infinite;
      transform: rotateY(288deg) translateZ(250px);
    }
  }
  .back-img {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    animation: fadeIn 0.4s linear;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .back-txt {
    position: fixed;
    font-size: 20px;
    color: white;
    top: 0;
    left: 0;
    z-index: 999;
    transition: top 0.5s ease-in-out, left 0.5s ease-in-out;
    font-weight: 900;
  }
}
@keyframes test {
  0% {
    transform: rotateY(0deg) translateZ(250px);
    z-index: 10;
  }
  20% {
    transform: rotateY(72deg) translateZ(250px);
    z-index: 9;
  }
  100% {
    transform: rotateY(360deg) translateZ(250px);
    z-index: 10;
  }
}
@keyframes test2 {
  0% {
    transform: rotateY(72deg) translateZ(250px);
    z-index: 8;
  }
  80% {
    transform: rotateY(360deg) translateZ(250px);
    z-index: 10;
  }
  100% {
    transform: rotateY(432deg) translateZ(250px);
    z-index: 8;
  }
}
@keyframes test3 {
  0% {
    transform: rotateY(144deg) translateZ(250px);
    z-index: 7;
  }
  60% {
    transform: rotateY(360deg) translateZ(250px);
    z-index: 10;
  }
  100% {
    transform: rotateY(504deg) translateZ(250px);
    z-index: 7;
  }
}
@keyframes test4 {
  0% {
    transform: rotateY(216deg) translateZ(250px);
    z-index: 6;
  }
  40% {
    transform: rotateY(360deg) translateZ(250px);
    z-index: 10;
  }
  100% {
    transform: rotateY(576deg) translateZ(250px);
    z-index: 6;
  }
}
@keyframes test5 {
  0% {
    transform: rotateY(288deg) translateZ(250px);
    z-index: 10;
  }
  20% {
    transform: rotateY(360deg) translateZ(250px);
    z-index: 10;
  }
  100% {
    transform: rotateY(648deg) translateZ(250px);
    z-index: 5;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
