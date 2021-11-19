<template>
  <div v-if="datalist[0]" class="content">
    <van-nav-bar :title="datalist[0].Chinese_name" left-text="返回" left-arrow>
      <template #left>
        <van-icon
          name="arrow-left"
          size="20"
          @click="$router.back()"
          style="margin-right: 5px"
        />
        <van-icon name="wap-home-o" size="20" @click="goto('/home')" />
      </template>
      <template #right >
        <van-icon name="search" size="18" @click="$router.push('/search')" />
      </template>
    </van-nav-bar>

    <div>
      <van-image width="100%" height="100%" :src="datalist[0].url" />
    </div>
    <h4>{{ datalist[0].Chinese_name }}</h4>
    <h4>{{ datalist[0].English_name }}</h4>
    <div style="color: red;margin-top:40px;">酒客价￥{{ datalist[0].goods_price }}</div>
    <h4>商品介绍</h4>
    <div v-html="datalist[0].goods_details"></div>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服"  />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" @click="gotoCart('/cart')"/>
      <van-goods-action-icon icon="shop-o" text="店铺"  />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" @click="gotoCart('/cart')"/>
    </van-goods-action>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Goods",
  data() {
    return {
      datalist: [],
    };
  },
  created() {
    axios.get("/api/goods/list").then(({ data }) => {
      this.datalist = data.data.filter((item) => {
        return item.id == this.$route.params.id;
      });
    });
    // 隐藏Tabber
    this.$parent.showTabbar = false;
  },
  destroyed() {
    this.$parent.showTabbar = true;
  },
  methods:{
    goto(url) {
      this.$router.push(url);
    },
    gotoCart(url){
      this.$router.push(url);
    }
  }
};
</script>

<style scoped>
.content {
  text-align: left;
}
h4{
  margin-top: 30px;
}
</style>
