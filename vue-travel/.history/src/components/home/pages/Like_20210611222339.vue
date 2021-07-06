<template>
  <div class="like">
    <div class="like-top">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt />
      猜你喜欢
    </div>
    <ul>
      <li class="like-item border-bottom" v-for="item in likeList" @click="toDetails">
        <div class="like-img">
          <img :src="item.imgUrl" />
        </div>
        <div class="like-text">
          <div class="like-title">{{item.title}}</div>
          <div class="like-message">{{item.msg}}</div>
          <div class="like-map">
            <span class="like-mark">
              ￥
              <b>{{item.pre}}</b>起
            </span>
            <span class="like-item-map">{{item.map}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['likeList'],
  data() {
    return {}
  },
  methods: {
    toDetails() {
      this.$router.push('./details')
    },
  },
}
</script>

<style scoped>
.like {
  margin-top: 0.2rem;
  background: #fff;
  font-size: 0.28rem;
  padding: 0 0.2rem;
}
.like-top {
  padding: 0.2rem 0;
  font-size: 0.32rem;
}
.like-top img {
  height: 0.3rem;
  width: 0.3rem;
}
.like-item {
  position: relative;
  overflow: hidden;
}
.like-img {
  padding-top: 0.2rem;
  padding-bottom: 0.1rem;
  float: left;
}
.like-img img {
  width: 2rem;
  height: 2rem;
}
.like-text {
  overflow: hidden;
  padding-left: 0.22rem;
}
.like-title {
  font-size: 0.36rem;
  color: #212121;
  margin-top: 0.4rem;
}
.like-message {
  margin-top: 0.3rem;
  color: #616161;
  font-size: 0.24rem;
}
.like-map {
  margin-top: 0.3rem;
  color: #616161;
  position: relative;
}
.like-mark {
  color: #ff8300;
}
.like-mark b {
  font-size: 0.32rem;
}
.like-item-map {
  position: absolute;
  right: 0;
  font-size: 0.26rem;
}
</style>