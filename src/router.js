import VueRouter from 'vue-router'
import vVomitingCats from '@/components/vetarticles/vomiting-cats/v-vomiting-cats.vue'
// import vMain from '@/components/v-main.vue'
import App from './App.vue';

export default new VueRouter({
    routes:[   
        {
            path: '/',
            component: App,
        },    
        {
            path: '/vVomitingCats',
            component: vVomitingCats,
           
        },
    ],
    mode: 'history',
    base:"/",
})
