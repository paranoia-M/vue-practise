<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconsList="iconsList"></home-icons>
    <home-location></home-location>
    <home-activity></home-activity>
    <home-hot :hotList="hotList"></home-hot>
    <home-like :likeList="likeList"></home-like>
    <home-vacation :vacationList="vacationList"></home-vacation>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HomeHeader from '@/components/home/pages/Header.vue'
import HomeSwiper from '@/components/home/pages/Swiper.vue'
import HomeIcons from '@/components/home/pages/Icons.vue'
import HomeLocation from '@/components/home/pages/Location.vue'
import HomeActivity from '@/components/home/pages/Activity.vue'
import HomeHot from '@/components/home/pages/Hot.vue'
import HomeLike from '@/components/home/pages/Like.vue'
import HomeVacation from '@/components/home/pages/Vacation.vue'

export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeLocation,
    HomeActivity,
    HomeHot,
    HomeLike,
    HomeVacation,
  },
  computed: {
    ...mapState(['city']),
  },
  data() {
    return {
      swiperList: [],
      iconsList: [],
      hotList: [],
      likeList: [],
      vacationList: [],
      changeCity: '',
    }
  },
  methods: {
    getHttp() {
      this.$http.get('mock/dataHome.json').then((res) => {
        const data = res.data.data
        data.forEach((item, index) => {
          if (item.city === this.city) {
            this.swiperList = item.swiperList
            this.iconsList = item.iconsList
            this.hotList = item.hotList
            this.likeList = item.likeList
            this.vacationList = item.vacationList
          }
        })
      })
    },
  },
  mounted() {
    this.changeCity = this.city
    this.getHttp()
  },
  activated() {
    // console.log(this.city, this.changeCity)
    if (this.city != this.changeCity) {
      this.getHttp()
      this.changeCity = this.city
    }
  },
}
</script>

<style scoped>
.home {
  background: #f5f5f5;
}
</style>