export default {
    path: "/paimai",
    component: _=> import("@pages/paimai"),
    name:"paimai",
    meta:{
        flag:true,
        requiredAuth:false
    }
}