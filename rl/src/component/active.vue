<template lang="html">
  <div class="active">
      <!-- <h3>新鲜事</h3> -->
      <htitle first="新" sec="鲜事"></htitle>
      <div class="top">
        <i>置顶</i>
        <div class="news">
        </div>
      </div>
      <div class="new">
        <div class="time">
           <div class="point"></div>
        </div>
        <div class="news">
           <div class="img">
                <img :src='src' alt="">
           </div>
           <div class="img_left">
             <h3>title</h3>
             <div class="biaoqian">
               <span v-bind:style="{backgroundColor:val()}">表情</span><span v-bind:style="{backgroundColor:val()}">标签</span><span v-bind:style="{backgroundColor:val()}">标签</span><span v-bind:style="{backgroundColor:val()}">标签</span>
             </div>
           </div>


        </div>
      </div>
  </div>
</template>

<script>
import htitle from '../component/title.vue'
export default {
  data(){
    return{
      val:function(){
        var a=Math.floor(Math.random()*200)+55;
        var b=Math.floor(Math.random()*200)+55;
        var c=Math.floor(Math.random()*200)+55;
        return  'rgb('+a+','+b+','+c+')';
      },
      src:'./src/assets/img/3.jpg'
    }
  },
  components:{htitle}
}
</script>

<style lang="css">

    i{position: absolute;}
   .active{width: 80%;margin: 0 auto;}
   .active .img img{
     width: 90%;
   }
   .active .img{
     display: inline-block;
     width: 30%;
     vertical-align: bottom;
   }
   .active .img_left{
     display: inline-block;
     width: 69%;
     text-align: left;
   }
   .active .img_left h3{
     height: 100px;
     margin: 0;
   }
   .time{
     position: relative;
     height: 10px;
     background:#00BCD4;
     margin: 0 auto;
     margin-bottom: 20px;
     border-radius: 20px;
   }
   .biaoqian span{
     background: red;display: inline-block;width: 50px;height: 20px;font-size: 13px;line-height: 20px;font-weight: 600;text-align: center;border-radius: 3px;color:#fff;margin-right: 3px;
   }
   .point{border-radius: 50%;width: 20px;height: 24px;background: red;position: absolute;top: -6px;left: 0;}
</style>
