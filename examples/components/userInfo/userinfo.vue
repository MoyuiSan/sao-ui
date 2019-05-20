<template>
  <div class="userinfo">
    <div class="userinfo-aside">
      <div class="aside-top">
        <img :src="userimg">
        <div class="user-txt">
          <!-- <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=4aef489ffd1dc0617b8676500f99034352c799e9483636aba7593332d9d5ab3e"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="墨洒篱落" title="墨洒篱落"></a> -->
          <p>
            连接者:
            <span>别动我劫财</span>
            <br>等级:
            <span>lv.1</span>
          </p>
        </div>
      </div>
      <div class="aside-middle" @click="test">
        <div class="aside-middle-title">
          <img src="../../assets/SAOIcon/icon/modify_normal.png">
          <h4>个人资料</h4>
        </div>
        <div id="btm1" class="btm-line">
          <p>
            手机：
            <input type="text" placeholder="當前值為空請輸入！">
          </p>
        </div>
        <div id="btm2" class="btm-line">
          <p>
            邮箱：
            <input type="text" placeholder="當前值為空請輸入！">
          </p>
        </div>
        <div id="btm3" class="btm-line">
          <p>
            QQ：
            <input type="text" placeholder="當前值為空請輸入！">
          </p>
        </div>
        <div id="btm4" class="btm-line">
          <p>
            从事领域：
            <input type="text" placeholder="當前值為空請輸入！">
          </p>
        </div>
        <div id="btm5" class="btm-line">
          <p>
            简介：
            <input type="text" placeholder="當前值為空請輸入！">
          </p>
        </div>
        <textarea></textarea>
        <div class="asidebtn">
          <button class="reset">重置</button>
          <button class="confirm">提交审核</button>
        </div>
      </div>
    </div>
    <div class="userinfo-article">
      <div class="userinfo-article-title">我发布的</div>
    </div>
  </div>
</template>
<script>
import userImg from "../../assets/logo.png";
export default {
  name: "UserInfo",
  data() {
    return {
      userimg: userImg
    };
  },
  mounted() {},
  methods: {
    test: function(e) {
      console.log(e.target, "dsadaasd");
    }
  }
};
</script>
<style lang="less" scoped>
.userinfo {
  position: relative;
  width: 1150px;
  height: 560px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  overflow: hidden;
  animation: showBox 0.4s ease-in-out;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 10px white;
  .userinfo-aside {
    width: 30%;
    height: 510px;
    // background-color: black;
    box-sizing: border-box;
    border: 1px solid rgb(221, 221, 221);
    display: flex;
    flex-direction: column;
    .aside-top {
      text-align: left;
      padding: 10px;
      color: white;
      // height: 25px;
      display: flex;
      box-sizing: border-box;
      border-bottom: 1px solid rgb(221, 221, 221);
      img {
        width: 80px;
        height: 80px;
        box-sizing: border-box;
        // border: 1px solid white;
      }
      .user-txt {
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
        border-left: 1px solid rgb(221, 221, 221);
        p {
          text-align: center;
          span {
            padding-left: 10px;
          }
        }
      }
    }
    .aside-middle {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      .aside-middle-title {
        display: flex;
        padding: 10px;
        // justify-content: center;
        img {
          width: 20px;
          height: 20px;
          padding-left: 5px;
        }
        h4 {
          height: 20px;
          line-height: 20px;
          padding-left: 5px;
        }
      }
      .btm-line {
        position: relative;
        p {
          text-align: left;
          padding-left: 17.5px;
          padding-bottom: 10px;
          color: black;
          display: flex;
          input {
            outline: none;
            border: 0px;
            background-color: rgba(255, 255, 255, 0);
            padding-left: 5px;
            color: black;
            flex-grow: 1;
            margin-right: 17.5px;
          }
        }
        &::after {
          position: absolute;
          content: "";
          left: 0;
          bottom: 5px;
          height: 1px;
          width: 20%;
          background-color: white;
          margin-left: 5%;
          animation: lineChang 0.4s linear;
          animation-fill-mode: forwards;
        }
      }

      textarea {
        position: relative;
        flex-grow: 1;
        margin: 0px 17.5px 0px 17.5px;
        height: 150px;
        width: 302px;
        min-width: 302px;
        min-height: 150px;
        max-height: 150px;
        z-index: 11;
        outline: none;
        text-indent: 2em;
      }
      .asidebtn {
        width: 100%;
        flex-grow: 1;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        button {
          outline: none;
          background-color: rgb(221, 221, 221);
          border: 1px solid rgb(221, 221, 221);
          border-radius: 5px;
          padding-top: 5px;
          padding-left: 10px;
          padding-bottom: 5px;
          padding-right: 10px;
          cursor: pointer;
          &:hover {
            background-color: rgb(240, 240, 240);
            transition: background-color 0.2s ease-in-out;
          }
        }
      }
    }
  }
  .userinfo-article {
    width: 70%;
    height: 510px;
    box-sizing: border-box;
    border: 1px solid rgb(221, 221, 221);
    .userinfo-article-title {
      color: white;
      text-align: left;
      padding: 10px;
    }
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 25px;
    background-color: rgb(221, 221, 221);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    left: 0;
    top: 0;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 25px;
    background-color: rgb(221, 221, 221);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    left: 0;
    bottom: 0;
  }
}
@keyframes showBox {
  0% {
    height: 50px;
  }
  80% {
    height: 600px;
  }
  100% {
    height: 560px;
  }
}
@keyframes lineChang {
  0% {
    width: 20%;
  }
  100% {
    width: 90%;
  }
}
</style>
