<template>
  <div class="home">
    <van-search
      v-model="keyword"
      placeholder="请输入搜索关键词"
      disabled
      @click="gotoSearch"
      class="sousuo"
    />
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      style="height: 200px"
    >
      <van-swipe-item v-for="item in hotlist" :key="item.url">
        <van-image width="100%" height="100%" :src="item.url" fit="cover" />
      </van-swipe-item>
    </van-swipe>
    <div class="introduction">
      <img src="//pic.winekee.com/web/mobile/intrudation.png" />
    </div>
    <van-row gutter="10">
      <h4 style="text-align: left">最新商品</h4>
      <van-col
        span="12"
        v-for="item in newlist"
        :key="item.id"
        class="content"
        style="height: 270px"
      >
        <van-image
          width="160"
          height="160"
          :src="item.url"
          @click="gotoDetail(item.id)"
        />
        <p style="text-align: left">{{ item.Chinese_name }}</p>
        <div class="price">￥{{ item.goods_price }}</div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      hotlist: [
        {
          url: "http://pic.winekee.com/upload/201812/1545378218114.jpg",
        },
        {
          url: "http://pic.winekee.com/upload/201812/1545378220187.jpg",
        },
        {
          url: "http://pic.winekee.com/upload/201812/1545636755035.jpg",
        },
      ],
      newlist: [],
      keyword: "双十二秒杀活动",
    };
  },
  methods: {
    gotoSearch() {
      this.$router.push("/search?keyword=" + this.keyword);
    },
    gotoDetail(id) {
      this.$router.push({
        name: "Goods",
        params: {
          id: id,
        },
      });
    },
  },
  created() {
    axios.get("/api/goods/list").then(({ data }) => {
      console.log("data=", data.data);
      this.newlist = data.data;
    });
  },
};
</script>

<style scoped>
.introduction {
  width: 100%;
  margin-top: 15px;
  height: 60px;
}
.introduction img {
  width: 90%;
  height: 100%;
}
.content {
  margin-top: 5px;
}
.price {
  color: red;
  font-size: 18px;
  text-align: left;
}
.home {
  padding: 54px 0px 50px 0px;
}
.sousuo {
  position: fixed;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 100%;
}
</style>
