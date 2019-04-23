<template>
  <div class="music-box">
    <div class="music-img" @click="Audionoff" @mouseover="showHoverImg" @mouseleave="hideHoverImg">
      <img :src="imgUrl" alt="SaoMusic" />
      <div class="posImg" v-if="isPlay">
        <img :src="playImg" alt="" v-if="musicStatus" />
        <img :src="pauseImg" alt="" v-if="!musicStatus" />
      </div>
    </div>
    <div class="music-mes">
      <div class="music-mes-title">
        <p>歌名:dadasd 歌手:啊的阿斯大萨</p>
      </div>
      <div class="contral" @mouseleave="noTime">
        <canvas class="ctl-1" id="myCtl" width="140" height="30" @mousemove="test" @click="timeGo"></canvas>
        <div class="ctl-2">
          <div class="prorgess">{{musicNow}}/{{musicLength}}</div>
          <div class="more" @click="showMusicCtl"><img :src="moreCtl"></div>
        </div>
        <span v-if="selTime">{{formatSelectTime}}</span>
      </div>
    </div>
    <div class="music-ctl" v-if="isMusicCtl">
      <div class="music-ctl-item"><img :src="ctl1" /></div>
      <div class="music-ctl-item"><img :src="ctl2" /></div>
      <div class="music-ctl-item"><img :src="ctl3" /></div>
      <div class="music-ctl-item"><img :src="ctl4" /></div>
      <div class="music-ctl-item"><img :src="ctl5" /></div>
    </div>
    <div v-show="false">
      <audio id="myAudio" controls>
        <!-- <source src="../../../SAOIcon/music/LiSA.mp3" type="audio/mpeg"> -->
        <source src="//m10.music.126.net/20190423123228/c815294f5af60e56b78593ba13de93fa/ymusic/873c/caed/6c28/179f88e4ac59bcc8094b6380c90cc100.mp3" type="audio/mpeg">
      </audio>
    </div>
  </div>
</template>
<script>
// 初代播放器版本1.0
import $ from 'jquery'
import imgURL from "../../../SAOIcon/img/img1.jpg"
import moreCTL from "../../../SAOIcon/icon/equipment_normal.png"
import playURL from "../../../SAOIcon/img/img2.jpg"
import pauseURL from "../../../SAOIcon/img/img3.jpg"
import ctl1 from "../../../SAOIcon/icon/run_normal.png"
import ctl2 from "../../../SAOIcon/icon/skills_normal.png"
import ctl3 from "../../../SAOIcon/icon/modify_normal.png"
import ctl4 from "../../../SAOIcon/icon/help_normal.png"
import ctl5 from "../../../SAOIcon/icon/option_normal.png"

