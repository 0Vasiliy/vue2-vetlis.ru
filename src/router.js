import VueRouter from 'vue-router'
import vVomitingCats from '@/components/vetarticles/vomiting-cats/v-vomiting-cats.vue'
import vVomitingDogs from '@/components/vetarticles/vomiting-dogs/v-vomiting-dogs.vue'
import vPets from '@/components/vetarticles/pets/v-pets.vue'
import vMain from '@/components/v-main.vue'
import vTherapy from '@/components/services/therapy/v-therapy.vue'
import vRespiratorySystem from '@/components/services/therapy/respiratory-system/v-respiratory-system.vue'
import vDiseases from '@/components/services/therapy/diseases/v-diseases.vue'
import vStomach from '@/components/services/therapy/stomach/v-stomach.vue'
import vUrinary from '@/components/services/therapy/urinary/v-urinary.vue'
import vPancreas from '@/components/services/therapy/pancreas/v-pancreas.vue'
import vInfection from '@/components/services/therapy/infection/v-infection.vue'
import vTeeth from '@/components/services/teeth/v-teeth.vue'
import vUzi from '@/components/services/uzi/v-uzi.vue'

export default new VueRouter({
    mode: 'history',
    base:"/",
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
        {
            path: '/vStomach',
            component: vStomach,          
        },
        {
            path: '/vUrinary',
            component: vUrinary,           
        },
        {
            path: '/vPancreas',
            component: vPancreas,          
        },
        {
            path: '/vInfection',
            component: vInfection,          
        },
        {
            path: '/vTeeth',
            component: vTeeth,          
        },
        {
            path: '/vUzi',
            component: vUzi,          
        },
    ],
})
