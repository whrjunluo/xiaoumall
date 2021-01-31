<template>
  <div class="box">
      <router-view></router-view>
      <footer-nav></footer-nav>
  </div>
</template>

<script>

import footerNav from '../public/FooterNav' 

export default {
  data() {
    return {
    };
  },
 components : {
   footerNav
 }
};
</script>
<style lang="" scoped>

</style>