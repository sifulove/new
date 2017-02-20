<template lang="html">
   <div class="container">
      <div class="row">
          <div class="mem_title col-md-12">
                <div class="rotate">
                      <div class="each">
                         <div class="f_o">
                           <img src="../assets/img/logo.png" alt="">
                           <span>name</span>
                         </div>
                         <div class="line"></div>
                      </div>
                      <div class="each">
                         <div class="f_o">
                           <img src="../assets/img/logo.png" alt="">
                           <span>name</span>
                         </div>
                         <div class="line"></div>
                      </div>
                      <div class="each">
                         <div class="f_o">
                           <img src="../assets/img/logo.png" alt="">
                           <span>name</span>
                         </div>
                         <div class="line"></div>
                      </div>
                      <div class="center">
                        <img src="../assets/img/3.jpg" alt="">
                      </div>
                </div>
          </div>
          <div class="container">

              <div class="row">
                <div class="col-xs-2">
                        <div class="mem">

                        </div>
                </div>
                <div class="col-xs-2">
                        <div class="mem">

                        </div>
                </div>

            </div>
          </div>
      </div>
   </div>
</template>

<script>
export default {
  data(){
    return{}
  },
  mounted:function(){
    var n1=0;
    $('.each').eq(0).css({transform:'rotateZ(0deg)'});
    $('.each').eq(1).css({transform:'rotateZ(120deg)'})
    $('.each').eq(2).css({transform:'rotateZ(240deg)'})
    clearInterval(window.time)
    window.time=setInterval(function(){
            n1++;
            $('.each').eq(0).css({transform:'rotateZ('+n1+'deg)'});
            $('.each').eq(1).css({transform:'rotateZ('+(n1+120)+'deg)'})
            $('.each').eq(2).css({transform:'rotateZ('+(n1+240)+'deg)'})
    },20)
  }
}
</script>

<style lang="css">
   .rotate{position: releative;background: #e8e8e8;height: 600px;}
   .center{
      width: 170px;height: 170px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -85px;
      margin-left: -85px;

   }
   .center img{width: 100%;height: 100%;}
   .each img{
        width: 100%;height: 80%;
   }
   .each{
      width: 120px;height: 100px;
      position: absolute;
      top: 50px;;
      left: 50%;
      margin-left: -60px;
      transform-origin: center 240px;
      transform: rotateZ(50deg);
   }
   .each .f_o {
     border-radius: 50%;
     height: 80px;
     width: 120px;
     overflow: hidden;
     background: #fff;
     position: relative;
     z-index: 100;
   }
   .line{
     height: 150px;width: 20px;background: red;
     margin: -20px auto;
   }
   .mem{
     width: 50%;
     background: red;
     height: 100px;
   }

</style>
