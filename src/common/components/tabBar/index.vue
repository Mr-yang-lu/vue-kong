<template>
  <div id="footer">
    <ul>
      <router-link tag="li" v-for="item in navs" :key="item.id" :to="item.path">
        <i class="iconfont icon" v-html="item.icon"></i>
        <span class="name">{{item.text}}</span>
      </router-link>
    </ul>
  </div>
</template>


<script>
export default {
  name: "TabBar",
  data() {
    return {
      navs: [
        {
          id: 0,
          text: "首页",
          icon: "&#xe6bd;",
          path: "/shouye"
        },
        {
          id: 1,
          text: "书店",
          icon: "&#xe8a6;",
          path: "/shudian"
        },
        {
          id: 2,
          text: "拍卖",
          icon: "&#xe63b;",
          path: "/paimai"
        },
        {
          id: 3,
          text: "购物车",
          icon: "&#xe67c;",
          path: "/gouwuche"
        },
        {
          id: 4,
          text: "我的",
          icon: "&#xe600;",
          path: "/wode"
        }
      ]
    };
  }
};
</script>

<style >
#footer {
  width: 100%;
  height:.52rem;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 1px solid #ccc;
}
#footer ul ,#footer ul li{
  display:flex;
  width: 100%;
  height:.52rem;
  
}
#foolter ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#foolter ul .router-link-active {
  color: #9e100e;
}
#foolter ul li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   /* color: #9e100e; */
  
}
.icon {
   width:.2rem;
  height:.2rem;
  padding-left:.3rem;
  text-align:center;
   /* color: #9e100e; */
}
.name {
  /* width:3rem;
  height:1.9rem; */
  /* margin-top:.8rem; */
  font-size:.17rem;
  margin-top:.3rem;
  margin-left:-.1rem;
   /* color: #9e100e; */
}
</style>