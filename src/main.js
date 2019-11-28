import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import "@common/components"
import VueTouch from "vue-touch";

Vue.use(VueTouch,{name:"v-touch"})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
