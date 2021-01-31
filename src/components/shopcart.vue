<template>
  <div>
    <div class="container">
      <div class="headerTop">
        <div class="left" @click="$router.go(-1)">
          <img src="../assets/images/icon/arrow/left/white.png" alt="" />
        </div>
        <div class="title">
          <h1>购物车</h1>
        </div>
      </div>
      <div class="Shoplist">
        <ul>
          <li v-for="item in goods" :key="item.id">
            <div class="content">
              <div class="check">
                <div class="checked"></div>
              </div>
              <div class="shop">
                <img
                  :src="
                    item.img
                      ? $imgUrl + item.img
                      : 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2596824142,3699389585&fm=26&gp=0.jpg'
                  "
                />
                <div class="details">
                  <p>{{ item.goodsname }}</p>
                  <!-- <p>规格：50g</p> -->
                  <p>¥{{ item.price.toFixed(2) }}</p>
                </div>
              </div>
              <div class="number">
                <div>
                  <input
                    type="button"
                    value="-"
                    @click="item.num > 0 ? item.num-- : ''"
                  />

                  <input type="text" v-model="item.num" />

                  <input type="button" value="+" @click="item.num++" />
                </div>
              </div>
              <div class="del" @click="deleteCart(item.id)">删除</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="buy">
        <div class="check">
          <div class="checked"></div>
          <span>全选</span>
        </div>
        <div class="prices">
          <p>
            总计：<span>{{ Allprices }}</span>
          </p>
          <p>不含运费，已优惠¥0.00</p>
        </div>
        <div class="Settlement">去结算({{ AllNum }}件)</div>
      </div>
      <div class="space" v-if="!goods">
        <h2>购物车为空！</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { getCartList, postCartDelete } from "../util/axios";
export default {
  data() {
    return {
      goods: [],
    };
  },
  mounted() {
    console.log(JSON.parse(sessionStorage.getItem("userInfo")));
    this.getCartList();
  },
  beforeRouteEnter(to, from, next) {
    if (!sessionStorage.getItem("userInfo")) {
      alert("您尚未登录！");
      return next("/login");
    }
    next();
  },
  computed: {
    Allprices() {
      if (!this.goods) return "0.00";
      let prices = 0;
      this.goods.forEach((item) => {
        prices += item.price * item.num;
      });
      return prices.toFixed(2);
    },
    AllNum() {
      if (!this.goods) return 0;
      let num = 0;
      this.goods.forEach((item) => {
        num += item.num;
      });
      return num;
    },
  },
  methods: {
    getCartList() {
      getCartList(
        this.$route.query.uid ||
          JSON.parse(sessionStorage.getItem("userInfo")).uid
      ).then((res) => {
        if (res.data.code === 200) {
          console.log(res.data.list);
          this.goods = res.data.list;
        } else {
          alert("获取数据失败！");
        }
      });
    },
    deleteCart(id) {
      postCartDelete({id})
        .then((res) => {
          if (res.data.code === 200) {
             this.getCartList();
            return alert("删除成功");
          }
          return alert("删除失败！");
        })
        .catch((err) => {
          return alert("删除失败！");
        });
    },
  },
};
</script>

