
<template lang="html">
  <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/first">Dashboard</router-link></li>
            <li><router-link to="/two">Settings</router-link></li>
            <li><router-link to="/three">Profile</router-link></li>
            <li><router-link to="/login">{{user}}</router-link></li>
          </ul>
        </div>
      </div>
  </nav>
</template>

<script>
export default {
  data(){
    return{
      user:''
    }
  },
  mounted:function(){
    var user_coo=Cookie.getCookie('user_coo');
    user_coo?this.user=user_coo:this.user='未登录';
  }
}
</script>
<style lang="css">
@import '/css/bootstrap.min.css';
</style>
