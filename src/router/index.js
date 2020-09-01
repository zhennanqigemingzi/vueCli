import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'/',
            meta: {title:'test'},
            component: ()=> import('../components/index.vue'),
            children:[
                {
                    path:'/editor',
                    meta:{title:'编辑'},
                    component: ()=> import('../components/editor/index.vue')
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

export default router