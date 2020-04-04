import Vue from 'vue'
import VueRouter from 'vue-router'

//引入文件优化
const path = require('path')
const files = require.context('@/views', false, /\.vue$/)
console.log(files)
const modules = {}
files.keys().forEach(key => {
    const name = path.basename(key, '.vue')
    modules[name] = files(key).default || files(key)
    console.log(name)
})
// console.log(modules)

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: modules.Home,
    redirect: '/index',
    children: [{
        path: '/index',
        name: 'index',
        component: modules.index
    },
    {
        path: '/product/:id',
        name: 'product',
        component: modules.product
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: modules.detail
    },
    ]
},
{
    path: '/register',
    name: 'register',
    component: modules.register
},
{
    path: '/login',
    name: 'login',
    component: modules.login
},
{
    path: '/cart',
    name: 'cart',
    component: modules.cart
},
{
    path: '/order',
    name: 'order',
    component: modules.order,
    children: [{
        path: 'list',
        name: 'order-list',
        component: modules.orderList
    },
    {
        path: 'confirm',
        name: 'order-confirm',
        component: modules.orderConfirm
    },
    {
        path: 'pay',
        name: 'order-pay',
        component: modules.orderPay
    },
    {
        path: 'alipay',
        name: 'alipay',
        component: modules.aliPay
    }
    ]
}
]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})
// router.beforeEach(async(to, from, next) => {
//     console.log('beforeEach', to, from)
//     next()
// })
// router.beforeResolve(async(to, from, next) => {
//     console.log('beforeResolve', to, from)
//     next()
// })
export default router