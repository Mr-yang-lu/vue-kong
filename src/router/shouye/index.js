export default {
    path: "/shouye",
    component: _=> import("@pages/shouye"),
    name:"shouye",
    meta:{
        flag:true,
        requiredAuth:false
    }
}