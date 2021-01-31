<template>
  <div>
    <div class="headerTop">
      <h2>分类</h2>
    </div>
    <div class="search">
      <input type="text" class="iconfont" :placeholder="seachPlaceholder" />
    </div>
    <div class="content">
      <div class="leftList">
        <ul>
          <li
            :class="index == checkedCart ? 'checked' : ''"
            v-for="(item, index) in cateTree"
            :key="item.id"
            @click="changeCart(index)"
          >
            {{ item.catename }}
          </li>
        </ul>
      </div>
      <div class="rightCart">
        <!-- <ul> -->
          <div :class="checkedCart==index?'checkedCar cart ':'cart'"  v-for="(item, index) in cateTree" :key="index" >
            <div v-if="!item.children" class="blankSpace">
               <h2> 此处无分类呦</h2>
            </div>
            <ul>
              <li v-for="list in item.children" :key="list.id" @click="toList(list.id)">
                <img :src="list.img?$imgUrl+list.img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2328001805,913218463&fm=26&gp=0.jpg'" alt="" />
                <p>{{list.catename}}</p>
              </li>            
            </ul>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCateTree } from "../util/axios";
export default {
  data() {
    return {
      seachPlaceholder: "\ue661 按内容搜索",
      cateTree: [],
      checkedCart: 0,
    };
  },
  mounted() {
    getCateTree().then((res) => {
      if (res.data.code === 200) {
        this.cateTree = res.data.list;
      }
      console.log(res.data);
    });
  },
  methods: {
    changeCart(idx) {
      this.checkedCart = idx;
    },
    toList(id){
      this.$router.push('/list?id='+id)
    }
  },
};
</script>

<style lang="" scoped>
@import "../assets/css/classify.css";
</style>