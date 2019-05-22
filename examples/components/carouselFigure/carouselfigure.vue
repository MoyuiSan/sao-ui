<template>
  <div class="carousel">
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
export default {
  name: "CarouselFigure",
  data() {
    return {
      imgUrl: img,
      imgList: [img, img2, img, img2, img, img2]
    };
  },
  mounted() {
    this.showImg();
    let _this = this;
    let inter = null;
    clearInterval(inter);
    this.$nextTick(() => {
      let count = 1;
      inter = setInterval(() => {
        if (count < 6) {
          this.imgUrl = this.imgList[count];
          this.showImg();
          count++;
          console.log(count);
        } else if (count == 6) {
          count = count - 6;
          this.imgUrl = this.imgList[count];
          this.showImg();
          console.log(count);
        }
      }, 1000);
    });
  },
  methods: {
    //展示图显示
    showImg: function() {
      let source = document.getElementById("source");
      // let ctx = document.getElementById("mycar").getContext("2d");
      // ctx.drawImage(source, 0, 0, 400, 600);
      let ctx = document.getElementById("mycar").getContext("2d");
      let offset = 200;
      source.onload = function() {
        ctx.clearRect(0, 0, 400, 600);
        //   let ctx = document.getElementById("mycar").getContext("2d");
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
    },
    selectImg: function(e) {
      //   alert(this.imgList[e.target.id]);
      if (this.imgUrl !== this.imgList[e.target.id]) {
        //   alert(1)
        this.imgUrl = this.imgList[e.target.id];
        this.showImg();
      }
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
      }
    }
  }
}
</style>

