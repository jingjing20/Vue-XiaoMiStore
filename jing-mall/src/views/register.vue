<!--  -->
<template>
  <div class="register">
    <div class="wrapper">
      <div class="wrap">
        <div class="logo">
          <a class="mlogo" href="javascript:;"></a>
        </div>
        <div class="title">
          <span class="title-font">注册小米帐号</span>
        </div>
        <div class="regbox">
          <div class="input">
            <input type="text" v-model="username" placeholder="用户名">
          </div>
          <div class="input">
            <input type="password" v-model="password" placeholder="密码">
          </div>
          <div class="input">
            <input type="email" v-model="email" placeholder="邮箱">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="register">立即注册</a>
          </div>
        </div>
        <div class="privacy_box">
          <div class="msg">
            <span>
              注册代表您已同意
              <a href="https://cn.account.xiaomi.com/about/protocol/agreement">小米用户协议</a>
              和
              <a href="https://cn.account.xiaomi.com/about/protocol/privacy">隐私政策</a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="foot">
      <ul>
        <li>简体</li> |
        <li>繁体</li> |
        <li>意见建议</li> |
        <li>婧婧</li>
      </ul>
    </div>
    <div class="foot-botton">
      <span>小米公司版权所有-京ICP备10046444-
        <a class="beianlink beian-record-link" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134">
        京公网安备11010802020134号</a>-京ICP证110507号
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username:'',
      password:'',
      email:''
    }
  },
  methods: {
    register(){
      this.axios.post('/user/register',{
        username:this.username,
        password:this.password,
        email:this.email
      }).then(()=>{
        this.$router.push('/index')
        this.$message.success('注册成功');
      })
    }
  },
}
</script>

<style lang='scss'>
.register{
  .wrapper{
    width: 100%;
    min-height: 100%;
    height: auto;
    display: -webkit-box;
    background: #f6f6f6;
    .wrap{
      position: relative;
      margin-right: auto;
      margin-left: auto;
      margin-top: 50px;
      width: 854px;
      height: 558px;
      background: #ffffff;
      .logo{
        padding-bottom: 40px;
        .mlogo{
          margin-top: 50px;
          width: 49px;
          height: 48px;
          margin: 0 auto;
          display: block;
          cursor: default;
          background-image: url(https://account.xiaomi.com/static/res/349d9c1/account-static/respassport/acc-2014/img/milogo.png);
        }
      }
      .title{
        text-align: center;
        font-size: 30px;
      }
      .regbox{
        box-sizing: border-box;
        width: 332px;
        height: 306px;
        padding: 30px 0;
        line-height: 20px;
        margin: 0 auto;
        font-size: 16px;
        .input{
          text-align: center;
          display:inline-block;
          width:100%;
          height:40px;
          border:1px solid #E5E5E5;
          margin-bottom:20px;
          input{
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn-box{
          text-align: center;
          .btn{
            width:80%;
            line-height:40px;
            margin-top:10px;
            font-size:16px;
          }
        }
      }
      .privacy_box{
        text-align: center;
        padding-top: 40px;
      }
      .msg{
        font-size: 14px;
        color: #9d9d9d;
        a{
          color: black;
          font-weight: bold;
        }
      }
    }
  }
  .foot{
    width: 100%;
    display: flex;
    background: #f6f6f6;
    color: #9d9d9d;
    font-size: 14px;
    height: 80px;
    ul{
      margin: auto;
      li{
        display: inline-block;
        margin-left: 10px;
      }
    }

  }
  .foot-botton{
    background: #f6f6f6;
    text-align: center;
    padding: 9px;
  }
}
</style>
