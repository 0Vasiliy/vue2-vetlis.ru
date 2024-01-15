<template>
    <div class="v-therapy">
        <div class="container">
           <div class="v-modul-block">
               <div class="v-modul-block-left">
                <h1 class="v-modul_title">Терапия</h1> 
                <div class="v-modul-subtitle">Терапия домашних животных – это диагностика и лечение заболеваний животных без хирургического вмешательства. Терапия (синоним: лечение) - процесс, целью которого является облегчение, снятие или устранение проявлений того или иного патологического состояния организма (нарушенного, ненормального), нормализация нарушенных процессов жизнедеятельности и выздоровление. Терапией также называют «все, что не хирургия», то есть методы нехирургического, или консервативного лечения заболеваний. Терапевтическое лечение может также проводиться до хирургического вмешательства (предоперационная терапия) и после операции - послеоперационная терапия.
                    <h2>Ветеринарная терапия – это лечение собак, кошек и других животных консервативными, медикаментозными или другими, например, физиотерапевтическими методами.</h2>
                </div>                                        
                <div class="row">
                    <router-link  tag="a" to="/vRespiratorySystem" class="v-modul_block v-modul_item col-3 col"><span>Дыхательная система</span></router-link>
                    <router-link  tag="a" to="/vDiseases" class="v-modul_block v-modul_item col-3 col"><span>Болезни ушей</span></router-link>
                    <router-link  tag="a" to="/vStomach" class="v-modul_block v-modul_item col-3 col"><span>Болезни желудка и кишечника</span></router-link>
                    <router-link  tag="a" to="/vUrinary" class="v-modul_block v-modul_item col-3 col"><span>Болезни почек и мочевого пузыря</span></router-link>
                    <router-link  tag="a" to="/vPancreas" class="v-modul_block v-modul_item col-3 col"><span>Болезни печени и поджелудочной железы</span></router-link>
                    <router-link  tag="a" to="/vInfection" class="v-modul_block v-modul_item col-3 col"><span>Инфекционные заболевания</span></router-link>            
                </div>
                </div>               
                <v-side/>
            </div>            
        </div>       
    </div>
</template>

<script>
import vSide from '@/components/side/v-side.vue'
export default {
    name: 'vTherapy',
    components: {
        vSide,
    },
}
</script>

<style scoped lang="scss">
    @import '@/assets/css/modul.scss';
</style>