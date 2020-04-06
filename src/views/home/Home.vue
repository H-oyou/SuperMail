<template>
  <div id = 'home'>
      <nav-bar class = 'home-nav'>
        <div slot = 'center'>购物接</div>
      </nav-bar>
      <home-swiper :banners = banners></home-swiper>
      <recommend-view :recommends = recommends></recommend-view>
      <h1>首页</h1>
  </div>
</template>

<script type="text/javascript">
import NavBar from 'components/common/navbar/NavBar';
//引入轮播图组件
import HomeSwiper from './childComps/HomeSwiper';
//引入推荐组件
import RecommendView from './childComps/RecommendView';


//引入请求数据的
import {getHomeMultidata} from 'network/home.js';

export default {
  name: 'Home',
  data() {
    return {
      banners:[],
      recommends:[]
    }
  },
  created() {
    //请求多个数据
    //getHomeMultidata执行之后返回request-->request返回的是instance实例,是一个Promise对象,所以可以用then
    //而函数一旦执行完,里面的变量就消失了,所以要用一个变量保存数据,而数据太多了,可以定义多个变量分开来存放
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  },
  components:{
    NavBar,
    HomeSwiper,
    RecommendView
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);   /*使用变量来显示背景颜色*/
  color:aliceblue;
}
</style>
