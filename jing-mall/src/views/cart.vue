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
            <li class="col-1"><span class="checkbox" v-bind:class="{'checked':allChecked}" @click="toggleAll"></span>全选</li>
            <li class="col-3">商品名称</li>
            <li class="col-1">单价</li>
            <li class="col-2">数量</li>
            <li class="col-1">小计</li>
            <li class="col-1">操作</li>
          </ul>
          <ul class="cart-item-list">
            <li class="cart-item" v-for="(item, index) in list" :key="index">
              <div class="item-check">
                <span class="checkbox" v-bind:class="{'checked':item.productSelected}"  @click="updateCart(item)"></span>
              </div>
              <div class="item-name">
                <img v-lazy="item.productMainImage" alt="">
                <span>{{item.productName + ' , ' + item.productSubtitle}}</span>
              </div>
              <div class="item-price">{{item.productPrice}}</div>
              <div class="item-num">
                <div class="num-box">
                  <a href="javascript:;" @click="updateCart(item,'-')">-</a>
                  <span>{{item.quantity}}</span>
                  <a href="javascript:;"  @click="updateCart(item,'+')">+</a>
                </div>
              </div>
              <div class="item-total">{{item.productTotalPrice}}</div>
              <div class="item-del">
                <el-button type="danger" icon="el-icon-delete" @click="ondel(item)"></el-button>
              </div>

              <el-dialog title="提示" :visible.sync="dialogVisible" center top="20vh" width="30%">
                <span>确认删除此商品吗？</span>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="delProduct">确 定</el-button>
                </span>
              </el-dialog>

            </li>
          </ul>
        </div>
        <div class="order-wrap clearfix">
          <div class="cart-tip fl">
            <a href="/#/index">继续购物</a>
            共<span>{{list.length}}</span>件商品，已选择<span>{{checkedNum}}</span>件
          </div>
          <div class="total fr">
            合计：<span>{{cartTotalPrice}}</span>元
            <a href="javascript:;" class="btn" @click="order">去结算</a>
          </div>
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
      list:[],//商品列表
      allChecked:false,//是否全选
      cartTotalPrice:0,//商品总金额
      checkedNum:0,//选中商品数量
      dialogVisible: false,
      jing:{}
    }
  },
  mounted(){
    this.getCartList();
  },
  methods:{
    // 获取购物车列表
    getCartList(){
      this.axios.get('/carts').then((res)=>{
        this.renderData(res);
      })
    },
    // 更新购物车数量和购物车单选状态
    updateCart(item,type){
      let quantity = item.quantity,
          selected = item.productSelected;
      if(type == '-'){
        if(quantity == 1){
          this.ondel(item)
          return;
        }
        --quantity;
      }else if(type == '+'){
        if(quantity > item.productStock){
          this.$message.warning('购买数量不能超过库存数量');
          return;
        }
        ++quantity;
      }else{
        selected = !item.productSelected;
      }
      this.axios.put(`/carts/${item.productId}`,{
        quantity,
        selected
      }).then((res)=>{
        this.renderData(res);
      })
    },
    ondel(item) {
      this.dialogVisible = true
      this.jing = item
    },
    // 删除购物车商品
    delProduct(){
      this.dialogVisible = false
      this.axios.delete(`/carts/${this.jing.productId}`).then((res)=>{
        this.$message.success('删除成功');
        this.renderData(res);
      });
    },
    // 控制全选功能
    toggleAll(){
      let url = this.allChecked?'/carts/unSelectAll':'/carts/selectAll';
      this.axios.put(url).then((res)=>{
        this.renderData(res);
      })
    },
    // 公共赋值
    renderData(res){
      this.list = res.cartProductVoList || [];
      this.allChecked = res.selectedAll;
      this.cartTotalPrice = res.cartTotalPrice;
      this.checkedNum = this.list.filter(item=>item.productSelected).length;
    },
    // 购物车下单
    order(){
      let isCheck = this.list.every(item=>!item.productSelected);
      if(isCheck){
        this.$message.warning('请选择一件商品');
      }else{
        this.$router.push('/order/confirm');
      }
    }
  },
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
        &.checked{
          background:url('/imgs/icon-gou.png') #FF6600 no-repeat center;
          background-size:16px 12px;
          border:none;
        }
      }
      .cart-item-list{
        .cart-item{
          display:flex;
          align-items:center;
          height:125px;
          border-top:1px solid #E5E5E5;
          font-size:16px;
          .item-check{
            flex:1;
          }
          .item-name{
            flex:3;
            font-size: 18px;
            color: #333333;
            display: flex;
            align-items: center;
            img{
              width:80px;
              height:80px;
              vertical-align:middle;
            }
            span{
              margin-left: 30px;
            }
          }
          .item-price{
            flex:1;
            color:#333333;
          }
          .item-num{
            flex:2;
            .num-box{
              display:inline-block;
              width:150px;
              height:40px;
              line-height:40px;
              border:1px solid #E5E5E5;
              font-size:14px;
              a{
                display:inline-block;
                width:50px;
                color:#333333;
              }
              span{
                display:inline-block;
                width:50px;
                color:#333333;
              }
            }
          }
          .item-total{
            flex:1;
            color:#FF6600;
          }
          .item-del{
            flex:1;
          }
        }
      }
    }
    .order-wrap{
      font-size:14px;
      color: #666666;
      margin-top: 20px;
      height: 50px;
      line-height: 50px;
      .cart-tip{
        margin-left: 29px;
        a{
          color: #666666;
          margin-right:37px;
        }
        span{
          color:#FF6600;
          margin:0 5px;
        }
      }
      .total{
        font-size:14px;
        color:#FF6600;
        span{
          font-size:24px;
        }
        a{
          width:202px;
          height:50px;
          line-height:50px;
          font-size:18px;
          margin-left:37px;
        }
      }
    }
  }
}
</style>
