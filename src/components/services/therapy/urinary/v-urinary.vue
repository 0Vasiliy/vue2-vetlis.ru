<template>
    <div class="v-urinary">
        <div class="container">
           <div class="v-modul-block">
               <div class="v-modul-block-left">
                <h1 class="v-modul_title">Болезни почек и мочевого пузыря</h1> 
                <div class="v-modul-subtitle">
                    <h2>Распространенной проблемой является мочекаменная болезнь у котов. Камни в мочевом пузыре у кота доставляют ему много неприятностей и болевых ощущений. Мы предлагаем современные эффективные способы лечения этой болезни. Также наши врачи помогут вашему животному, если у него цистит или пиелонефрит. В нашей ветеринарной клинике можно сделать биохимический анализ крови для диагностики болезней почек.</h2>                  
                    <picture>
                        <source srcset="../../../../assets/images/therapy/urinary.webp" class="card-img-top r-img" type="image/webp">
                        <source srcset="../../../../assets/images/therapy/urinary.jpeg" class="card-img-top r-img" type="image/jpeg"> 
                        <img src="../../../../assets/images/therapy/urinary.jpeg" class="card-img-top r-img" alt="urinary">
                    </picture>
                    <h1>Болезни половой системы</h1>
                    <h2>В нашей ветеринарной клинике лечат эндометрит, венерическую саркому, аденому простаты, опухоли матки, опухоли семенников и другие заболевания половой сферы. У нас можно сделать УЗИ матки и яичников собакам и кошкам. Возможно удаление пиометры у кошек, пиометры у собак.Наши врачи осуществляют родовспоможение собакам и кошкам, в том числе мы занимаемся наблюдением и помощью при патологических родах. В нашей ветеринарной клинике проводится кесарево сечение собак и кошек.</h2>
                </div>                                        
                </div>               
                <v-contacts v-if="small"/>             
                <v-side v-else/>
            </div>            
        </div> 
    </div>
</template>

<script>
import resize from  '@/mixins/resize'
import vSide from '@/components/side/v-side.vue'
import vContacts from '@/components/contacts/v-contacts.vue'
export default {
    name: 'vUrinary',
    components: {
        vSide,
        vContacts,
    },
    mixins: [resize]
}
</script>
<style scoped lang="scss">
    @import '@/assets/css/modul.scss';
</style>