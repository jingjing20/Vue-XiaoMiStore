<template>
  <div>
    <order-header title="加入购物车">
      <template v-slot:tip>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </template>
    </order-header>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader';
import ServiceBar from './../components/ServiceBar';
import NavFooter from './../components/NavFooter';
export default {
  name: 'cart',
  components: {
    OrderHeader,
    ServiceBar,
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
