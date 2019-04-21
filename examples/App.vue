<template>
  <div
    id="app"
    @dblclick="showMenu"
  >
    <!-- <img
      alt="Vue logo"
      src="./assets/logo.png"
    > -->
    <!-- <SaoAlert
      msg="test"
      @comfirm="test"
    /> -->
    <!-- <div>
      <SaoMenu
        :ShowMask='isShowMenu'
        ref="mask"
      >
        <MenuBtn
          slot="btn"
          id='1'
          system='1'
        >
          <MenuItem
            id="1"
            to='/a'
            name='test1'
          >
          </MenuItem>
          <MenuItem
            id="2"
            to='/b'
            name='test2'
          >
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
        <MenuBtn
          slot="btn"
          id='2'
          system='2'
        >
          <MenuItem>
          </MenuItem>
        </MenuBtn>
        <MenuBtn
          slot="btn"
          id='3'
          system='3'
        >
          <MenuItem
            id="1"
            to='/a'
            name='test1'
          >
          </MenuItem>
        </MenuBtn>
        <MenuBtn
          slot="btn"
          id='4'
          system='4'
        ></MenuBtn>
        <MenuBtn
          slot="btn"
          id='5'
          system='5'
        ></MenuBtn>
      </SaoMenu>
    </div> -->

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
export default {
  name: "app",
  data() {
    return {
      menuSonlist: [{ id: "1", name: "123", link: "/a", imgURl: "112313123" }],
      icon: iconItem,
      ishow: true,
      isShowMenu: false
    };
  },
  mounted: function() {
    console.log(this.$refs.mask);
    $("#app").css("height", $(window).height());
  },
  components: {
    // HelloWorld
  },
  methods: {
    showMenu: function() {
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
