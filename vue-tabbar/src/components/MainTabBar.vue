<template>
      <tab-bar>
      <tab-bar-item path="/home" activeColor="#939b62">
        <img slot="item-icon" src="../assets/svg/tabbar/home.svg" alt="" />
        <img slot="item-icon-active" src="../assets/svg/tabbar/home-active.svg" alt="" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/menu" activeColor="#939b62">
        <img slot="item-icon" src="../assets/svg/tabbar/menu (1).svg" alt="" />
        <img slot="item-icon-active" src="../assets/svg/tabbar/menu (1)-active.svg" alt="" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#939b62">
        <img slot="item-icon" src="../assets/svg/tabbar/cart.svg" alt="" />
        <img slot="item-icon-active" src="../assets/svg/tabbar/cart-active.svg" alt="" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/user" activeColor="#939b62">
        <img slot="item-icon" src="../assets/svg/tabbar/user.svg" alt="" />
        <img slot="item-icon-active" src="../assets/svg/tabbar/user-active.svg" alt="" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem,
  }
}
</script>

<style>
@import "../assets/css/base.css";
</style>