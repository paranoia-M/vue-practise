<template>
  <div class="city">
    <city-header></city-header>
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
  </div>
</template>

<script>
import CityHeader from '@/components/city/pages/Header.vue'
import CityList from '@/components/city/pages/List.vue'
export default {
  components: {
    CityHeader,
    CityList,
  },
  data() {
    return {
      hotCities: [],
      cities: {},
    }
  },
  mounted() {
    this.$http.get('mock/city.json').then((res) => {
      // console.log(res)
      let data = res.data.data
      // console.log(res.data.data)
      this.hotCities = data.hotCities
      this.cities = data.cities
    })
  },
}
</script>

<style scoped>
.city {
  background: #f5f5f5;
}
</style>