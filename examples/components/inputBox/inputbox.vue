<template>
  <div>
    <div id="editor" style="  background:white"></div>
  </div>
</template>
<script>
import Editor from "wangeditor";
import "wangeditor/release/wangEditor.min.css";
export default {
  name: "InputBox",
  data() {
    return {};
  },
  mounted() {
    this.editor = new Editor("#editor");
    this.editor.create();
    this.editor.customConfig.colors = [
      "#000000",
      "#eeece0",
      "#1c487f",
      "#4d80bf",
      "#c24f4a",
      "#8baa4a",
      "#7b5ba1",
      "#46acc8",
      "#f9963b",
      "#ffffff"
    ];
  }
};
</script>
<style lang="less" scoped>
</style>
