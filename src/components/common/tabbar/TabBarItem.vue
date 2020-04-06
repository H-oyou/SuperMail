<template>
  <div class = 'tab-bar-item' @click = 'click'>
      <div v-if = '!isActive'>
          <slot name = 'item-icon'></slot>
      </div>
      <div v-else>
          <slot name = 'item-iconActive'></slot>
      </div>
      <div :style = activeStyle>
          <slot name = 'item-text'></slot>
      </div>
      
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'TabBarItem',
  props:{
      path:String,
      activeColor:{
          type:String,
          default:'red'
      }
  },
  data() {
      return {
          //isActive:true
      }
  },
  computed:{
      //根据路由判断哪一个是处于活跃状态的路由,动态改变isActive
      isActive() {
          return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
          //动态绑定颜色,先判断是否时处于活跃状态的,如果是,就把颜色放上去,如果不是就传入一个空对象
          return this.isActive? {color:this.activeColor}:{}
      }
  },
  methods:{
      click() {
          console.log('click');
          this.$router.push(this.path)
      }
  }
}
</script>

<style scoped>
.tab-bar-item {
    flex: 1;
    height:49px;
    text-align:center;
    font-size:14px;
}
img{
  margin-top:3px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom:2px;
}

/*这个颜色也是别人决定的,不能写死,如果想变成别的颜色,不能改这里的源码,这些封装的组件都必须时独立的,不能该组件内部的东西
所以要动态绑定style
*/
/* .active {
    color:red;
} */
</style>
