<template>
    <div class="v-others">
        <div class="container">
           <div class="v-modul-block">
               <div class="v-modul-block-left">
                <h1 class="v-modul_title">Основные терапевтические услуги</h1> 
                <div class="v-modul-subtitle">Ветеринарная терапия специализируется на диагностировании, изучении, лечении различных заболеваний животных без хирургического вмешательства консервативными методами, а также их профилактике. Когда неясен характер недуга, в первую очередь именно терапевт проводит осмотр и принимает решение о дальнейших действиях.
                    <h1>Терапевтические услуги</h1>
                    <h2>К основным терапевтическим услугам, оказываемым нашей ветклиникой, относятся:</h2>
                    <ul>
                        <li>профилактические и плановые осмотры для выявления возможных патологий и своевременного назначения лечения,</li>
                        <li>инъекции внутримышечные и внутривенные, введение лекарств, установка капельниц,</li>
                        <li>взятие анализов (крови, кала, мочи, соскобы) для их изучения,</li>
                        <li>установка катетера,</li>
                        <li>гигиенические процедуры (стрижка клюва, когтей, чистка ушей),</li>
                        <li>антипаразитарная обработка,</li>
                        <li>помощь в родах,</li>
                        <li>УЗИ, иные диагностические процедуры,</li>
                        <li>вакцинация современными препаратами.</li>
                    </ul>
                    <picture>
                        <source srcset="../../../../assets/images/therapy/others.webp" class="card-img-top r-img" type="image/webp">
                        <source srcset="../../../../assets/images/therapy/others.jpg" class="card-img-top r-img" type="image/jpeg"> 
                        <img src="../../../../assets/images/therapy/others.jpg" class="card-img-top r-img" alt="sob">
                    </picture>
                    <h1>Основные болезни ветеринарной терапии</h1>
                    <h2>Чаще всего ветврачи сталкиваются со следующими заболеваниями:</h2>
                    <ul>
                        <li>болезни дыхательной системы</li>
                        <li>патологии желудка, печени, поджелудочной железы, кишечника</li>
                        <li>анемия, нарушение свертываемости крови, проблемы кроветворной системы</li>
                        <li>заболевания половой сферы</li>
                        <li>нарушение функционирования мочевыделительной системы</li>
                        <li>эндокринологические заболевания</li>
                        <li>кожные болезни</li>
                        <li>инфекции, вирусы</li>
                        <li>отравления</li>
                    </ul>
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
    name: 'vOthers',
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