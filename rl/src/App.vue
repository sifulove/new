<template>
  <div id="app">
     <headnav></headnav>
     <!-- <manpage><manpage> -->
     <router-view class="view"> </router-view>
  </div>
</template>

<script>
import headnav from './component/headnav.vue'
import manpage from './page/main.vue'
export default{
 data(){
   return{
     msg:'hello vue!'
   }
 },
 components:{headnav,manpage}
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
