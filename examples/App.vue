<template>
  <div id="app" @dblclick="showMenu">
    <!-- <img
      alt="Vue logo"
      src="./assets/logo.png"
    > -->
    <!-- <SaoAlert
      msg="test"
      @comfirm="test"
    /> -->
    <!-- <div>
      <SaoMenu :ShowMask='isShowMenu' ref="mask">
        <MenuBtn slot="btn" id='1' system='1'>
          <MenuItem id="1" to='/a' name='test1'>
          </MenuItem>
          <MenuItem id="2" to='/b' name='test2'>
          </MenuItem>
          <MenuItem id="3">
          </MenuItem>
          <MenuItem id="4">
          </MenuItem>
          <MenuItem id="5">
          </MenuItem>
          <MenuItem id="6">
          </MenuItem>
          <MenuItem id="7">
          </MenuItem>
          <MenuItem id="8">
          </MenuItem>
          <MenuItem id="9">
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
        <MenuBtn slot="btn" id='4' system='4'></MenuBtn>
        <MenuBtn slot="btn" id='5' system='5'></MenuBtn>
      </SaoMenu>
    </div> -->
    <MusicBox></MusicBox>
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
import img1 from "../public/SAOIcon/img/share1.png"
import img2 from "../public/SAOIcon/img/share2.png"
import img3 from "../public/SAOIcon/img/share3.jpg"
import img4 from "../public/SAOIcon/img/share4.png"
// import img5 from "../../../public/SAOIcon/img/share5.jpg"
export default {
  name: "app",
  data() {
    return {
      menuSonlist: [{ id: "1", name: "123", link: "/a", imgURl: "112313123" }],
      icon: iconItem,
      ishow: true,
      isShowMenu: false,
      musicList: [{ url: '//96.f.1ting.com/5cbedeaf/2ac3ae4cb2f47eabdb8744c0d52f5c8e/zzzzzmp3/2013eMay/06D/06sao/17.mp3', name: 'Yui', actor: '未知' },
      { url: '//96.f.1ting.com/5cbedeaf/2ac3ae4cb2f47eabdb8744c0d52f5c8e/zzzzzmp3/2013eMay/06D/06sao/17.mp3', name: 'Yui', actor: '未知' },
      { url: '//96.f.1ting.com/5cbedeaf/2ac3ae4cb2f47eabdb8744c0d52f5c8e/zzzzzmp3/2013eMay/06D/06sao/17.mp3', name: 'Yui', actor: '未知' }],
      imgList: [img1,
        img2,
        img3,
        img4,
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557034861&di=0f9449352dd306a9680e1dcc25dbb765&imgtype=jpg&er=1&src=http%3A%2F%2Fimgs.aixifan.com%2Flive%2F1483766607117%2F1483766607117.jpg"]
    };
  },
  mounted: function () {
    console.log(this.$refs.mask);
    $("#app").css("height", $(window).height());
    console.log(this.$store.state.items)
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
}
@font-face {
  font-family: "saoUI";
  src: url("./SAOUIRegular.otf");
}
* {
  font-family: saoUI;
  margin: 0px;
}
</style>
