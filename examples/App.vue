<template>
  <div id="app" @dblclick="showMenu">
    <div class="welcome" v-if="ishow">
      <input class="welcome-txt" type="text" :value="txt">
      <div class="notouch"></div>
    </div>
    <div class="userinfo" v-if="false">
      <UserBox></UserBox>
    </div>
    <!-- <img
      alt="Vue logo"
      src="./assets/logo.png"
    >-->
    <!-- <SaoAlert
      msg="test"
      @comfirm="test"
    />-->
    <!-- 选择框 -->
    <div>
      <SaoMenu :ShowMask="isShowMenu" ref="mask">
        <MenuBtn slot="btn" id="1" system="1">
          <MenuItem id="1" to="/index" name="首页"></MenuItem>
          <MenuItem id="2" to="/user" name="个人信息"></MenuItem>
          <MenuItem id="3" to="/fold" name="折叠面板"></MenuItem>
          <MenuItem id="3" to="/carousel" name="轮播图"></MenuItem>
          <MenuItem id="3" to="/animate" name="内容页展示"></MenuItem>
        </MenuBtn>
        <MenuBtn slot="btn" id="2" system="2">
          <MenuItem id="1" to="/input" name="输入框"></MenuItem>
        </MenuBtn>
        <MenuBtn slot="btn" id="3" system="3">
          <MenuItem id="1" to="/a" name="test1"></MenuItem>
        </MenuBtn>
        <MenuBtn slot="btn" id="4" system="4">
          <MenuItem id="1" to="/share" name="安利墙"></MenuItem>
        </MenuBtn>
        <MenuBtn slot="btn" id="5" system="5"></MenuBtn>
      </SaoMenu>
    </div>
    <!-- <MusicBox :musicList="musicList"></MusicBox> -->
    <!-- <div>1</div> -->
    <!-- <SaoCard></SaoCard> -->
    <!-- <ShareWall :imglist="imgList"></ShareWall> -->
    <div class="flexbox">
      <transition name="transitionRouter" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import $ from "jquery";
import iconItem from "./assets/SAOIcon/symbol/info_normal.png";
// import img5 from "../../../public/SAOIcon/img/share5.jpg"
import userBox from "./components/userBox/userbox";
export default {
  name: "app",
  data() {
    return {
      menuSonlist: [{ id: "1", name: "123", link: "/a", imgURl: "112313123" }],
      icon: iconItem,
      ishow: this.$store.getters.isShow,
      isShowMenu: false,
      musicList: [
        {
          url:
            "https://96.f.1ting.com/5cc5555f/947fc092c7b4ba91e5b1820a4ad9a827/zzzzzmp3/2013aJan/23D/23ostsao/25.mp3",
          name: "Yui",
          actor: "未知"
        },
        {
          url:
            "//96.f.1ting.com/5cbedeaf/2ac3ae4cb2f47eabdb8744c0d52f5c8e/zzzzzmp3/2013eMay/06D/06sao/17.mp3",
          name: "Yui",
          actor: "未知"
        },
        {
          url:
            "//96.f.1ting.com/5cbedeaf/2ac3ae4cb2f47eabdb8744c0d52f5c8e/zzzzzmp3/2013eMay/06D/06sao/17.mp3",
          name: "Yui",
          actor: "未知"
        }
      ],
      txt: ""
    };
  },
  created() {},
  mounted: function() {
    // console.log(this.$refs.mask);
    // console.log(this.$store.getters.isShow);
    this.welcome();
    // if(this.$router.history.current.path != '/'){
    //   this.ishow=false;
    // }
    $("#app").css("height", $(window).height());
    //Dom更新之后进行相关数据绑定！
    // this.$nextTick(() => {
    //   // DOM 现在更新了
    //   // `this` 绑定到当前实例
    //   this.ishow = this.$store.getters.isShow;
    //   console.log(this.ishow);
    // });
    //使用定时器进行数据延迟修改！
    // let _this = this;
    // let timer = setTimeout(function() {
    //   _this.ishow = _this.$store.getters.isShow;
    //   console.log(_this.ishow);
    //   clearTimeout(timer);
    // }, 100);
    $(document).keydown(function(event) {
      if (event.keyCode == 122) {
        location.reload(); //监听键盘事件，刷新页面
      }
    });
  },
  components: {
    // HelloWorld
    UserBox: userBox
  },
  methods: {
    showMenu: function() {
      if (this.$refs.mask.isShow == true) {
        //内部调用开关方法
        this.$refs.mask.noShow();
      } else {
        this.$refs.mask.showMask();
      }
      this.$store.dispatch("noShow");
      console.log(this.ishow);
      this.ishow = this.$store.getters.isShow;
    },
    welcome: function() {
      let txt = "Welcome to SAO World!";
      let txtLength = txt.length;
      let txtArrary = txt.split("");
      let showTxt = "";
      let _this = this;
      console.log(txtLength);
      for (let i = 0; i < txtLength; i++) {
        let timer = setTimeout(function() {
          showTxt += txtArrary[i];
          _this.txt = showTxt;
          clearTimeout(timer);
        }, 100 * i);
      }
      let timer = setTimeout(function() {
        _this.$store.dispatch("noShow");
        _this.ishow = _this.$store.getters.isShow;
        clearTimeout(timer);
      }, 5000);
    },
    test: function(e) {
      const OPTIONS = {
        shape: "circle",
        fill: "none",
        radius: 25,
        stroke: "cyan",
        scale: {
          0: 1
        },
        easing: "cubic.out"
      };
      let circle1 = new mojs.Shape({
        ...OPTIONS,
        left: 0,
        top: 0,
        strokeWidth: {
          50: 0
        }
      });

      let circle2 = new mojs.Shape({
        ...OPTIONS,
        radius: 10,
        left: 0,
        top: 0,
        stroke: "magenta",
        strokeWidth: {
          15: 0
        },
        delay: 200
      });
      let x = e.clientX,
        y = e.clientY;

      // 播放圆形1动画
      circle1
        .tune({
          x,
          y,
          onComplete() {
            this.el.remove();
          }
        })
        .replay();

      // 播放圆形2动画
      circle2
        .tune({
          x,
          y,
          onComplete() {
            this.el.remove();
          }
        })
        .replay();
    }
  }
};
</script>

<style>
#app {
  position: relative;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 900px;
  min-height: 900px;
  /* background-color: aliceblue; */
  background-image: url("../examples/assets/img/bg1.jpg");
  background-attachment: fixed;
  background-size: cover;
}
@font-face {
  font-family: "saoUI";
  src: url("./SAOUIRegular.otf");
}
* {
  font-family: saoUI;
  margin: 0px;
  user-select: none;
}
body,
html {
  overflow: hidden;
}
.welcome {
  width: 100%;
  height: auto;
  color: white;
  font-size: 30px;
  padding-top: 100px;
  position: fixed;
  z-index: 1;
}
.welcome-txt {
  font-size: 30px;
  color: white;
  background-color: rgba(255, 255, 255, 0);
  border: 0px;
  outline: none;
  padding-left: 5px;
  text-align: center;
}
.notouch {
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: white; */
}
.userinfo {
  width: 100%;
  height: 100px;
  position: fixed;
  /* background-color: white; */
  z-index: 100;
}
.flexbox {
  position: relative;
  display: flex;
  width: 100%;
  /* min-height: 948px; */
  height: 100%;
  justify-content: center;
  align-items: center;
}
.transitionRouter-enter-active,
.transitionRouter-leave-active {
  transition: all 0.4s;
}
.transitionRouter-enter,
.transitionRouter-leave {
  transform: translate3d(0, 100%, 0);
}
</stylel>
