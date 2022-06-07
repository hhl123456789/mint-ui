<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="学前端，到达内" fixed>
      <div slot="right">
        <router-link class="link" to="/register">注册</router-link>
        &nbsp;
        <router-link class="link" to="/login">登录</router-link>
      </div>
    </mt-header>
    <!-- 导航 -->
    <mt-navbar v-model="selected" fixed style="margin-top: 40px">
      <mt-tab-item :id="item.id + ''" v-for="item in catList" :key="item.id">{{
        item.category_name
      }}</mt-tab-item>
      <!-- <mt-tab-item id="2">电商 </mt-tab-item>
      <mt-tab-item id="3">网页 </mt-tab-item>
      <mt-tab-item id="4">交互 </mt-tab-item> -->
    </mt-navbar>

    <!-- 轮播图 -->
    <mt-swipe
      style="height: 56.2vw; margin-top: 90px"
      :speed="1000"
      :auto="5000"
    >
      <mt-swipe-item>
        <img src="/1.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="/2.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="/3.jpg" />
      </mt-swipe-item>
    </mt-swipe>

    <div v-infinite-scroll="loadMore" infinite-scroll-distance="30">
      <!-- 引入文章列表项 -->
      <div style="margin-bottom: 60px">
        <article_item
          v-for="item in articleList"
          :key="item.id"
          :article="item"
        ></article_item>
      </div>
    </div>
  </div>
</template>


<script>
import article_item from "@/components/article_item.vue";
export default {
  components: { article_item },
  mounted() {
    // 加载类别列表
    this.loadCats();
    // 加载UI类别下的首页文章数据
    this.axios.get(`/articles?cid=1&page=1`).then((res) => {
      console.log("UI类别下首页文章数据", res);
      this.articleList = res.data.results; //文章列表存入data.articleList
    });
  },
  methods: {
    // 当触发到底事件后，执行loadmore方法
    loadMore(){
      let cid=this.selected  //this.selected即是顶部导航选中项的类别
      this.page++;  //下一页需要让data.page自增
      console.log(`到底了！加载数据cid:${cid},page:${this.page}`);
      // 发送http请求，加载响应页码的数据
      this.axios.get(`/articles?cid=${cid}&page=${this.page}`).then((res)=>{
        console.log("加载下一页",res);
        // 将返回的文章列表 res.data.results 追加到当前列表末尾data.articlelist
        this.articleList.push(...res.data.results);
      });
    },
    loadCats() {
      //  加载类别列表
      this.axios.get("/category").then((res) => {
        console.log("加载类别列表", res);
        this.catList = res.data.results; //将类别数组存储在data.catList
      });
    },
  },
  data() {
    return {
      selected: "1",
      catList: [], //用于存储类别列表
      articleList: [], //用于存储文章列表
      page:1, //用于描述当前页码
    };
  },
  watch: {
    // 监听顶部导航选中项的ID变化
    selected(newValue, oldValue) {
      // 回到页面顶部
      window.scrollTo(0, 0);

      console.log(newValue);
      this.axios.get(`/articles?cid=${newValue}&page=1`).then((res) => {
        console.log("顶部导航", res);
        this.articleList = res.data.results; //为articleList重新赋值为新数组
      });
    },
  },
};
</script>

<style scoped>
.link {
  color: white;
  text-decoration: none;
}
.mint-swipe img {
  width: 100%;
}
</style>