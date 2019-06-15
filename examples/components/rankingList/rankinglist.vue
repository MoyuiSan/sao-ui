<template>
  <div class="ranking">
    <h3>热度排行榜</h3>
    <ul>
      <li v-for="(value,index) in rankingList" @click="selectItem" :key="index">
        <label>{{index+1}}</label>
        <div class="ranking-box">
          <div :id="index">
            <span :id="index">{{value}}</span>
            <span>1234</span>
          </div>
          <img src="../../assets/logo.png" v-if="rankIdx==index">
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "RankingList",
  data() {
    return {
      rankIdx: 0,
      rankingList: [
        "能打大师",
        "能打大师",
        "能打大师",
        "能打大师",
        "能打大师",
        "能打大师",
        "能打大师",
        "能打大师",
        "能打大师",
        "能打大师"
      ]
    };
  },
  mounted() {},
  methods: {
    selectItem(e) {
      let a = [...e.path];
      //   let test = a.filter(value => (value.localName = "li"));
      console.log(e.target.id);
      if (!!e.target.id) {
        this.rankIdx = e.target.id;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.ranking {
  width: 320px;
  height: 460px;
  background-color: white;
  border-radius: 3px;
  h3 {
    padding: 15px;
  }
  ul {
    width: 100%;
    padding: 0;
    li {
      display: flex;
      width: 100%;
      list-style: none;
      text-align: left;
      //   height: 20px;
      margin-bottom: 10px;
      font-size: 14px;
      align-items: flex-start;
      cursor: pointer;
      label {
        display: flex;
        width: 20px;
        height: 20px;
        font-size: 14px;
        border-radius: 3px;
        margin-left: 5px;
        margin-right: 5px;
        justify-content: center;
        align-items: center;
      }
      .ranking-box {
        display: flex;
        flex-direction: column;
        width: 100%;
        div {
          width: 100%;
          display: flex;
          justify-content: space-between;
          span:nth-child(2) {
            margin-right: 5px;
            color: rgb(201, 201, 201);
          }
          &:hover {
            color: rgb(255, 166, 166);
          }
        }
        img {
          height: 80px;
          width: 120px;
        }
      }
      &:nth-child(1) {
        label {
          color: white;
          background-color: rgb(255, 0, 0);
        }
      }
      &:nth-child(2) {
        label {
          color: white;
          background-color: rgb(255, 145, 0);
        }
      }
      &:nth-child(3) {
        label {
          color: white;
          background-color: rgb(102, 255, 0);
        }
      }
    }
  }
}
</style>
