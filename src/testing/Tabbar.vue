<template>
  <div>
    随便写
    <mt-tabbar v-model="tabselected">
      <mt-tab-item id="index"
        >首页
        <img :src="require(`@/assets/common/main_${tabselected=='index'?'1':'0'}.png`)" slot="icon" />
      </mt-tab-item>
      <mt-tab-item id="cart"
        >购物车
        <img v-if="tabselected=='cart'" src="../assets/common/cart_1.png" slot="icon" />
         <img v-else src="../assets/common/cart_0.png" slot="icon" />
      </mt-tab-item>
      <mt-tab-item id="me"
        >我的
        <img v-if="tabselected=='me'" src="../assets/common/me_1.png" slot="icon" />
        <img v-else src="../assets/common/me_0.png" slot="icon" />
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabselected: "index",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>