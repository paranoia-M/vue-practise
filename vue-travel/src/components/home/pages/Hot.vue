<template>
  <div class="hot">
    <div class="hot-top">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt />
      <span>本周热门榜单</span>
      <span class="iconfont hot-title">全部榜单 &#xe65c;</span>
    </div>
    <ul class="hot-list">
      <li class="hot-item" v-for="item in hotList">
        <img :src="item.imgUrl" />
        <p>{{item.title}}</p>
        <p>
          <span class="hot-mark">￥{{item.mark}}</span>起
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['hotList'],
  data() {
    return {}
  },
}
</script>

<style scoped lang='stylus'>
@import '~@/assets/css/common.styl';

.hot {
  background: #fff;
  margin-top: 0.2rem;
  font-size: 0.28rem;
}

.hot-top {
  padding: 0.2rem;
  position: relative;
}

.hot-top span {
  color: #212121;
}

.hot-top img {
  width: 0.3rem;
  height: 0.3rem;
}

.hot-top .hot-title {
  right: 0.2rem;
  position: absolute;
  color: #616161;
}

.hot-list {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  height: 3rem;
}

.hot-item {
  display: inline-block;
  padding: 0 0.2rem;
  width: 2rem;
  height: 2rem;
}

.hot-item img {
  width: 100%;
  height: 100%;
}

.hot-item p {
  margin-top: 0.1rem;
  text-align: center;
  textOverflow();
}

.hot-item p .hot-mark {
  color: #ff8300;
  font-size: 0.3rem;
}
</style>