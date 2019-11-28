export default {
    path: "/shudian",
    component: _ => import("@pages/shudian"),
    name:"shudian",
    meta:{
        flag:true,
        requiredAuth:false
    }
}