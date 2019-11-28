import Vue from "vue"
import Header from "./header"


let componentMap=[
    Header
];


componentMap.forEach(item=>{
    Vue.component(item.name,item);
})