<template>
    <div class="v-respiratory-sistem">
        <div class="container">
           <div class="v-modul-block">
               <div class="v-modul-block-left">
                <h1 class="v-modul_title">Дыхательная система</h1> 
                <div class="v-modul-subtitle">
                    <img src="../../../../assets/images/therapy/img19.jpg" class="card-img-top r-img" alt="img19">
                    <h2>Лечение бронхита, пневмонии, ринита, ларингита  у собак и кошек. Пневмония у кошки или собаки при отсутствии своевременной квалифицированной помощи ветеринарного врача может привести к серьезным последствиям для животного, поэтому рекомендуем обратиться к нам при первых признаках заболевания у животного ( затрудненное дыхание, выделения из носа, вялость, отказ от еды, кашель и чихание).  Мы эффективно лечим такое заболевание как астма кошек, оказываем помощь при травмах грудной клетки. Травма грудной клетки бывает, если Ваш кот выпал из окна или балкона высотного дома или если животное сбила машина, а также в результате того, что крупная собака напала на более мелкую или на кошку.</h2>                   
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
   name: 'vRespiratorySystem',
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