export default {
  name: "MusicBox",
  data() {
    return {
      imgUrl: imgURL,
      moreCtl: moreCTL,
      ctl1:ctl1,
      ctl2:ctl2,
      ctl3:ctl3,
      ctl4:ctl4,
      ctl5:ctl5,
      selTime: false,
      musicList: [],
      musicLength: "0:00",
      musicNow: "0:00",
      clear: false,
      formatSelectTime: "0:00",
      selectTime: "0",
      isPlay: false,
      playImg: playURL,
      pauseImg: pauseURL,
      musicStatus: true,
      isMusicCtl: false
    }
  },
  mounted: function () {
    this.myProgress();
    let x = document.getElementById("myAudio")
    let _this = this;
    let wait = setTimeout(function () {
      // let now = _this.formatTime(x.currentTime);
      let total = _this.formatTime(x.duration);
      _this.musicLength = total;
      // var timer = setInterval(() => {
      //   if (this.clear == true) {
      //     clearInterval(timer)
      //   }
      //   let now = _this.formatTime(x.currentTime);
      //   _this.musicNow = now;
      // }, 1000);
      clearTimeout(wait)
    }, 200)

  },
  methods: {
    test: function (e) {//鼠标悬浮的时间信息
      let x = document.getElementById("myAudio");
      this.selTime = true
      let _this = this
      $('.contral span').css('left', e.offsetX)
      let select = (e.offsetX / 135) * (x.duration)
      this.formatSelectTime = this.formatTime(select)
      this.selectTime = select;
    },
    noTime: function () {
      this.selTime = false
    },
    myProgress: function (e) {//绘制进度条
      let c = document.getElementById("myCtl");
      let ctx = c.getContext("2d");
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(0, 20)
      ctx.lineTo(140, 20)
      ctx.closePath();
      ctx.strokeStyle = "#c0c0c0";
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, 20);
      if (e) { ctx.lineTo(e, 20); } else { ctx.lineTo(0, 20); }
      ctx.closePath();
      ctx.strokeStyle = "black";
      ctx.stroke();
    },
    Audionoff: function () {//开启播放
      let x = document.getElementById("myAudio");
      var timer;
      let _this = this;
      if (x.paused === true) {
        x.play();
        this.musicStatus = false;
        timer = setInterval(() => {
          let now = _this.formatTime(x.currentTime);
          let newProgress = (x.currentTime / x.duration) * 140
          // console.log(newProgress)
          _this.musicNow = now;
          _this.myProgress(newProgress)
          if (x.paused === true) {
            clearInterval(timer)
          }
        }, 10);
      } else {
        this.musicStatus = true;
        x.pause();
      }
    },
    formatTime: function (time) {//格式化时间（0：00）
      let mimutes = parseInt(time / 60);
      let seconds = (time % 60).toFixed(0);
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      let musicNow = mimutes + ':' + seconds;
      return musicNow
    },
    timeGo: function () {//选择歌曲时间
      let x = document.getElementById("myAudio");
      if (x.paused === false) {
        console.log(this.selectTime)
        x.currentTime = this.selectTime;
      }
    },
    showHoverImg: function () {//播放悬停
      this.isPlay = true;
    },
    hideHoverImg: function () {//播放悬停
      this.isPlay = false;
    },
    showMusicCtl: function () {
      if (this.isMusicCtl === false) {
        this.isMusicCtl = true;
      } else {
        this.isMusicCtl = false;
      }

    }
  }
};
</script>
<style lang="less" scoped>
.music-box {
  position: fixed;
  display: flex;
  width: 280px;
  height: 60px;
  box-sizing: border-box;
  border: 1px solid black;
  z-index: 900;
  top: 0px;
  left: 5px;
  .music-img {
    display: flex;
    position: relative;
    width: 60px;
    height: 60px;
    justify-content: center;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
    .posImg {
      position: absolute;
      top: 5px;
      height: 5px;
      width: 50px;
      height: 50px;
      img {
        opacity: 0.5;
      }
    }
  }
  .music-mes {
    width: 220px;
    height: 25px;
    .music-mes-title {
      width: 215px;
      height: inherit;
      margin-top: 5px;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: flex;
      justify-content: flex-start;
      box-sizing: border-box;
      border-bottom: 1px solid black;
      cursor: pointer;
      p {
        width: 100%;
        text-align: left;
      }
      p:hover {
        animation: textgo 5s infinite linear;
      }
    }
    .contral {
      position: relative;
      width: 220px;
      height: 25px;
      display: flex;
      .ctl-1 {
        position: relative;
        width: 135px;
        height: 100%;
        cursor: pointer;
      }
      .ctl-2 {
        position: relative;
        width: 80px;
        height: 100%;
        display: flex;
        .prorgess {
          width: 60px;
          height: 100%;
          font-size: 12px;
          line-height: 32px;
        }
        .more {
          width: 20px;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          img {
            width: 20px;
            height: 20px;
            cursor: pointer;
          }
        }
      }
      span {
        position: absolute;
        font-size: 12px;
        top: 0px;
        left: 0px;
        // transition: left .3s ease-in;
      }
    }
  }
  .music-ctl {
    position: absolute;
    display: flex;
    width: 280px;
    height: 40px;
    box-sizing: border-box;
    border-bottom: 1px solid black;
    top: 60px;
    left: -1px;
    // cursor: pointer;
    background-color: #fff;
    transition: background-color 0.4s;
    animation: showCtl 0.8s ease;
    animation-fill-mode: forwards;
    .music-ctl-item {
      width: 25%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: background-color 0.4s;
      &:hover {
        background-color: #ececec;
      }
      img {
        width: 20px;
        height: 20px;
      }
    }
    // &:hover {
    //   background-color: #cfcecedc;
    // }
    &::after {
      content: "";
      position: absolute;
      right: 0px;
      height: 20px;
      width: 1px;
      top: 20px;
      background-color: black;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0px;
      height: 20px;
      width: 1px;
      top: 20px;
      background-color: black;
    }
  }
}
@keyframes textgo {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: -150px;
  }
}
@keyframes showCtl {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes noCtl {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>