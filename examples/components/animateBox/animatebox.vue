<template>
  <div class="animate">
    <div class="animate-box" v-if="showItem">
      <div class="road">
        <div style="background-color:white;width:300px;height:200px;"></div>
        <div style="background-color:white;width:300px;height:500px;"></div>
        <div style="background-color:white;width:300px;height:400px;"></div>
      </div>
      <div class="road">
        <div style="background-color:white;width:300px;height:100px;"></div>
        <div style="background-color:white;width:300px;height:200px;"></div>
        <div style="background-color:white;width:300px;height:500px;"></div>
      </div>
      <div class="road">
        <div style="background-color:white;width:300px;height:400px;"></div>
        <div style="background-color:white;width:300px;height:200px;"></div>
        <div style="background-color:white;width:300px;height:300px;"></div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "AnimateBox",
  data() {
    return {
      showItem: false
    };
  },
  mounted() {
    this.htmlAnimate();
  },
  methods: {
    htmlAnimate: function() {
      var _this = this;
      // 颜色
      const COLORS = {
        RED: "#FD5061",
        YELLOW: "#FFCEA5",
        BLACK: "#29363B",
        WHITE: "white",
        VINOUS: "#A50710"
      };

      // 过渡时间
      const DURATION = 800;
      // 父元素图形，只用于整体的位置的变化
      const showBase = new mojs.Shape({
        fill: "none", //填充无
        radius: 20, //半径 大小
        x: {
          [-150]: 0, //X位移
          easing: "cubic.out"
        },
        y: {
          [90]: 0, //Y位移
          easing: "cubic.out"
        },
        duration: DURATION + 400,
        // 动画执行完毕，添加样式、事件
        onComplete() {
          this.el.style.cursor = "pointer"; //css样式修改
          this.el.addEventListener("click", scaleAnime, false); //执行点击事件
        }
      });
      // 最后执行的圆形扩散
      const circle = new mojs.Shape({
        fill: COLORS.WHITE,
        parent: showBase.el, // 定义父元素
        radius: 50,
        scale: {
          //缩放
          0.4: 1
        },
        duration: 650,
        opacity: {
          //透明度
          0.5: 0
        },
        delay: DURATION + 100, //动画时间
        easing: "cubic.out"
      });
      const showUp = new mojs.Shape({
        fill: "none",
        stroke: COLORS.WHITE, //线条颜色
        parent: showBase.el, // 定义父元素
        radius: {
          0: 10
        },
        angle: {
          //旋转
          560: 270
        },
        strokeWidth: {
          //萧条宽度
          0: 22,
          easing: "cubic.inout"
        },
        strokeDasharray: "100%",
        strokeDashoffset: {
          "-100%": "0%",
          easing: "cubic.in"
        },
        strokeLinecap: "round",
        duration: DURATION
      })
        .then({
          scale: 0.75,
          duration: 250
        })
        .then({
          scale: 1,
          duration: 300
        });
      const addButtonCross = new mojs.Shape({
        shape: "cross",
        parent: showUp.el, // 定义旋转的圆形为父元素
        fill: "none",
        stroke: COLORS.VINOUS,
        radius: 6,
        strokeLinecap: "round",
        isShowStart: true,
        duration: DURATION,
        angle: {
          0: -360
        },
        scale: {
          0: 1
        },
        y: {
          35: 0
        },
        x: {
          35: 0
        }
      }).then({
        angle: -540,
        duration: DURATION / 2,
        easing: "cubic.out"
      });
      const timelineback = new mojs.Timeline();
      timelineback.add(showBase, circle, showUp, addButtonCross).play();
      function scaleAnime() {
        circle
          .tune({
            //创建新的项目
            delay: 0,
            scale: {
              0.4: 30
            },
            opacity: 1,
            duration: 500,
            easing: "cubic.inout"
          })
          .play();
        showBase
          .tune({
            onComplete() {
              this.el.remove();
              _this.showItem = true;
              $(".animate").css("background-color", "rgba(0, 0, 0,0.5)");
            }
          })
          .play();
      }
    }
  }
};
</script>
<style lang="less" scoped>
.animate {
  position: relative;
  left: 0;
  top: 0;
  padding: 0;
  margin: 0;
  color: white;
  width: 100%;
  height: 100%;
  //   background: #ea485c;
  //   overflow: hidden;
  display: flex;
  justify-content: center;
  .animate-box {
    width: 930px;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    overflow-y: scroll;
    overflow-x: hidden;
    .road {
      div {
        margin-top: 10px;
      }
    }
    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
      background-color: white;
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgb(131, 131, 131);
    }
  }
}
</style>
