<template>
  <div class="menu-item-son">
    <img
      :src="listNomal"
      alt="背景"
    >
  </div>
</template>
<script>
import listNomal from "../../../SAOIcon/background/list_normal.png";
export default {
  name: "MenuItem",
  data() {
    return {
      listNomal: listNomal
    };
  }
};
</script>
<style lang="less" scoped>
.menu-item-son {
  height: 46px;
  width: 100%;
}
</style>


