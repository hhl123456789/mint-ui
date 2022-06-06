<template>
  <div>
    <mt-swipe style="height:56.2vw" :speed="2000" :auto="5000">
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
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mint-swipe img{
  width: 100%;
}
</style>