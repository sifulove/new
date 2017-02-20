<template lang="html">
  <div id="two">
     <h1> anothor page</h1>
     <ul>
       <li v-for="article in articles">
         {{article.title}}
       </li>
     </ul>
     <a href="#">write by{{msg}}</a>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:'small chiken',
      articles:[]
    }
  },
  mounted:function(){
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{},{
      headers:{

      },
      emulateJSON:true
    }).then(function(res){
      //这里处理正常的回调
      console.log(res.data.subjects)
      this.articles=res.data.subjects
    },function(res){
      //这里处理错误的回调
      console.log(res)
    });
    }
  }
</script>

<style lang="css">
</style>
