<template>
  <div id="app">
    <!-- <img
      alt="Vue logo"
      src="./assets/logo.png"
    > -->
    <!-- <SaoAlert
      msg="test"
      @comfirm="test"
    /> -->

    <SaoMenu>
      <MenuBtn
        slot="btn"
        id='1'
        :icon="icon"
      >
        <MenuItem>
        </MenuItem>
        <MenuItem>
        </MenuItem>
                <MenuItem>
        </MenuItem>
                <MenuItem>
        </MenuItem>
                <MenuItem>
        </MenuItem>
                <MenuItem>
        </MenuItem>
                <MenuItem>
        </MenuItem>
                <MenuItem>
        </MenuItem>
                <MenuItem>
        </MenuItem>
      </MenuBtn>
      <MenuBtn
        slot="btn"
        id='2'
      >
        <MenuItem>
        </MenuItem>
      </MenuBtn>
      <MenuBtn
        slot="btn"
        id='3'
      ></MenuBtn>
      <MenuBtn
        slot="btn"
        id='4'
      ></MenuBtn>
      <MenuBtn
        slot="btn"
        id='5'
      ></MenuBtn>
    </SaoMenu>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import iconItem from "./assets/SAOIcon/symbol/info_normal.png";
export default {
  name: "app",
  data() {
    return {
      menuSonlist: [{ id: "1", name: "123", link: "/a", imgURl: "112313123" }],
      icon:iconItem
    };
  },
  components: {
    // HelloWorld
  },
  methods: {
    test: function() {
      // console.log("yes");
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
  margin-top: 60px;
}
@font-face {
  font-family: "saoUI";
  src: url("./SAOUIRegular.otf");
}
* {
  font-family: saoUI;
}
</style>
