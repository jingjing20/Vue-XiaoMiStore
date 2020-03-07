<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import storage from './storage/index';
export default {
  data() {
    return {
      res: {}
    }
  },
  mounted() {
    // storage.setItem("hao",520,"user01")
    // storage.clear("hao","user01")
    // storage.clear("hao")
    // storage.setItem("username","haohao","user01")

    // 1、本地加载请求静态json文件
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res
    // })
    // 2、通过easy-mock平台实现数据mock
    // this.axios.get('/user/login').then((res) => {
    //   this.res = res
    // })
    // 3、本地集成mockjs
    this.axios.get('/user/login').then((res) => {
      this.res = res
    })
  },
  created() {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
