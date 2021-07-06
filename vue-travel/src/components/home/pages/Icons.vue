<template>
  <div class="icons">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="item in page" :key="item.id">
        <div class="icons-item" v-for="page in item" :key="page.id">
          <img :src="page.imgUrl" />
          <p>{{page.title}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <!-- <div class="icons-item" v-for="item in iconsList" :key="item.id">
      <img :src="item.imgUrl" />
      <p>{{item.title}}</p>
    </div>-->
  </div>
</template>

<script>
export default {
  props: ['iconsList'],
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
      },
    }
  },
  computed: {
    // 分页
    page() {
      let pages = []
      this.iconsList.forEach((item, index) => {
        let idx = Math.floor(index / 8)
        if (!pages[idx]) {
          pages[idx] = []
        }
        pages[idx].push(item)
      })
      return pages
    },
  },
}
</script>

<style scoped>
.icons {
  width: 100%;
  overflow: hidden;
  background: #fff;
}
.icons-item {
  width: 25%;
  padding-bottom: 25%;
  height: 0;
  float: left;
  /* background: lightpink; */
}
.icons-item img {
  width: 0.8rem;
  height: 0.8rem;
  display: block;
  margin: 0 auto;
  padding-top: 0.2rem;
}
.icons-item p {
  font-size: 0.28rem;
  text-align: center;
  color: #212121;
  margin-top: 0.1rem;
}
</style>