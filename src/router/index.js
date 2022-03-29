import Vue from 'vue'
import VueRouter from "vue-router";
import Login from '../components/Login.vue'
import Home from '../components/Admin/Home.vue'
import UserHome from '../components/User/UserHome.vue'
import ConfigureActivity from '../components/Admin/ConfigureActivity.vue'
import Detail from '../components/User/ProductDetail'
Vue.use(VueRouter)
const router =  new VueRouter({
    mode: "history",
    routes:[
        {
            path:'/',
            redirect:'/login'
        },
        {
            path:'/login', 
            component: Login
        },
        {
            path:'/adminHome', 
            component: Home, 
            redirect:'/admin', 
            children:[
            {
                path: '/admin', 
                component: ConfigureActivity
            }
        ]},
        {
            path:'/userHome', 
            component: UserHome, 
            redirect:'/Main', 
        },
        {
            path:'/Main',
            component:UserHome, 
        },
        {
            path:'/Detail',
            component:Detail
        }
    ]
})

// router.beforeEach((to,from,next) => {

// })

export default router