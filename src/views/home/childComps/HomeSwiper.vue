<template>
  <div id = 'swiper'>
      <swiper>
        <swiper-item v-for = "item in banners" :key = 'item.title'>
          <!-- 因为图片都是可以点击跳转的,所以肯定时一个a标签,绑定link属性,和图片的路径, -->
          <a :href = "item.link">
            <img :src= "item.image" alt="item.title">
          </a>
        </swiper-item>
      </swiper>
  </div>
</template>

<script type="text/javascript">
//引入轮播图的组件->index.js就是把两个组件当一个对象导出
import {Swiper, SwiperItem} from 'components/common/swiper/index.js';
export default {
  name: 'HomeSwiper',
  //由父组件像子组件传入的数据
  props:{
      banners:{
          type:Array,
          default() {
              return []
          }
      }
  },
  components:{
    Swiper,
    SwiperItem
  },
  data() {
      return {

      }
  }
}
</script>

<style scoped>
</style>
