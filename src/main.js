import Vue from 'vue'
import App from './App.vue'
// 1.引入vue-router
import Vant from 'vant'
import 'vant/lib/index.css'
import router from './route'

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  // 4.把路由实例注入Vue
  router:router,
  render: h => h(App),
}).$mount('#app')
