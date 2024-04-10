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
import vLab from '@/components/services/lab/v-lab.vue'
import vStom from '@/components/services/stom/v-stom.vue'
import vKardio from '@/components/services/kardio/v-kardio.vue'
import vVaccination from '@/components/services/vaccination-chip/vaccination/v-vaccination.vue'
import vChip from '@/components/services/vaccination-chip/chip/v-chip.vue'
import vVaccinationChip from '@/components/services/vaccination-chip/v-vaccination-chip.vue'
import vDerma from '@/components/services/derma/v-derma.vue'
import vSterilization from '@/components/services/sterilization/v-sterilization.vue'
import vEye from '@/components/services/eye/v-eye.vue'
import vUrolithiasis from '@/components/services/therapy/urolithiasis/v-urolithiasis.vue'
import vParanal from '@/components/services/therapy/paranal/v-paranal.vue'
import vOthers from '@/components/services/therapy/others/v-others.vue'
import vRodents  from '@/components/services/rodents/v-rodents.vue'
import vSurgery  from '@/components/services/surgery/v-surgery.vue'
import vUrine  from '@/components/recommendations/urine/v-urine.vue'
import vRehabilitation  from '@/components/recommendations/rehabilitation/v-rehabilitation.vue'
import vDrip  from '@/components/recommendations/drip/v-drip.vue'
import vOrnitolog  from '@/components/services/ornitolog/v-ornitolog.vue'
import vCarouselMain from '@/components/slider/v-Carousel-main.vue'

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
            component: vUzi         
        },
        {
            path: '/vLab',
            component: vLab         
        },
        {
            path: '/vStom',
            component: vStom         
        },
        {
            path: '/vKardio',
            component: vKardio         
        },
        {
            path: '/vVaccination',
            component: vVaccination         
        },
        {
            path: '/vChip',
            component: vChip        
        },
        {
            path: '/vVaccinationChip',
            component: vVaccinationChip        
        },
        {
            path: '/vDerma',
            component: vDerma        
        },
        {
            path: '/vSterilization',
            component: vSterilization      
        },
        {
            path: '/vEye',
            component: vEye      
        },
        {
            path: '/vUrolithiasis',
            component: vUrolithiasis      
        },
        {
            path: '/vParanal',
            component: vParanal     
        },
        {
            path: '/vOthers',
            component: vOthers    
        },
        {
            path: '/vRodents',
            component: vRodents    
        },
        {
            path: '/vSurgery',
            component: vSurgery    
        },
        {
            path: '/vUrine',
            component: vUrine    
        },
        {
            path: '/vRehabilitation',
            component: vRehabilitation   
        },
        {
            path: '/vDrip',
            component: vDrip   
        },
        {
            path: '/vOrnitolog',
            component: vOrnitolog   
        },
        {
            path: '/vCarouselMain',
            component: vCarouselMain   
        },
        
    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
      }
})

