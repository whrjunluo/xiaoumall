<template>
  <div>
    <div class="headerTop">
      <h2>我的</h2>
    </div>
    <div class="mine">
      <div class="headPortrait">
        <div class="headImg">
          <img v-if="flag" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2749294814,1592070743&fm=26&gp=0.jpg" alt="" />
          <img v-else src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2601900707,917050054&fm=26&gp=0.jpg" alt="" />
        </div>
        <div class="detail">
          <h3>{{ nickName }}</h3>
          <p>完善资料让小U更懂你</p>
        </div>
        <div class="signIn">
          <img src="../assets/images/icon/red_envelopes.png" alt="" />
          <p>每日签到</p>
        </div>
      </div>
      <div class="collect">
        <ul>
          <li>
            <div>12</div>
            <p>我的收藏</p>
          </li>
          <li>
            <div>12</div>
            <p>浏览记录</p>
          </li>
          <li>
            <div><span>￥</span>12</div>
            <p>我的红包</p>
          </li>
          <li>
            <div>12</div>
            <p>优惠券</p>
          </li>
        </ul>
      </div>
      <div class="order">
        <div class="title">
          <h3>我的订单</h3>
          <div>全部订单<i class="iconfont">&#xe687;</i></div>
        </div>
        <div class="orderList">
          <ul>
            <li>
              <img
                src="../assets/images/icon/user/order/payment.png"
                alt=""
              />
              <p>待付款</p>
            </li>
            <li>
              <img
                src="../assets/images/icon/user/order/delivery.png"
                alt=""
              />
              <p>待收货</p>
            </li>
            <li>
              <img
                src="../assets/images/icon/user/order/evaluation.png"
                alt=""
              />
              <p>评价</p>
            </li>
            <li>
              <img
                src="../assets/images/icon/user/order/service.png"
                alt=""
              />
              <p>退款/售后</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="conent">
      <div class="function">
        <ul>
          <li>
            <div class="left">
              <img
                src="../assets/images/icon/user/function/address.png"
                alt=""
              />
              <h4>地址管理</h4>
            </div>
            <div class="right">
              <i class="iconfont">&#xe687;</i>
            </div>
          </li>
          <li>
            <div class="left">
              <img
                src="../assets/images/icon/user/function/wallet.png"
                alt=""
              />
              <h4>我的钱包</h4>
            </div>
            <div class="right">
              <span>剩余200U币</span>
              <i class="iconfont">&#xe687;</i>
            </div>
          </li>
          <li>
            <div class="left">
              <img
                src="../assets/images/icon/user/function/QR_code.png"
                alt=""
              />
              <h4>我的二维码</h4>
            </div>
            <div class="right">
              <i class="iconfont">&#xe687;</i>
            </div>
          </li>
          <li>
            <div class="left">
              <img
                src="../assets/images/icon/user/function/partner.png"
                alt=""
              />
              <h4>我的小伙伴</h4>
            </div>
            <div class="right">
              <i class="iconfont">&#xe687;</i>
            </div>
          </li>
          <li>
            <div class="left">
              <img
                src="../assets/images/icon/user/function/free.png"
                alt=""
              />
              <h4>0元试用</h4>
            </div>
            <div class="right">
              <i class="iconfont">&#xe687;</i>
            </div>
          </li>
        </ul>
      </div>
      <div class="exit">
        <button v-if="flag" @click="exit">退出登录</button>
        <button v-else @click="$router.push('/login')">前往登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickName: "登录后显示",
      flag : true
    };
  },
  mounted() {
    let UsertInfo = JSON.parse(window.sessionStorage.getItem("userInfo"));
    if (UsertInfo) {
      this.nickName = UsertInfo.nickname;
      this.flag= true;
    } else {
      this.flag = false;
    }
  },
  methods: {
    exit(){
      window.sessionStorage.removeItem("userInfo");
      this.$router.go(0);
      alert('退出成功！')
    }
  },
};
</script>

<style lang="" scoped>
@import "../assets/css/user.css";
.exit{
  margin: .1rem 0 0;
  /* background-color: white;  */
  height: .5rem;
  padding:  0 10px;
}
.exit button{
  display: block;
  width: 100%;
  height: 100%;
  background-color: orange;
  color: white;
  font-size: .20rem;
  border-radius: .04rem;
  border: none;
  margin: 0 auto;
}
</style>