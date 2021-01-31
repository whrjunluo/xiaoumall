<template>
  <div class="content">
    <div class="headerTop">
      <div class="left" @click="$router.go(-1)">
        <img src="../assets/images/icon/arrow/left/white.png" alt="" />
      </div>
      <div class="title">
        <h1>注册</h1>
      </div>
    </div>
    <div class="cont">
      <div class="form">
          <img src="../assets/images/pic/logo/orange.png" alt="">
        <label for="iphone"
          ><span>手机号：</span>
          <input type="text" v-model="formInfo.phone" id="iphone" />
        </label>
        <label for="nickname"
          ><span>昵称：</span>
          <input type="text" v-model="formInfo.nickname" id="nickname" />
        </label>
        <label for="password"
          ><span>密码：</span>
          <input type="password" v-model="formInfo.password" id="password" />
        </label>
        <button @click="register">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
import { postRegister } from '../util/axios';
export default {
  data() {
    return {
      formInfo: {
        phone: "",
        nickname: "",
        password: "",
      },
    };
  },
  methods: {
      register(){
          if(this.formInfo.phone==''||this.formInfo.nickname==''||this.formInfo.password=='')
          return alert('请将信息补充完整后操作')
          postRegister(this.formInfo)
          .then((res) => {
              console.log(res);
              if(res.data.code === 200){
                  alert('注册成功！','提示')
                  return this.$router.push('/login');
              }
              return alert(res.data.msg,'提示')
          }).catch((err) => {
              alert('错误！注册失败')
          });
      }
  },
};
</script>

<style  lang="" scoped>
.content{
    height: 100%;
}
.cont{
  background-color: rgb(242, 242, 242);
  height: 100%;
  padding: 0.1rem;
}
.form {
  color: black;
  height: 6.03rem;
  padding: .25rem;

}
.form {
  width: 3.55rem;
  box-sizing: border-box;
  /* margin: 0 auto; */
  background-color: white;
  display: flex;
  flex-direction: column;
}
.form label {
  display: flex;
  margin: 0.1rem 0 0;
  height: 0.34rem;
  border-bottom: 1px solid #eee;
}
.form label span {
  width: 0.6rem;
  text-align: left;
  line-height: 0.3rem;
  font-size: 0.14rem;
  color: #666666;
}
.form label input {
  flex: 1;
  font-size: 0.16rem;
   line-height: 0.34rem;
  border: none;
}
.form img{
    margin: 1.2rem auto .2rem;
    width: 1.82rem;
    height: .48rem;
}
.form button{
    margin: .1rem 0 0 0;
    width: 100%;
    background: #FF6040;
    color: white;
    height: .49rem;
    border: none;
    font-size: .22rem;
}
</style>
