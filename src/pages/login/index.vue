<template>
  <div>
    <div class="header">
        
      <!-- <i class="iconfont">&#xe6a1;</i> -->
      <p>登录</p>
    </div>
    <div class="login_from">
        <div class="clearfix">
            <input type="text" autocomplete="off" placeholder="请输入用户名/手机号/邮箱" name="user" class="name">
        </div>
        <div class="clearfix">
            <input type="password" placeholder="请输入密码" name="password" class="name">
        </div>
        <div class="forget_pd">
            <a href=" " class="forget_pd_to">忘记密码?</a>
        </div>
        <div class="btn btn_gry">登录</div>
    </div>

      <div class="link_to">
        <a href="" class="ins">短信验证码登录</a>
        <a href="" class="register">注册</a>
    </div>
    <div class="other_login">
        <div class="other-way-login">
            <span class="line"></span>
            <span class="txt">使用社交账号登录</span>
            <span class="line"></span>
        </div>
        <div class="icon">
            <a href=""><img src="https://login.kongfz.com/mobile/images/login/QQ.png" alt=""></a>
            <a href=""><img src="https://login.kongfz.com/mobile/images/login/weibo.png" alt=""></a>
            <a href=""><img src="https://login.kongfz.com/mobile/images/login/weixin.png" alt=""></a>
        </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "login"
};
</script>

<style lang="scss">
.header {
  height: 0.52rem;
  p {
    width: 0.36rem;
    height: 0.2rem;
    font-size: 0.18rem;
  }
  i {
    line-height: 0.5rem;
    position: absolute;
    left:.2rem;
  }
}


.login_from{
    height:2.14rem;
}
.login_from .clearfix{
    width:3.15rem;
    display: inline-block;
    line-height: 0.40rem; 
    font-size: 0.32rem;
    text-indent: .1rem;
    box-sizing: border-box;
    
}
.login_from .clearfix .name{
    width:3.15rem;
    height:.52rem;
    border:none;
    margin-left:.2rem;
    margin-top:.1rem;
    border-bottom: 1px solid #EAEAEA;
}

.login_from .forget_pd{
    width: 84%;
    height: 0.28rem;
    line-height:.1rem;
    margin: 0 auto;
    text-align: right;
    padding-top: 0.16rem;
}
.login_from .forget_pd .forget_pd_to a{
    font-size: 0.26rem;
    color: #999999;
}
.login_from .btn{ 
    width: 84%;
    height: 0.47rem;
    line-height: 0.47rem;
    margin: 0 auto;
    text-align: center;
    border-radius: 0.08rem;
    margin-top: 0.1rem;
    font-size: 0.18rem;
    color: #fff;
}
.login_from .btn_gry{
    background: #C7C7C7;
}



.link_to{
    height:.37rem;
}
.link_to .ins{
    float: left;
    font-size: 0.26rem;
    color: #666666;
    font-size:.12rem;
    line-height:.37rem;
    margin-left:.1rem;
}
.link_to .register{
    float: right;
    font-size: 0.26rem;
    color: #666666;
    font-size:.12rem;
    margin-right:.1rem;
    line-height:.37rem;
}



.other_login{
    height:1.24rem;
    margin-top:.5rem;
}
.other_login .other-way-login {
    height:.1rem;
    line-height: .3rem;
    font-size: .12rem;
    text-align: center;
    
}
.other-way-login .line {
    display: inline-block;
    width: 1rem;
    border: 1px solid #EAEAEA;
}
.other-way-login .txt {
    color: black;
    vertical-align: middle;
    vertical-align: -20%;
    margin: 0 .1rem;
}
.other_login .icon{
    height:1.1rem;
    margin-top:.5rem;
    display:flex;
     justify-content: space-between;
    align-items:center;
}
.other_login .icon a{
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0;
    margin: 0.8rem 0.15rem;
    
}
.other_login .icon a img {
    width:.3rem;
    height:.3rem;
    // margin-top:.1rem;
    margin-left:.36rem;
}
</style>
