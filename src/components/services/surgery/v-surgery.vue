<template>
    <div class="v-surgery">
        <div class="container">
           <div class="v-modul-block">
               <div class="v-modul-block-left">
                <h1 class="v-modul_title">Хирургия</h1> 
                <div class="v-modul-subtitle">Иногда случается так, что Вашему питомцу требуется хирургическое вмешательство для лечения острого или хронического заболевания. Наши специалисты проводят как самые простые и распространенные операции, так и самые сложные.
                    <picture>
                        <source srcset="../../../assets/images/surgery/surgery.webp" class="card-img-top r-img" type="image/webp">
                        <source srcset="../../../assets/images/surgery/surgery.jpg" class="card-img-top r-img" type="image/jpeg"> 
                        <img src="../../../assets/images/surgery/surgery.jpg" class="card-img-top r-img" alt="Хирургия">
                    </picture>
                    <h2>В наше ветеринарной клиники мы проводим различные хирургические манипуляции и операции:</h2>
                    <ul>
                        <li>всрытие абцесса и гематомы;</li>
                        <li>грыжесечение;</li>
                        <li>впрамление прямой кишки;</li>
                        <li>заворот желудка;</li>
                        <li>оперативное лечение гематомы ушной раковины;</li>
                        <li>резекция кишечника;</li>
                        <li>спленоэктомия(удаление селезенки);</li>
                        <li>удаление инородных тел из желудочно-кишечного тракта;</li>
                        <li>удаление вросшего когтя;</li>
                        <li>удаление различных новообразований;</li>
                        <li>удаление конкрементов из мочевого пузыря;</li>
                        <li>урестомия;</li>
                        <li>удаление слхового прохода и ушной раковины;</li>
                        <li>ушивание ран различной сложности;</li>
                        <li>цистотомия;</li>
                        <li>кесарево сечение и удалние пиометры;</li>
                        <li>различные стерилицации и кастрации в т.ч крипторхов;</li>
                        <li>и многое другое;</li>
                    </ul>
                    <picture>
                        <source srcset="../../../assets/images/surgery/surgery2.webp" class="card-img-top r-img" type="image/webp">
                        <source srcset="../../../assets/images/surgery/surgery2.jpg" class="card-img-top r-img" type="image/jpeg"> 
                        <img src="../../../assets/images/surgery/surgery2.jpg" class="card-img-top r-img" alt="Хирургия">
                    </picture>         
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
  name: 'vSurgery',
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