<template>
  <div @mouseenter="testss">
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
    this.editor.customConfig.linkImgCallback = function(url) {
      console.log(url); // url 即插入图片的地址
    };
    console.log(this.editor.txt.html());
  },
  methods: {
    testss: function() {
      console.log(this.editor.txt.html());
    }
  }
};
</script>
<style lang="less" scoped>
</style>
