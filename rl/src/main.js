import Vue from 'vue/dist/vue.js';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
//开启debug模式
Vue.config.debug=true;
Vue.use(VueRouter);
Vue.use(VueResource);
//定义组件
// const First={template:'<div><h2>第一个页面</h2></div>'}
import first from './page/main.vue'
import two from './page/two.vue'
// import two from './component/two.vue'
// import two from './component/two.vue'
//创建一个路由器实例并配置规则
const router =new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {
      path:'/first',
      component:first
    },
    {
      path:'/two',
      component:two
    }
  ]
})
//路由器会创建一个APP实例，并挂载带#app匹配的元素上。
const app=new Vue({
  router:router,
  render:h=>h(App)
}).$mount('#app')
