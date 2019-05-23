<template>
  <div class="carousel" @mouseenter="stopLunbo">
    <Canvas id="mycar" class="mycar" width="400" height="600">
      <img id="source" :src="imgUrl">
    </Canvas>
    <div class="carousel-contral">
      <ul @click="selectImg">
        <li id="0"></li>
        <li id="1"></li>
        <li id="2"></li>
        <li id="3"></li>
        <li id="4"></li>
        <li id="5"></li>
      </ul>
    </div>
  </div>
</template>
<script>
import img from "../../assets/img/bg1.jpg";
import img2 from "../../assets/img/nvdi.jpg";
import $ from "jquery";
export default {
  name: "CarouselFigure",
  data() {
    return {
      imgUrl: img,
      imgList: [img, img2, img, img2, img, img2],
      count: 0,
      timer: null
    };
  },
  mounted() {
    this.showImg();
    this.startLunbo();
  },
  beforeDestroy() {
    clearTimeout(this.timer);
    this.timer = null;
  },
  methods: {
    //展示图显示
    showImg: function() {
      let source = document.getElementById("source");
      // let ctx = document.getElementById("mycar").getContext("2d");
      // ctx.drawImage(source, 0, 0, 400, 600);
      try {
        let ctx = document.getElementById("mycar").getContext("2d");
        let offset = 200;
        // ctx.clearRect(0, 0, 400, 600);
        source.onload = function() {
          let inter = setInterval(function() {
            offset -= 4;
            if (offset >= 0) {
              ctx.drawImage(source, 0, 0, 400, 200, offset, 0, 400, 200);
              ctx.drawImage(source, 0, 200, 400, 200, -offset, 200, 400, 200);
              ctx.drawImage(source, 0, 400, 400, 200, offset, 400, 400, 200);
            } else {
              clearInterval(inter);
              inter = null;
            }
          }, 16);
        };
      } catch (e) {
        console.log(e);
      }
    },
    selectImg: function(e) {
      console.log(e.target.style);
      if (!!e.target.id) {
        $(".carousel-contral ul li").css("background-color", "white");
        e.target.style.backgroundColor = "red";
        this.count = e.target.id;
        if (this.imgUrl !== this.imgList[e.target.id]) {
          //   alert(1)
          e.target.style.backgroundColor = "red";
          this.imgUrl = this.imgList[e.target.id];
          this.showImg();
        }
      }
    },
    stopLunbo: function() {
      // alert(1)
      // this.timer.pause();
      // clearTimeout(this.timer)
    },
    startLunbo: function() {
      let _this = this;
      // let inter = null;
      // clearInterval(inter);
      this.$nextTick(() => {
        // let count = 1;
        this.timer = setTimeout(function cc() {
          //do something
          if (_this.count < 6) {
            _this.count++;
            if (_this.count == 6) {
              _this.count = _this.count - 6;
              $(".carousel-contral ul li").css("background-color", "white");
              $(
                ".carousel-contral ul li:nth-child(" +
                  (_this.count + 1).toString() +
                  ")"
              ).css("background-color", "red");
              _this.imgUrl = _this.imgList[_this.count];
              _this.showImg();
              console.log(_this.count, "2222");
            }
            $(".carousel-contral ul li").css("background-color", "white");
            $(
              ".carousel-contral ul li:nth-child(" +
                (_this.count + 1).toString() +
                ")"
            ).css("background-color", "red");
            _this.imgUrl = _this.imgList[_this.count];
            _this.showImg();
            console.log(_this.count, "1111");
          }
          clearTimeout(_this.timer);
          _this.timer = null;
          setTimeout(cc, 4000);
        }, 4000);
      });
    }
  }
};
</script>
<style lang="less" scoped>
.carousel {
  position: relative;
  width: 400px;
  height: 600px;
  box-shadow: 0px 0px 5px white;
  border-radius: 12px;
  overflow: hidden;
  .carousel-contral {
    position: absolute;
    height: 25px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: black;
    ul {
      display: flex;
      color: white;
      height: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        height: 10px;
        width: 10px;
        background-color: white;
        cursor: pointer;
        &:not(:first-child) {
          margin-left: 10px;
        }
        &:first-child {
          background-color: red;
        }
      }
    }
  }
}
</style>

