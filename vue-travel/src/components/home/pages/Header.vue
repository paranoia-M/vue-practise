<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe658;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe63c;</span>
      输入城市/景点/旅游
    </div>
    <div class="header-right" @click="getCity">
      {{city}}
      <span class="iconfont">&#xe65c;</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  methods: {
    getCity() {
      this.$router.push('/city')
    },
  },
  computed: {
    ...mapState(['city']),
  },
}
</script>
<style lang='stylus'>
@import '~assets/css/var.styl';

.header {
  width: 100%;
  line-height: 0.88rem;
  background: $bgColor;
  color: $textColor;
  font-size: 0.36rem;
  display: flex;
}

.header-search {
  flex: 1;
  background: white;
  height: 0.6rem;
  margin: 0.14rem;
  border-radius: 0.1rem;
  color: #e4e7ea;
  line-height: 0.6rem;
  font-size: 0.28rem;
  padding-left: 0.2rem;
}

.header-left {
  width: 0.4rem;
  padding: 0 0.2rem;
  text-align: center;
  font-weight: bold;
}

.header-right {
  font-size: 0.28rem;
  padding: 0 0.2rem;
}
</style>