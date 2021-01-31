<template>
  <div class="floor1">
    <div class="con clearfix">
      <div class="con-left">
        <div class="title">
          <h2>{{leftItem.title}}</h2>
          <div class="more">
            <a href="javascript:;">查看更多<i><svg class="icon" aria-hidden="true">
              <use xlink:href="#iconjiantou"></use>
            </svg></i></a>
          </div>
        </div>
        <div class="content">
          <div class="info">{{leftItem.info}}</div>
         <div class="timer">
           <span>{{Hours}}</span><i>:</i><span>{{Minutes}}</span><i>:</i><span>{{Seconds}}</span>
         </div>
        </div>
      </div>
      <div class="con-right">
        <div class="item-right" v-for="item in rightItems" :key="item.title">
          <h2>{{item.title}}</h2>
          <div class="info">{{item.info}}</div>
          <div class="link">{{item.linkName}}<i><svg class="icon" aria-hidden="true">
              <use xlink:href="#iconjiantou"></use>
            </svg></i></div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import CountDown from 'vue2-countdown'
export default {
  data() {
    return {
      Hours:0,
      Minutes:0,
      Seconds:0,
      startTime: new Date().getTime(), //剩余开始时间
      endTime: new Date('2021/02/25 00:00:00').getTime(), //剩余结束时间
      leftItem:{
        id: 1,
        title: "限时秒杀",
        info: "每天0点场，好货秒不停"
      },
      rightItems: [
        {
          id: 1,
          title: "品牌上新",
          info: "9点整，抢大牌",
          linkName: "疯抢红包"
        }, {
          id: 2,
          title: "日用好货",
          info: "愿君多采撷",
          linkName: "塞满奖券"
        },
      ]
    }
  },
  methods: {
//    countDownS_cb(value) {
// console.log('callBack--'+value+'--开始倒计时结束回调');
// },
// countDownE_cb(value) {
// console.log('callBack--'+value+'--活动剩余倒计时结束回调');
// if(this.endTime <= 0) return
// }
  },
  mounted() {
    var that = this
    var endYear = new Date().getFullYear();
    var endMonth = new Date().getMonth() + 1;
    var endDay = new Date().getDate();
    var endTime = new Date(endYear, endMonth, endDay);
    console.log(endMonth, endDay, endTime);

    function leftDiv() {
      console.log(this,"这个this");
      var Time = endTime - (new Date().getTime());
      that.Hours = addNumber(Math.floor(Time / 1000 / 60 / 60 % 24));

      that.Minutes = addNumber(Math.floor(Time / 1000 / 60 % 60));
      that.Seconds = addNumber(Math.floor(Time / 1000 % 60));

      if (Time > 0) {
        setTimeout(function () {
          leftDiv();
        }, 1000);
      } else {
        clearTimeout(leftDiv())
      }
    }
    leftDiv();

    function addNumber(num) {
      var num = (num > 9) ? num : ('0' + num);
      return num;
    }
  },
  components: {
    CountDown
},
}
</script>
<style lang="" scoped>
@import "../../assets/css/vfloors.css";

</style>