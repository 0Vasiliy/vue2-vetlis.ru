<template>
    <div class="v-rodents">
        <div class="v-modul-block">
               <div class="v-modul-block-left">
                <h1 class="v-modul_title">Лечение грызунов и зайцеобразных</h1> 
                <div class="v-modul-subtitle">Особенность грызунов — часто стремительное течение болезни. У животных ускорены обменные процессы, а значит, многие заболевания развиваются очень быстро. Чтобы сохранить жизнь и здоровье любимого питомца, стоит обращаться в клинику при первых же симптомах недомогания:
                    <ul>
                        <li>отсутствие аппетита в течение 4 часов и более</li>
                        <li>апатичность, нежелание двигаться</li>
                        <li>сложности с пережевыванием пищи</li>
                        <li>слюнотечение</li>
                        <li>воспаленные глаза</li>
                        <li>понос, рвота, сложности с мочеиспусканием</li>
                        <li>хрипы при дыхании</li>
                        <li>выпадение шерсти</li>
                        <li>образования на или под кожей</li>
                        <li>травмы различной природы</li>
                    </ul>
                    <img src="../../../assets/images/therapy/rodents.jpg" class="card-img-top r-img" alt="rodents">
                    <h1>Виды заболеваний у грызунов и их лечение</h1>
                    <h2>Грызуны подвержены травмам, стрессам, а также следующим видам заболеваний и проблем:</h2>
                    <ul>
                        <li>болезнь десен и зубов.</li>
                        <li>абсцессы.</li>
                        <li>опухоли</li>
                        <li>инфекционные болезни.</li>
                        <li>паразитарные болезни</li>
                    </ul>
                    <img src="../../../assets/images/therapy/rodents2.jpg" class="card-img-top r-img" alt="rodents2">
                </div>                                       
                </div>               
                <v-side/>
            </div> 
    </div>
</template>

<script>
import vSide from '@/components/side/v-side.vue'
export default {
    name: 'vRodents',
    components: {
        vSide,
    },
}

</script>

<style scoped lang="scss">
    @import '@/assets/css/modul.scss';
</style>