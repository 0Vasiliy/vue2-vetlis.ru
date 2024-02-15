<template>
    <div class="v-paranal">
        <div class="container">
           <div class="v-modul-block">
               <div class="v-modul-block-left">
                <h1 class="v-modul_title">Воспаление параанальных желез</h1> 
                <div class="v-modul-subtitle">Параанальные железы у собак – парный орган, вырабатывающий пахучий секрет. Застой этой жидкости чреват воспалительным процессом и последующими осложнениями. 
                    <picture>
                        <source srcset="../../../../assets/images/therapy/paranal2.webp" class="card-img-top r-img" type="image/webp">
                        <source srcset="../../../../assets/images/therapy/paranal2.jpg" class="card-img-top r-img" type="image/jpeg"> 
                        <img src="../../../../assets/images/therapy/paranal2.jpg" class="card-img-top r-img" alt="sob">
                    </picture>
                    <h2> Многие владельцы даже не подозревают об их наличии у животного, пока не начинается проблема. Если вы заметили, что ваша собака «ездит на попе» или чешет основание хвоста, нужно показать ее ветеринару. Возможно, животному необходима чистка параанальных желез (удаление секрета параанальных желез).</h2>
                    <h2>Если вовремя не обратиться в ветеринарную клинику, то возможен абсцесс параанальных желез, что потребует уже вмешательства хирурга.</h2>
                    <picture>
                        <source srcset="../../../../assets/images/therapy/paranal.webp" class="card-img-top r-img" type="image/webp">
                        <source srcset="../../../../assets/images/therapy/paranal.jpg" class="card-img-top r-img" type="image/jpeg"> 
                        <img src="../../../../assets/images/therapy/paranal.jpg" class="card-img-top r-img" alt="sob">
                    </picture>
                    <h2>Секрет, выделяемый параанальными железами у собак, обладает индивидуальным запахом. Именно его животные «считывают» при знакомстве друг с другом, когда обнюхивают заднюю часть тела нового знакомого. </h2>
                    <h2>При отсутствии патологий продуцируемый секрет периодически выходит наружу. Это происходит при дефекации, оставлении территориальных меток или сильном эмоциональном возбуждении. </h2>
                    <h2>При нарушении естественного оттока жидкость накапливается внутри. Закупорка выводящих протоков сопровождается воспалением органа. Это может привести к ряду осложнений, включая разрыв тканей. Для спасения животного очищение проводят вручную.</h2>
                    <h2>Основные причины воспаления параанальных желез у собак:</h2>
                    <ul>
                        <li>малая активность и лишний вес, ухудшающие перистальтику кишечника;</li>
                        <li>частые проблемы с пищеварением, включающие диарею и запор;</li>
                        <li>слабый иммунитет;</li>
                        <li>неправильное кормление;</li>
                        <li>частые случки и беременности;</li>
                        <li>заражение бактериями, вирусами или гельминтами;</li>
                        <li>травмы анальной зоны;</li>
                        <li>редкие прогулки, вынуждающие сдерживать позывы к дефекации;</li>
                        <li>пренебрежение гигиеной;</li>
                        <li>врожденные нарушения в развитии и положении органа.</li>
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
    name: 'vParanal',
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