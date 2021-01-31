<template>
  <div class="box">
      <div class="FooterNav">
        <ul>
            <li :class="[active==item.toRouter ? 'active':'']" v-for="(item,index) in activeLiList" :key="index" @click="toNext(item,index)">
              <img :src="active == item.toRouter ? item.imgAct:item.img" alt="">
              <p>{{item.title}}</p>
            </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active : '/home',
      activeLiList : [
        {
          title : '商城',
          img :  require("../assets/images/icon/nav/home/unselected.png"),
          imgAct : require("../assets/images/icon/nav/home/selected.png"),
          toRouter:"/home",
        },
        {
          title : '分类',
          img :  require("../assets/images/icon/nav/classify/unselected.png"),
          imgAct : require("../assets/images/icon/nav/classify/selected.png"),
           toRouter:"/classify",
        },
        {
          title : '购物车',
          img :  require("../assets/images/icon/nav/shoppingcart/unselected.png"),
          imgAct : require("../assets/images/icon/nav/shoppingcart/selected.png"),
           toRouter:"/shopCart",
        },
        {
          title : '我',
          img :  require("../assets/images/icon/nav/user/unselected.png"),
          imgAct : require("../assets/images/icon/nav/user/selected.png"),
          toRouter:"/user",
        },
      ]
    };
  },
  mounted() {
    // console.log(this.$route);
    this.active = this.$route.path;
  },
  methods: {

    toNext(item,idx){
      this.active = item.toRouter;
      this.$router.push(item.toRouter)
    }
  },
};
</script>
<style lang="" scoped>
  @import '../assets/css/FooterNav.css'
</style>