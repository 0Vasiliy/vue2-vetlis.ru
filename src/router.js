import VueRouter from 'vue-router'
import vVomitingCats from '@/components/vetarticles/vomiting-cats/v-vomiting-cats.vue'
import vVomitingDogs from '@/components/vetarticles/vomiting-dogs/v-vomiting-dogs.vue'
import vPets from '@/components/vetarticles/pets/v-pets.vue'
import vMain from '@/components/v-main.vue'


export default new VueRouter({
    routes:[   
        {
            path: '/',
            component: vMain,
        },    
        {
            path: '/vVomitingCats',
            component: vVomitingCats,
           
        },
        {
            path: '/vVomitingDogs',
            component: vVomitingDogs,
           
        },
        {
            path: '/vPets',
            component: vPets,
           
        },
    ],
    mode: 'history',
    base:"/",
})
