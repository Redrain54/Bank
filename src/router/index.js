import Vue from 'vue'
import VueRouter from "vue-router";
import Login from '../components/Login.vue'
import Home from '../components/Admin/Home.vue'
// import Admin from '../components/Admin/Admin.vue'
Vue.use(VueRouter)
const router =  new VueRouter({
    mode: "history",
    routes:[
        {path:'/',redirect:'/login'},
        {path:'/login', component: Login},
        {path:'/adminHome', component: Home, redirect:'/admin', 
         children:[
            {path: '/admin', component: Home}
        ]}
    ]
})

// router.beforeEach((to,from,next) => {

// })

export default router