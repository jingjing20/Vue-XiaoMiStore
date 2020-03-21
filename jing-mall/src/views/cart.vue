<template>
  <div class="cart">
    <order-header title="加入购物车">
      <template v-slot:tip>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="cart-box">
          <ul class="cart-item-head">
            <li class="col-1">
              <span class="checkbox checked"></span>
              全选
            </li>
            <li class="col-3">商品名称</li>
            <li class="col-1">单价</li>
            <li class="col-2">数量</li>
            <li class="col-1">小计</li>
            <li class="col-1">操作</li>
          </ul>
          <ul class="cart-item-item"></ul>
        </div>
      </div>
    </div>
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

<style lang='scss'>
.cart{
  .wrapper{
    background-color: #F5F5F5;
    padding-top: 30px;
    padding-bottom: 114px;
    .cart-box{
      background-color: #fff;
      font-size: 14px;
      color: #999999;
      text-align: center;
      .cart-item-head{
        display:flex;
        height: 79px;
        line-height: 79px;
        .col-1{
          flex:1;
        }
        .col-2{
          flex:2;
        }
        .col-3{
          flex:3;
        }
      }
      .checkbox{
        display: inline-block;
        width: 22px;
        height: 22px;
        border: 1px solid #E5E5E5;
        vertical-align: middle;
        margin-right: 16px;
        cursor:pointer;
      }
    }
  }
}
</style>
