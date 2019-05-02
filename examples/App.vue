<template>
  <div id="app" @dblclick="showMenu">
    <div class="welcome" v-if="ishow">
      <input class="welcome-txt" type="text" :value="txt" />
      <div class="notouch"></div>
    </div>
    <!-- <img
      alt="Vue logo"
      src="./assets/logo.png"
    > -->
    <!-- <SaoAlert
      msg="test"
      @comfirm="test"
    /> -->
    <div>
      <SaoMenu :ShowMask='isShowMenu' ref="mask">
        <MenuBtn slot="btn" id='1' system='1'>
          <MenuItem id="1" to='/a' name='个人信息'>
          </MenuItem>
          <MenuItem id="2" to='/b' name='我的收藏'>
          </MenuItem>
        </MenuBtn>
        <MenuBtn slot="btn" id='2' system='2'>
          <MenuItem>
          </MenuItem>
        </MenuBtn>
        <MenuBtn slot="btn" id='3' system='3'>
          <MenuItem id="1" to='/a' name='test1'>
          </MenuItem>
        </MenuBtn>
        <MenuBtn slot="btn" id='4' system='4'>
          <MenuItem id="1" to='/share' name='安利墙'>
          </MenuItem>
        </MenuBtn>
        <MenuBtn slot="btn" id='5' system='5'></MenuBtn>
      </SaoMenu>
    </div>
    <!-- <MusicBox :musicList="musicList"></MusicBox> -->
    <!-- <div>1</div> -->
    <!-- <SaoCard></SaoCard> -->
    <!-- <ShareWall :imglist="imgList"></ShareWall> -->
    <router-view></router-view>
    <!-- <router-link to='/a'>a</router-link>
        <router-link to='/b'>b</router-link>
    <router-view></router-view> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import $ from "jquery";
import iconItem from "./assets/SAOIcon/symbol/info_normal.png";
// import img5 from "../../../public/SAOIcon/img/share5.jpg"
export default {
  name: "app",
  data() {
    return {
      menuSonlist: [{ id: "1", name: "123", link: "/a", imgURl: "112313123" }],
      icon: iconItem,
      ishow: true,
      isShowMenu: false,
      musicList: [{ url: 'https://96.f.1ting.com/5cc5555f/947fc092c7b4ba91e5b1820a4ad9a827/zzzzzmp3/2013aJan/23D/23ostsao/25.mp3', name: 'Yui', actor: '未知' },
      { url: '//96.f.1ting.com/5cbedeaf/2ac3ae4cb2f47eabdb8744c0d52f5c8e/zzzzzmp3/2013eMay/06D/06sao/17.mp3', name: 'Yui', actor: '未知' },
      { url: '//96.f.1ting.com/5cbedeaf/2ac3ae4cb2f47eabdb8744c0d52f5c8e/zzzzzmp3/2013eMay/06D/06sao/17.mp3', name: 'Yui', actor: '未知' }],
      txt: ''
    };
  },
  mounted: function () {
    console.log(this.$refs.mask);
    $("#app").css("height", $(window).height());
    // console.log(this.$store.state.items)
    // $('welcome-txt').preventDefault()
    let txt = "Welcome to SAO World!";
    let txtLength = txt.length;
    let txtArrary = txt.split("");
    let showTxt = "";
    let _this = this;
    console.log(txtLength);
    for (let i = 0; i < txtLength; i++) {
      let timer = setTimeout(function () {
        showTxt += txtArrary[i];
        _this.txt = showTxt;
        clearTimeout(timer)
      }, 100 * i)

    }
  },
  components: {
    // HelloWorld
  },
  methods: {
    showMenu: function () {
      if (this.$refs.mask.isShow == true) {
        //内部调用开关方法
        this.$refs.mask.noShow();
      } else {
        this.$refs.mask.showMask();
      }
      this.ishow = false;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 1040px;
  background: url("./assets/img/bg1.jpg");
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
}
.notouch {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: white; */
}
</style>
