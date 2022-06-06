<template>
  <div>
    <!-- 二级路由占位符 -->
    <router-view />
    <!-- 底部导航 选项卡-->
    <mt-tabbar v-model="tabselected">
      <mt-tab-item id="index"
        >首页
        <img
          :src="
            require(`@/assets/common/main_${
              tabselected == 'index' ? '1' : '0'
            }.png`)
          "
          slot="icon"
        />
      </mt-tab-item>
      <mt-tab-item id="me"
        >我的
        <img
          v-if="tabselected == 'me'"
          src="../assets/common/me_1.png"
          slot="icon"
        />
        <img v-else src="../assets/common/me_0.png" slot="icon" />
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  watch:{
    tabselected(newValue,oldValue){
      console.log(newValue);
      if(newValue=='index'){
        this.$router.push('/home/index')
      }else if(newValue=='me'){
        this.$router.push('/home/me')
      }
    }
  },
  data() {
    return {
      // 默认选中项应该是当前路径的最后一个单词  /home/index ? me
      // 此处应该截取当前路径末尾单词，设置到默认选中项 
      // split（'/'） 截取/后的所有文件
      // pop删除最后个元素，并且返回
      tabselected: this.$route.path.split('/').pop()
    };
  },
};
</script>
