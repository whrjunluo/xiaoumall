<template>
  <div class="floor2">
    <div class="titles">
      <div :class="['title',item.keys,{'current':current == item.id}]" v-for="item in titles" :key="item.keys">
        {{item.titleName}}
      </div>
    </div>
    <div class="content">
      <div class="con-item" v-for="ite in content.title1" :key="ite.imgUrl">
        <img :src="ite.imgUrl" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current:1,
      titles:[
        {
          id: 1,
          keys:"title1",
          titleName:"双11尖货预购"
        },
        {
          id: 2,
          keys:"title2",
          titleName:"畅购全球"
        },
      ],
      content:{
        title1:[{
          id:1,
          imgUrl:require("../../assets/images/pic/commodity/01.png")
        },{
          id:2,
          imgUrl:require("../../assets/images/pic/commodity/02.png")
        },{
          id:3,
          imgUrl:require("../../assets/images/pic/commodity/03.png")
        },{
          id:4,
          imgUrl:require("../../assets/images/pic/commodity/04.png")
        },
        ],
        title2:{}
      }
    }
  },
  methods: {
   
  },
  mounted() {
    
  },
}
</script>
<style lang="" scoped>
  @import "../../assets/css/vfloors.css";

</style>