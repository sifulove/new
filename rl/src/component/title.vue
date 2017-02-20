<template lang="html">
  <h3 class="title_h">{{first}}<span>{{sec}}</span></h3>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  props:['first','sec']
}
</script>

<style lang="css">
   .title_h{
     font-size: 20px;
     text-align: left;
   }
   .title_h span{font-size: 15px;}
</style>
