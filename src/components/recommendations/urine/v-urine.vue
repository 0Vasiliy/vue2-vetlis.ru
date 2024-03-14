<template>
    <div class="v-urine">
        <div class="container">
           <div class="v-modul-block">
               <div class="v-modul-block-left">
                <h1 class="v-modul_title">Как правильно собрать мочу</h1> 
                <div class="v-modul-subtitle">Очень важным, надежным, относительно недорогим показателем здоровья кошки является анализ мочи, а качественно собрать мочу и быстро доставить ее в клинику не так-то просто.
                    <picture>
                        <source srcset="../../../assets/images/recommendations/rec1.webp" class="card-img-top r-img" type="image/webp">
                        <source srcset="../../../assets/images/recommendations/rec1.jpg" class="card-img-top r-img" type="image/jpeg"> 
                        <img src="../../../assets/images/recommendations/rec1.jpg" class="card-img-top r-img" alt="Собрать мочу">
                    </picture>
                    <h1>Моча должна быть свежей</h1>
                    <h2>Идеальным вариантом является исследование мочи в течение 30 мин после отбора. Хранение мочи более 2 час. вызывает интенсивный бактериальный рост (соответственно изменение pH мочи), разрушает клеточные элементы осадка, приводит к спонтанному выпадению кристаллов, увеличению плотности.</h2>
                    <h1>Что нужно делать?</h1>
                    <h2>Использовать специальные пробирки VACUETTE со стабилизатором и герметично завинчивающейся крышкой. Мы специально заказываем пробирки для своих пациентов, они всегда есть в нашей ветаптеке. Пробирку наполнять до метки (10мл) и перемешивать до полного растворения белого порошка, переворачивая аккуратно вверх-вниз 8-10 раз. Хранить мочу в пробирке не более 48 час при комнатной тем-ре (и дольше при тем-ре 2-4* С)</h2>
                    <h2>При использовании пробирки со стабилизатором, вы можете доставить пробу в лабораторию в любое удобное время, в течение 72 час. Запатентованная смесь буферов позволяет сохранить биохимические показатели мочи, элементы органического и неорганического осадка, замедлить бактериальный рост</h2>
                    <picture>
                        <source srcset="../../../assets/images/recommendations/rec2.webp" class="card-img-top r-img" type="image/webp">
                        <source srcset="../../../assets/images/recommendations/rec2.jpg" class="card-img-top r-img" type="image/jpeg"> 
                        <img src="../../../assets/images/recommendations/rec2.jpg" class="card-img-top r-img" alt="Собрать мочу">
                    </picture>
                    <h1>Моча должна быть чистой</h1>
                    <h2>Лоток необходимо хорошо вымыть и сполоснуть кипятком. Полученную порцию мочи набрать в одноразовый шприц и перелить в пробирку.</h2>
                    <h1>Что делать, если кошка привыкла к лотку с наполнителем?</h1>
                    <h2>Существуют специальные наборы для сбора мочи кошек.</h2>
                    <h2>Набор состоит из гранул, которые не впитывают, а отталкивают влагу, таким образом, мочу легко собрать с помощью пипетки или шприца.</h2>
                    <h2>Надеемся, что эти рекомендации помогут вам позаботиться о здоровье вашей кошки.
                        Ведь профилактика – это лучший способ сохранить здоровье, а иногда и жизнь вашему питомцу.</h2>
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
    name: 'vUrine',
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