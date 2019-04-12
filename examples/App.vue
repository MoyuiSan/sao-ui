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
    <SaoMenu></SaoMenu>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: "app",
  data() {
    return {};
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
  font-family: 'saoUI';
  src: url('./SAOUIRegular.otf');
}
*{
  font-family: saoUI;
}
</style>
