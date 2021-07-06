import { mapMutations } from 'vuex'
  <div class="container">
    <div ref="container">
      <!-- hot -->
      <div class="hot">
        <div class="hot-title">热门城市</div>
        <ul class="hot-list">
          <li
            class="hot-item"
            v-for="item in hotCities"
            :key="item.id"
            @click="changeCityName(item.name)"
          >{{item.name}}</li>
        </ul>
      </div>
      <!-- sort -->
      <div class="sort">
        <div class="sort-title">字母排序</div>
        <ul class="sort-list">
          <li class="sort-item" v-for="(val,key) in cities" @click="changeSort(key)">{{key}}</li>
        </ul>
      </div>
      <!-- list -->
      <div class="list">
        <div v-for="(val,key) in cities" :ref="key">
          <div class="list-title">{{key}}</div>
          <ul class="list-msg">
            <li
              class="list-item"
              v-for="item in val"
              :key="item.id"
              @click="changeCityName(item.name)"
            >{{item.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cities', 'hotCities', 'cities'],
  data() {
    return {
      scroll: '',
    }
  },
  mounted() {
    let container = this.$refs['container']
    this.scroll = new BScroll('.wrapper', { container })
  },
  methods: {
    changeSort(sortName) {
      this.scroll.scrollToElement(this.$refs[sortName][0])
    },
    changeCityName(cityName) {
      this.changeCity(cityName)
      this.$router.push('./')
    },
    ...mapMutations(['changeCity']),
  },
}
</script>

<style scoped lang="stylus">
@import '~@/assets/css/common.styl';

.container {
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 0.88rem;
  background: #f5f5f5;
}

.hot-title {
  font-size: 0.26rem;
  color: #212121;
  padding: 0.3rem;
}

.hot-list {
  font-size: 0.28rem;
  background: #fff;
  position: relative;
  overflow: hidden;
  color: #212121;
}

.hot-list:before {
  content: '';
  position: absolute;
  height: 100%;
  width: 33.3333%;
  left: 33.3333%;
  border-left: 0.02rem solid #ddd;
  border-right: 0.02rem solid #ddd;
}

.hot-item {
  width: 33.3333%;
  text-align: center;
  height: 0.9rem;
  line-height: 0.9rem;
  float: left;
  border-bottom: 0.02rem solid #ddd;
  position: relative;
}

.sort-title {
  font-size: 0.24rem;
  color: #212121;
  padding: 0.3rem;
}

.sort-list {
  font-size: 0.28rem;
  background: #fff;
  position: relative;
  overflow: hidden;
  color: #212121;
}

.sort-item {
  width: 16.6666%;
  text-align: center;
  height: 0.9rem;
  line-height: 0.9rem;
  float: left;
}

.list-title {
  font-size: 0.24rem;
  color: #212121;
  padding: 0.3rem;
}

.list-item {
  width: 25%;
  font-size: 0.28rem;
  text-align: center;
  line-height: 0.9rem;
  float: left;
  border-bottom: 0.02rem solid #ddd;
  textOverflow();
  position: relative;
}

.list-msg {
  position: relative;
  background: #fff;
  overflow: hidden;
}

.list-msg:before {
  position: absolute;
  content: '';
  left: 25%;
  width: 25%;
  height: 100%;
  border-left: 0.02rem solid #ddd;
  border-right: 0.02rem solid #ddd;
}

.list-msg:after {
  position: absolute;
  content: '';
  left: 75%;
  width: 0;
  height: 100%;
  border-left: 0.02rem solid #ddd;
}
</style>