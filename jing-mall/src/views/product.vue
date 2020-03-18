<template>
  <div class="product">
    <product-param>
      <template v-slot:jing>
        <button class="btn">立即购买</button>
      </template>
    </product-param>
    <div class="jing">jingjing</div>
    <div class="jing">jingjing</div>
    <div class="jing">jingjing</div>
    <div class="jing">jingjing</div>
    <div class="jing">jingjing</div>
    <div class="jing">jingjing</div>
    <div class="jing">jingjing</div>
    <div class="jing">jingjing</div>
    <div class="jing">jingjing</div>
    <div class="jing">jingjing</div>
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
.product{
  .btn{
    margin-left: 10px;
  }
  .jing{
    height: 80px;
    background-color: chocolate;
  }
}

</style>
