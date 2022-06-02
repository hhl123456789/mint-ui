<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1"
        >UI
        <img src="../assets/001.png" slot="icon" />
      </mt-tab-item>
      <mt-tab-item id="2"
        >电商
        <img src="@/assets/004.png" slot="icon" />
      </mt-tab-item>
      <mt-tab-item id="3"
        >网页
        <img src="../assets/007.png" slot="icon" />
      </mt-tab-item>
      <mt-tab-item id="4"
        >交互
        <img src="../assets/025.png" slot="icon" />
      </mt-tab-item>
    </mt-navbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "1",
    };
  },
};
</script>