<style lang="" scoped>
.Shoplist {
  width: 3.75rem;
  /* height: 12rem; */
  /* background-color: white; */
}
.Shoplist ul {
  width: 100%;
}
.Shoplist ul li {
  width: 100%;
  overflow: auto;
}
.Shoplist ul li div.content {
  width: 4.35rem;
  height: 1rem;
  background-color: white;
  margin-top: 0.1rem;
  box-shadow: 0px 0px 0.13rem -0.06rem black;
  display: flex;
  justify-content: space-between;
}
.Shoplist ul li div.content .check {
  width: 0.5rem;
  display: flex;
  justify-content: center;
}
.Shoplist ul li div.content .check div {
  align-self: center;
  margin: 0.1rem auto;
  width: 0.2rem;
  height: 0.2rem;
  border: 0.02rem solid #b52f1f;
  border-radius: 50%;
}
.Shoplist ul li div.content .check div.checked {
  background: url("../assets/images/icon/select.jpg") no-repeat center;
  background-size: 0.15rem 0.1rem;
}
.Shoplist ul li div.content .shop {
  width: 2.1rem;
  display: flex;
}
.Shoplist ul li div.content .shop img {
  align-self: center;
  width: 1rem;
  /* height: 0.82rem; */
}
.Shoplist ul li div.content .shop .details {
  margin-left: 0.1rem;
  height: 100%;
  align-self: center;
  padding: 0.1rem 0 0 0;
}
.Shoplist ul li div.content .shop .details p {
  font-size: 0.16rem;
}
.Shoplist ul li div.content .shop .details p:nth-child(1) {
  font-size: 0.2rem;
  width: 0.8rem;
  line-height: 0.24rem;
  /* height: .4rem; */
  /* overflow: auto; */
  color: #363636;
}
.Shoplist ul li div.content .shop .details p:nth-child(2) {
  line-height: 0.3rem;
  color: #e43d40;
}
.Shoplist ul li div.content .number {
  padding: 0.1rem 0;
  align-self: flex-end;
  width: 1.1rem;
}
.Shoplist ul li div.content .number div {
  display: flex;
  /* width: 2.1rem; */
  height: 0.34rem;
  font-size: 0;
  border: 1px solid #484848;
  border-radius: 0.05rem;
  overflow: hidden;
}
.Shoplist ul li div.content .number div input {
  font-size: 0.16rem;
  text-align: center;
  border: none;
}
.Shoplist ul li div.content .number div input:nth-child(2) {
  flex: 1;
  width: 0.2rem;
  padding: 0 0.1rem;
  border-left: 1px solid #868686;
  border-right: 1px solid #868686;
}
.Shoplist ul li div.content .number div input:nth-child(odd) {
  width: 0.4rem;
  height: 100%;
}
.Shoplist ul li div.content .del {
  margin-left: 0.1rem;
  width: 0.6rem;
  height: 100%;
  background-color: #e43d40;
  color: white;
  border: none;
  text-align: center;
  line-height: 1rem;
  font-size: 0.22rem;
}

.buy {
  background-color: white;
  position: fixed;
  left: 0;
  bottom: 0.5rem;
  height: 0.6rem;
  width: 100%;
  border-top: 1px solid #979494;
  display: flex;
  font-size: 0;
  justify-content: space-between;
}
.buy .check {
  width: 0.8rem;
  height: 0.6rem;
  display: flex;
}
.buy .check div {
  align-self: center;
  margin: 0 auto;
  width: 0.2rem;
  height: 0.2rem;
  border: 0.02rem solid #b52f1f;
  border-radius: 50%;
}
.buy .check div.checked {
  background: url("../assets/images/icon/select.jpg") no-repeat center;
  background-size: 0.15rem 0.1rem;
}
.buy .check span {
  align-self: center;
  font-size: 0.18rem;
  color: #666666;
}
.buy .prices {
  width: 2rem;
  text-align: right;
  padding: 0.1rem 0.1rem;
  box-sizing: border-box;
}
.buy .prices p {
  font-size: 0.22rem;
  line-height: 0.26rem;
}
.buy .prices p span {
  color: #e53b3f;
}
.buy .prices p:nth-child(2) {
  color: #a4a4a4;
  font-size: 0.12rem;
}
.buy .Settlement {
  width: 1.4rem;
  height: 100%;
  background-color: #f26b10;
  color: white;
  font-size: 0.18rem;
  text-align: center;
  line-height: 0.6rem;
}
.space{
  color: rgb(255,96,64);
  
}
.space h2{
  font-size: .3rem;
  font-weight: bold;
  text-align: center;
  line-height: 3rem;
}
</style>