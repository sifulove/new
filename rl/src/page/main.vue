<template lang="html">
    <div class="">
          <message></message>
          <man></man>
    </div>
</template>

<script>
import man from '../component/each.vue'
import message from '../component/active.vue'
  export default{
    data(){
      return{
        msg:'hello vue!'
      }
    },
    components:{man,message}
  }
</script>
<style lang="css">
</style>
