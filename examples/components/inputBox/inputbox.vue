<template>
  <div @mouseenter="testss">
    <div id="editor" style="  background:white"></div>
    <input
      id="upload"
      type="file"
      @change="importfxx(this)"
      accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
    >
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
    },
    importfxx(obj) {//读取excel数据
      let _this = this;
      console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxx1");
      let inputDOM = this.$refs.inputer;
      // 通过DOM取文件数据

      this.file = event.currentTarget.files[0];

      var rABS = false; //是否将文件读取为二进制字符串
      var f = this.file;

      var reader = new FileReader();
      //if (!FileReader.prototype.readAsBinaryString) {
      FileReader.prototype.readAsBinaryString = function(f) {
        var binary = "";
        var rABS = false; //是否将文件读取为二进制字符串
        var pt = this;
        var wb; //读取完成的数据
        var outdata;
        var reader = new FileReader();
        reader.onload = function(e) {
          var bytes = new Uint8Array(reader.result);
          var length = bytes.byteLength;
          for (var i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          var XLSX = require("xlsx");
          if (rABS) {
            wb = XLSX.read(btoa(fixdata(binary)), {
              //手动转化
              type: "base64"
            });
          } else {
            wb = XLSX.read(binary, {
              type: "binary"
            });
          }
          outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]); //outdata就是你想要的东西
          console.log(outdata);
        };
        reader.readAsArrayBuffer(f);
      };
      if (rABS) {
        reader.readAsArrayBuffer(f);
      } else {
        reader.readAsBinaryString(f);
      }
    }
  }
};
</script>
<style lang="less" scoped>
</style>
