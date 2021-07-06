<template>
  <div class="banner">
    <div @click="showSwiper">
      <div class="banner-img">
        <img
          src="//img1.qunarzz.com/sight/p0/2105/52/52ea40eb013b1a9ca3.water.jpg_600x330_55f97a3e.jpg"
          alt
        />
      </div>
      <div class="banner-title">北京欢乐谷(AAAA景区)</div>
    </div>
    <div class="img-swiper" v-show="imgSwiper" @click="hideSwiper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in bannerList" :key="item.id">
          <img :src="item.imgUrl" alt />
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSwiper: false,
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
      },
      bannerList: [
        {
          id: '01',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/2010/ea/ea45e52a4e22851ca3.img.jpg_r_800x800_3d35faba.jpg',
        },
        {
          id: '02',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/2010/ea/ea45e52a4e22851ca3.img.jpg_r_800x800_3d35faba.jpg',
        },
        {
          id: '03',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/2010/ea/ea45e52a4e22851ca3.img.jpg_r_800x800_3d35faba.jpg',
        },
      ],
    }
  },
  methods: {
    showSwiper() {
      this.imgSwiper = true
    },
    hideSwiper() {
      this.imgSwiper = false
    },
  },
}
</script>

<style scoped>
.banner {
  position: relative;
}
.banner-img {
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
}
.banner-img img {
  width: 100%;
}
.banner-title {
  position: absolute;
  font-size: 0.36rem;
  bottom: 0.4rem;
  left: 0.3rem;
  color: #fff;
}
.img-swiper {
  background: #000;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-swiper img {
  width: 100%;
}
.swiper-pagination-fraction {
  color: #fff;
  font-size: 0.32rem;
  bottom: 0.6rem;
}
</style>