<!--  -->
<template>
  <div>
    <nav-header></nav-header>
    <router-view />
    <order-footer></order-footer>
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader'
import OrderFooter from '../components/OrderFooter'
export default {
  // name: "order",
  components: {
    NavHeader,
    OrderFooter
  },
  data () {
    return {
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>
