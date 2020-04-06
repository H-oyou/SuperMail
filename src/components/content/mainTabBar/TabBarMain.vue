<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="~assets/images/tabbar/home.svg" alt />
      <img slot="item-iconActive" src="~assets/images/tabbar/home_active.svg" alt />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="yellow">
      <img slot="item-icon" src="~assets/images/tabbar/category.svg" alt />
      <img slot="item-iconActive" src="~assets/images/tabbar/category_active.svg" alt />
      <div slot="item-text">目录</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcut" activeColor="green">
      <img slot="item-icon" src="~assets/images/tabbar/cart.svg" alt />
      <img slot="item-iconActive" src="~assets/images/tabbar/cart_active.svg" alt />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="red">
      <img slot="item-icon" src="~assets/images/tabbar/profile.svg" alt />
      <img slot="item-iconActive" src="~assets/images/tabbar/profile_active.svg" alt />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script type="text/javascript">
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "TabBarMain",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped>
</style>
