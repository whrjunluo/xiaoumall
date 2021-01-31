<template>
  <div class="box">
    <div class="headerTop">
      <div class="left" @click="goBack">
        <img src="../assets/images/icon/arrow/left/white.png" alt="" />
      </div>
      <div class="title">
        <h1>商品列表</h1>
      </div>
    </div>
    <div class="ShopList">
      <ul class="list-bottom" v-if="goods">
        <li v-for="(list, idx) in goods" :key="idx">
          <div>
            <img
              :src="
                list.img
                  ? $imgUrl + list.img
                  : 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2596824142,3699389585&fm=26&gp=0.jpg'
              "
            />
          </div>
          <div>
            <p>{{ list.goodsname }}</p>
            <p>¥{{ list.price.toFixed(2) }}</p>
            <p>原价 ¥{{ list.market_price.toFixed(2) }} 元</p>
            <input type="button" @click="toDeatai(list.id)" value="立即购买" />
          </div>
        </li>
      </ul>
      <div v-else class="vacancySpace">
          <h2>此分类暂无商品！</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { getGoods } from "../util/axios";
export default {
  data() {
    return {
      goods: [],
    };
  },
  mounted() {
    getGoods(this.$route.query.id).then((res) => {
      if (res.data.code === 200) {
            console.log(res.data.list);
        this.goods = res.data.list;
      }
     
    });
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    toDeatai(id){
      this.$router.push('/detail?id='+id)
    }
  },
  
};
</script>

<style lang="" scoped>
@import "../assets/css/goodlist.css";

</style>
