<template>
  <div class="animate">
    <div class="animate-box" v-show="showItem">
      <div class="road">
        <div
          class="animate-box-item"
          v-for="(value,index) in road1(this.nowCount).newA"
          :key="index"
          :style="{height:value.height+'px',width:value.width+'px'}"
        >{{value}}</div>
      </div>
      <div class="road">
        <div
          class="animate-box-item"
          v-for="(value,index) in road1(this.nowCount).newB"
          :key="index"
          :style="{height:value.height+'px',width:value.width+'px'}"
        >{{value}}</div>
      </div>
      <div class="road">
        <div
          class="animate-box-item"
          v-for="(value,index) in road1(this.nowCount).newC"
          :key="index"
          :style="{height:value.height+'px',width:value.width+'px'}"
        >{{value}}</div>
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
      showItem: false,
      boxItem: [
        {
          id: 1,
          width: "300",
          height: "200"
        },
        {
          id: 2,
          width: "300",
          height: "100"
        },
        {
          id: 3,
          width: "300",
          height: "400"
        },
        {
          id: 4,
          width: "300",
          height: "500"
        },
        {
          id: 5,
          width: "300",
          height: "200"
        },
        {
          id: 6,
          width: "300",
          height: "200"
        },
        {
          id: 7,
          width: "300",
          height: "400"
        },
        {
          id: 8,
          width: "300",
          height: "500"
        },
        {
          id: 9,
          width: "300",
          height: "300"
        },
        {
          id: 10,
          width: "300",
          height: "600"
        },
        {
          id: 10,
          width: "300",
          height: "500"
        },
        {
          id: 11,
          width: "300",
          height: "400"
        },
        {
          id: 12,
          width: "300",
          height: "600"
        },
        {
          id: 13,
          width: "300",
          height: "200"
        },
        {
          id: 14,
          width: "300",
          height: "500"
        },
        {
          id: 15,
          width: "300",
          height: "200"
        },
        {
          id: 16,
          width: "300",
          height: "500"
        },
        {
          id: 17,
          width: "300",
          height: "300"
        }
      ],
      nowCount: 10
    };
  },
  mounted() {
    this.htmlAnimate();
    this.scrollButtom();
  },
  computed: {},
  beforeDestroy() {
    $(".test").remove(); //删除动画节点
  },
  methods: {
    htmlAnimate: function() {
      //加载动画
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
      const showBases = new mojs.Shape({
        className: "test",
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
        parent: showBases.el, // 定义父元素
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
        parent: showBases.el, // 定义父元素
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
      timelineback.add(showBases, circle, showUp, addButtonCross).play();
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
        showBases
          .tune({
            onComplete() {
              this.el.remove();
              _this.showItem = true;
              $(".animate").css("background-color", "rgba(0, 0, 0,0.5)");
            }
          })
          .play();
      }
    },
    road1: function(count) {
      //瀑布流代码
      let newA = [],
        newB = [],
        newC = [];
      newA.push(this.boxItem[0]);
      newB.push(this.boxItem[1]);
      newC.push(this.boxItem[2]);
      let newAL = 0,
        newBL = 0,
        newCL = 0;
      let _this = this;
      let lenArry = [];
      for (let i = 3; i < count; i++) {
        lenArry = [];
        (newAL = 0), (newBL = 0), (newCL = 0);
        newA.forEach(function(e) {
          newAL = newAL + parseInt(e.height);
        });
        newB.forEach(function(e) {
          newBL = newBL + parseInt(e.height);
        });
        newC.forEach(function(e) {
          newCL = newCL + parseInt(e.height);
        });
        lenArry.push(newAL);
        lenArry.push(newBL);
        lenArry.push(newCL);
        let myIndex = 0;
        let min = Math.min(...lenArry);
        let minLen = lenArry.findIndex((val, index, arr) => {
          return val == min;
        });
        switch (minLen) {
          case 0:
            newA.push(_this.boxItem[i]);
            break;
          case 1:
            newB.push(_this.boxItem[i]);
            break;
          case 2:
            newC.push(_this.boxItem[i]);
            break;
        }
      }
      return { newA: newA, newB: newB, newC: newC };
    },
    scrollButtom: function() {
      let nScrollHight = 0; //滚动距离总长(注意不是滚动条的长度)
      let nScrollTop = 0; //滚动到的当前位置
      let nDivHight = 0; //div内容总高度
      let _this = this;
      // console.log($(".userinfo-article-box").scrollTop());
      $(".animate").scroll(function() {
        nScrollHight = $(".animate").height();
        nDivHight = document.getElementsByClassName("animate")[0].scrollHeight;
        nScrollTop = $(".animate").scrollTop();
        // console.log(nScrollTop);
        // console.log(nScrollHight);
        // console.log(nDivHight);
        if (nScrollHight + nScrollTop == nDivHight) {
          _this.isLoading = true;
          console.log("到底了！");
          if (_this.boxItem.length - _this.nowCount >= 6) {
            _this.nowCount = _this.nowCount + 6;
          } else {
            _this.nowCount = _this.boxItem.length;
          }
          _this.road1(_this.nowCount);
        } else {
          _this.isLoading = false;
        }
      });
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
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: rgba(255, 255, 255, 0);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0);
  }
  .animate-box {
    width: 930px;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .road {
      .animate-box-item {
        color: black;
        background-color: white;
        margin-top: 10px;
        animation: boxshow 0.6s normal;
        animation-fill-mode: forwards;
        box-shadow: 0px 0px 5px white;
        transform-style: preserve-2d;
      }
    }
  }
}
@keyframes boxshow {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
