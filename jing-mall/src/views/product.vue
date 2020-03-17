<template>
  <div>
    <product-param>
      <template v-slot:jing>
        <button class="btn">立即购买</button>
      </template>
    </product-param>
  </div>
</template>

<script>
import ProductParam from './../components/ProductParam';
export default {
  name: 'product',
  components:{
    ProductParam
  }
}
</script>

<style lang='scss' scoped>
.btn{
  margin-left: 10px;
}
</style>
