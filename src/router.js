import VueRouter from 'vue-router'
import vVomitingCats from '@/components/vetarticles/vomiting-cats/v-vomiting-cats.vue'
import vVomitingDogs from '@/components/vetarticles/vomiting-dogs/v-vomiting-dogs.vue'
import vPets from '@/components/vetarticles/pets/v-pets.vue'
import vMain from '@/components/v-main.vue'
import vTherapy from '@/components/services/therapy/v-therapy.vue'
import vRespiratorySystem from '@/components/services/therapy/respiratory-system/v-respiratory-system.vue'
import vDiseases from '@/components/services/therapy/diseases/v-diseases.vue'

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
        {
            path: '/vTherapy',
            component: vTherapy,
           
        },
        {
            path: '/vRespiratorySystem',
            component: vRespiratorySystem,
           
        },
        {
            path: '/vDiseases',
            component: vDiseases,
           
        },
    ],
    mode: 'history',
    base:"/",
})
