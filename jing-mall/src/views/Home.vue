<template>
  <div>
    <nav-header></nav-header>
    <router-view />
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'
export default {
  components: {
    NavHeader,
    NavFooter
  },
  data () {
    return {
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
