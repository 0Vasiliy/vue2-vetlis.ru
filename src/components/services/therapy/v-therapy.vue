<template>
    <div class="v-therapy">
        <div class="container">
           <div class="v-modul-block">
               <div class="v-modul-block-left">
                <h1 class="v-modul_title">Терапия</h1> 
                <div class="v-modul-subtitle">Терапия домашних животных – это диагностика и лечение заболеваний животных без хирургического вмешательства. Терапия (синоним: лечение) - процесс, целью которого является облегчение, снятие или устранение проявлений того или иного патологического состояния организма (нарушенного, ненормального), нормализация нарушенных процессов жизнедеятельности и выздоровление. Терапией также называют «все, что не хирургия», то есть методы нехирургического, или консервативного лечения заболеваний. Терапевтическое лечение может также проводиться до хирургического вмешательства (предоперационная терапия) и после операции - послеоперационная терапия.
                    <h2>Ветеринарная терапия – это лечение собак, кошек и других животных консервативными, медикаментозными или другими методами.</h2>
                </div>                                        
                <div class="row">
                    <router-link  tag="a" to="/vOthers" class="v-modul_block v-modul_item col-3 col"><span>Основные терапевтические услуги</span></router-link>                        
                    <router-link  tag="a" to="/vDiseases" class="v-modul_block v-modul_item col-3 col"><span>Болезни ушей</span></router-link>
                    <router-link  tag="a" to="/vStomach" class="v-modul_block v-modul_item col-3 col"><span>Болезни желудка и кишечника</span></router-link>
                    <router-link  tag="a" to="/vUrinary" class="v-modul_block v-modul_item col-3 col"><span>Болезни почек и мочевого пузыря</span></router-link>
                    <router-link  tag="a" to="/vRespiratorySystem" class="v-modul_block v-modul_item col-3 col"><span>Дыхательная система</span></router-link>
                    <router-link  tag="a" to="/vPancreas" class="v-modul_block v-modul_item col-3 col"><span>Болезни печени и поджелудочной железы</span></router-link>
                    <router-link  tag="a" to="/vInfection" class="v-modul_block v-modul_item col-3 col"><span>Инфекционные заболевания</span></router-link> 
                    <router-link  tag="a" to="/vUrolithiasis" class="v-modul_block v-modul_item col-3 col"><span>Мочекаменная болезнь</span></router-link>
                    <router-link  tag="a" to="/vParanal" class="v-modul_block v-modul_item col-3 col"><span>Воспаление параанальных желез</span></router-link>                        
                </div>
                <picture>
                        <source srcset="../../../assets/images/therapy/kot.webp" class="card-img-top r-img" type="image/webp">
                        <source srcset="../../../assets/images/therapy/kot.jpg" class="card-img-top r-img" type="image/jpeg"> 
                        <img src="../../../assets/images/therapy/kot.jpg" class="card-img-top r-img" alt="kot">
                    </picture>
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
    name: 'vTherapy',
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