<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <SaoAlert
      msg="test"
      :confirmImg="testImg"
      :cancelImg="testImg2"
    />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Test from "./assets/SAOIcon/icon/ok_normal.png"
import Test2 from "./assets/SAOIcon/icon/cancel_normal.png"
export default {
  name: "app",
  data() {
    return {
      testImg: Test,
      testImg2: Test2,
    };
  },
  components: {
    // HelloWorld
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
</style>
