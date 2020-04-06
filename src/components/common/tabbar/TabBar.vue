<template>
    <div id ="tab-bar">
        <slot></slot>
    </div>
</template>

<script type="text/javascript">


export default {
  name: 'TabBar',
}
</script>

<style scoped>
    #tab-bar {
    display: flex;   /*利用flex布局,自适应水平分布*/
    position: fixed;
    left:0;
    right:0;
    bottom:0;
    background-color:#ccc;
    box-shadow: 0px -1px 1px rgba(100, 100, 100, .2);
  }
  
</style>
