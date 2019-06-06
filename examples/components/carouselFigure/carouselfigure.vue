<template>
  <div class="carousel" @mouseenter="stopItem" @mouseleave="startItem">
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
      timer: null,
      inter: null,
      cc: null,
      ss: null
    };
  },
  mounted() {
    this.showImg();
    this.startLunbo();
  },
  beforeDestroy() {
    clearTimeout();
    this.timer = null;
    clearInterval(this.inter);
    this.inter = null;
  },
  destroyed() {},
  methods: {
    //展示图显示
    showImg: function() {
      console.log(document.visibilityState);
      let _this = this;
      if (document.visibilityState == "visible") {
        let source = document.getElementById("source");
        // let ctx = document.getElementById("mycar").getContext("2d");
        // ctx.drawImage(source, 0, 0, 400, 600);
        try {
          let ctx = document.getElementById("mycar").getContext("2d");
          let offset = 200;
          // ctx.clearRect(0, 0, 400, 600);
          source.onload = function() {
            _this.inter = setInterval(ss, 16);
            function ss() {
              offset -= 4;
              if (offset >= 0) {
                ctx.drawImage(source, 0, 0, 400, 200, offset, 0, 400, 200);
                ctx.drawImage(source, 0, 200, 400, 200, -offset, 200, 400, 200);
                ctx.drawImage(source, 0, 400, 400, 200, offset, 400, 400, 200);
              } else {
                setTimeout(_this.inter);
                _this.inter = null;
              }
            }
          };
        } catch (e) {
          console.log(e);
          clearTimeout(_this.timer);
          _this.timer = null;
        }
      } else {
        ctx.clearRect(0, 0, 400, 600);
      }
    },
    //选择图片
    selectImg: function(e) {
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
    stopItem: function() {
      clearTimeout(this.timer);
      this.timer = null;
    },
    startItem: function() {
      this.startLunbo();
    },
    startLunbo: function() {
      //页面是否离开！
      let _this = this;
      // let inter = null;
      // clearInterval(inter);
      this.$nextTick(() => {
        // let count = 1;
        this.timer = setTimeout(function cc() {
          //do something
          // console.log(document.visibilityState);
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
          // clearTimeout(_this.timer);
          // _this.timer = null;
          console.log(_this.timer);
          setTimeout(function() {
            if (!!_this.timer) {
              cc();
            }
          }, 4000);
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

