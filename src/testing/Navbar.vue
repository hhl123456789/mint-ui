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
        <img src="/007.png" slot="icon" />
      </mt-tab-item>
      <mt-tab-item id="4"
        >交互
        <img src="/025.png" slot="icon" />
      </mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">UI内容</mt-tab-container-item>
      <mt-tab-container-item id="2">电商内容</mt-tab-container-item>
      <mt-tab-container-item id="3">网页内容</mt-tab-container-item>
      <mt-tab-container-item id="4">交互内容</mt-tab-container-item>
    </mt-tab-container>
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
