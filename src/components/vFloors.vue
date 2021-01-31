<template>
  <div class="floors">
    <v-floor1></v-floor1>
    <v-floor2></v-floor2>
  </div>
</template>
<script>
import vFloor1 from './vfloors/vFloor1'
import vFloor2 from './vfloors/vFloor2'
export default {
  data() {
    return {
      
    }
  },
  components:{
    vFloor1,
    vFloor2
  },
  methods: {
   
  },
  mounted() {
    
  },
}
</script>
<style lang="" scoped>
@import "../assets/css/vfloors.css";
</style>