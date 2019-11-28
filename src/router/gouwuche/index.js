export default {
    path: "/gouwuche",
    component: _ => import("@pages/gouwuche"),
    name: "gouwuche",
    meta:{
        flag:true,
        requiredAuth:true
    },
}