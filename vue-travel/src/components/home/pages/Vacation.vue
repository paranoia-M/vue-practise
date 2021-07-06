<template>
  <div class="vacation">
    <div class="vacation-title">周末去哪</div>
    <ul>
      <li class="vacation-item" v-for="item in vacationList">
        <div>
          <img class="vacation-img" :src="item.imgUrl" alt />
        </div>
        <div class="vacation-msg">
          <p>{{item.title}}</p>
          <p>{{item.msg}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['vacationList'],
  data() {
    return {}
  },
}
</script>

<style scoped>
.vacation-title {
  font-size: 0.32rem;
  padding: 0.2rem;
}
.vacation-item {
  margin-bottom: 0.1rem;
  background: #fff;
  font-size: 0.28rem;
}
.vacation-img {
  width: 100%;
}
.vacation-img img {
  width: 100%;
}
.vacation-msg {
  padding: 0.2rem 0 0.2rem 0.2rem;
}
.vacation-msg p {
  margin-top: 0.2rem;
}
.vacation-msg p + p {
  color: #616161;
  font-size: 0.24rem;
}
</style>