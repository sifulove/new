<template lang="html">
  <div id="f_all">
     <img src={{msg}} alt="">
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:'./assets/img/3.jpg'
    }
  }
}
</script>

<style lang="css">
  #f_all{
    width: 100%;
    text-align: center;
  }
  #f_all img{width: 100%;max-width: 1200px;}
</style>
