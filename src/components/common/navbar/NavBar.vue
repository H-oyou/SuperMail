<template>
  <div class = 'nav-bar'>
      <div class="left"><slot name = 'left'></slot></div>
      <div class="center"><slot name = 'center'></slot></div>
      <div class="right"><slot name = 'right'></slot></div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'NavBar',
}
</script>

<style scoped>
.nav-bar {
    display: flex;
    line-height:44px;
    height:44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(241, 237, 237, 0);
}
.left, .right {
    width: 60px;
    height:44px;
    /* background-color:red; */
}
.center {
    flex: 1;
    /* background-color:blue; */
}
</style>
