<template>
    <ShareWall :imglist="imgList"></ShareWall>
</template>

<script>
import img1 from "../../../public/SAOIcon/img/share1.png"
import img2 from "../../../public/SAOIcon/img/share2.png"
import img3 from "../../../public/SAOIcon/img/share3.jpg"
import img4 from "../../../public/SAOIcon/img/share4.png"
export default {
  name: 'Share',
  data() {
    return {
      imgList: [img1,
        img2,
        img3,
        img4,
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557034861&di=0f9449352dd306a9680e1dcc25dbb765&imgtype=jpg&er=1&src=http%3A%2F%2Fimgs.aixifan.com%2Flive%2F1483766607117%2F1483766607117.jpg"]
    }
  }
}
</script>
<style lang="less" scoped>
</style>
