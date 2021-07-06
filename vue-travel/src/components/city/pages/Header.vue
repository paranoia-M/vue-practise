<template>
  <div class="header">
    <div class="header-left" @click="toHome">
      <span class="iconfont">&#xe658;</span>
    </div>
    <div class="header-title">城市选择</div>
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang='stylus' scoped>
@import '~assets/css/var.styl';

.header {
  width: 100%;
  line-height: 0.88rem;
  background: $bgColor;
  color: $textColor;
  font-size: 0.36rem;
}

.header-left {
  width: 0.4rem;
  padding: 0 0.2rem;
  text-align: center;
  font-weight: bold;
  position: relative;
}

.header-title {
  width: 100%;
  font-size: 0.32rem;
  text-align: center;
}
</style>