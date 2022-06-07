<template>
  <div>
    <div v-infinite-scroll="loadMore" infinite-scroll-distance="30">
      <p class="row" v-for="i in n" :key="i">一行文本...{{ i }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 30,
      isLoading:false,  //用于表示数据是否在加载中
    };
  },
  methods: {
    loadMore() {
      if(this.isLoading){
        return;  //如果请求在发送中，那么不在执行后续业务
      }
      this.isLoading=true;
      console.log("到底了...");
      // 模拟发请求，5秒后得到结果
      window.setTimeout(() => {
        this.n += 20;
        this.isLoading=false;
      }, 5000);
    },
  },
};
</script>

<style scoped>
.row {
  margin: 0px 10px;
  border-bottom: 1px solid #999;
  line-height: 50px;
  height: 50px;
  text-align: center;
}
</style>