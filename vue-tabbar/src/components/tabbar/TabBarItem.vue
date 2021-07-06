<template>
  <div>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>
      <div v-else>
        <slot name="item-icon-active"></slot>
      </div>
      <div :style="activeStyle">
        <slot name="item-text"></slot>
      </div>
      <!-- <img src="../../assets/svg/tabbar/home.svg" alt="" />
        <div>首页</div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isActive: true,
    };
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }

  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return  this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      //   console.log("itemClick");
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item {
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  margin-top: 3px;
  margin-bottom: 4px;
  height: 22px;
  width: 22px;
  vertical-align: middle;
}

</style>