<template>
  <div id="app">
    <!-- 使用router-view显示路由对应的组件 -->
    <router-view></router-view>

    <van-tabbar v-model="active" route v-show="showTabbar">
      <van-tabbar-item
        :icon="item.icon"
        v-for="item in menu"
        :key="item.path"
        :to="item.path"
        :badge="item.path === '/cart' ? 5 : null"
        >{{ item.text }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {},
  data() {
    return {
      active: 0,
      showTabbar:true,
      menu: [
        {
          path: "/home",
          text: "首页",
          icon: "home-o",
        },
        {
          path: "/cate",
          text: "分类",
          icon: "apps-o",
        },
        {
          path: "/cart",
          text: "购物车",
          icon: "cart-o",
        },
        {
          path: "/mine",
          text: "个人中心",
          icon: "friends-o",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-link-active {
  color: red;
}
*{
  margin: 0;
  padding: 0;
}
</style>
