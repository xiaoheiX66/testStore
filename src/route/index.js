import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from '../views/Goods.vue'
import Cart from '../views/Cart.vue'
import Cate from '../views/Cate.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Mine from '../views/Mine.vue'
import Search from '../views/Search.vue'
// 2.安装路由插件
Vue.use(VueRouter)
// 3.实例化路由,并配置参数;
const router = new VueRouter({
    routes: [
        // 当浏览器地址为home时，渲染Home组件的内容
        {
            path: '/home',
            component: Home
        },
        {
            path: '/cate',
            component: Cate
        },
        {
            path: '/cart',
            component: Cart
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/goods/:id',
            component: Goods,
            name: 'Goods',
        },
        {
            path: '/mine',
            component: Mine,
        },
        {
            path: '/search',
            component: Search
        },
    ]
});

export default router;