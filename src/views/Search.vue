<template>
  <div>
    <van-search v-model="keyword" placeholder="请输入搜索关键词" />
    search
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      keyword: this.$route.query.keyword,
    };
  },
};
</script>
