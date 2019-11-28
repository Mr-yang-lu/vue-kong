import Vue from "vue";
import VueRouter from "vue-router";
import shouye from "./shouye"
import shudian from "./shudian"
import paimai from "./paimai"
import gouwuche from "./gouwuche"
Vue.use(VueRouter);



const router=new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/shouye"
        },
        shouye,
        shudian,
        paimai,
        gouwuche,
    
        {
            path:"/wode",
            name:"wode",
            meta:{
                flag:true,
                requiredAuth:true
            },
            component:_=>import("@pages/wode")
        },
        {
            path:'/login',
            name:"login",
            component:_=>import("@pages/login"),
            meta:{
                flag:false,
            }
        }

    ]
})


router.beforeEach((to,from,next)=>{
    if(to.path !="/login" &&to.meta.requiredAuth){
         if(localStorage.getItem("token")){
             next();
         }else{
             next({name:"login",params:{to:to.path}})
         }
    }else{
        next();
    }
})

export default router;