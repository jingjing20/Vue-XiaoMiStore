import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'

const mock = true;
if(mock) {
  require('./mock/api')
}

// 根据前端的跨域方式做调整（这里是采用代理方式） vue.config.js配置 /api/a/b => /a/b
axios.defaults.baseURL = '/api';
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5e63a4eb1485282695c65ab7/mimall';
axios.defaults.timeout = 8000;

// 接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    window.location.href = '/#/login';
    // return Promise.reject(res);
  }else{
    alert(res.msg)
  }
})


Vue.config.productionTip = false

Vue.use(VueAxios,axios)
Vue.use(VueLazyload,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
