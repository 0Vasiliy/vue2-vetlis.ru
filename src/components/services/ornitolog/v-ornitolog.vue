<template>
    <div class="v-ornitolog">
        <div class="container">
        <div class="v-modul-block">
            <div class="v-modul-block-left">
            <h1 class="v-modul_title">Орнитолог</h1> 
            <div class="v-modul-subtitle">Птицы характеризуются ускоренным обменом веществ, из-за чего болезни у них развиваются очень быстро и промедление может привести к летальному исходу. К тому же довольно часто начальные стадии недуга протекают скрыто. Поэтому при появлении даже малейшего подозрения на проблемы со здоровьем следует обратиться к специалисту.
                <h2>Многие заболевания птиц могут представлять опасность для человека. Вот почему затягивать с обращением к врачу настоятельно не рекомендуется. К таким опасным болезням относятся хламидиоз, сальмонеллез, болезнь Ньюкасла и многие другие виды инфекций, которыми страдают эти домашние питомцы.</h2>
                <picture>
                    <source srcset="../../../assets/images/ornitolog/ornitolog2.webp" class="card-img-top r-img" type="image/webp">
                    <source srcset="../../../assets/images/ornitolog/ornitolog2.jpg" class="card-img-top r-img" type="image/jpeg"> 
                    <img src="../../../assets/images/ornitolog/ornitolog2.jpg" class="card-img-top r-img" alt="rodents">
                </picture>
                <h1>Основные болезни</h1>
                <h2>В число самых распространенных птичьих недугов входят:</h2>
                <ul>
                    <li>нарушения в работе пищеварительной системы (дуоденит, гастрит, воспаление зоба);</li>
                    <li>поражения органов дыхания (ринит, трахеит);</li>
                    <li>инфекционные болезни (сальмонеллез, орнитоз, микоз);</li>
                    <li>паразитарные заболевания (гельминты, клещи, пухоеды, простейшие);</li>
                    <li>травмы (ушибы, растяжения, переломы);</li>
                    <li>авитаминозы;</li>
                    <li>отравления.</li>
                </ul>
                <h1>Клинические проявления</h1>
                <h2>Больная птица:</h2>
                <ul>
                    <li>отказывается от пищи;</li>
                    <li>много пьет;</li>
                    <li>не проявляет активности;</li>
                    <li>не реагирует на звуки;</li>
                    <li>тяжело дышит;</li>
                    <li>сидит, забившись в уголок;</li>
                    <li>прячет голову под крыло;</li>
                    <li>взъерошивает перья;</li>
                    <li>опускает крылья;</li>
                    <li>прикрывает глаза;</li>
                    <li>часто открывает рот;</li>
                    <li>мотает головой;</li>
                    <li>часто чешется;</li>
                    <li>страдает поносом либо запором;</li>
                    <li>издает необычные звуки;</li>
                    <li>теряет координацию движений.</li>
                </ul>
                <h2>При обнаружении хотя бы одного из вышеперечисленных признаков понадобится консультация специалиста.</h2>
                <picture>
                    <source srcset="../../../assets/images/ornitolog/ornitolog.webp" class="card-img-top r-img" type="image/webp">
                    <source srcset="../../../assets/images/ornitolog/ornitolog.jpg" class="card-img-top r-img" type="image/jpeg"> 
                    <img src="../../../assets/images/ornitolog/ornitolog.jpg" class="card-img-top r-img" alt="rodents">
                </picture>
                <h1>Диагностика</h1>
                <h2>Существует огромное множество различных птичьих болезней. При этом симптоматика большинства из них сходна. Поэтому поставить диагноз, а, следовательно, подобрать правильное лечение без лабораторных анализов, специальных знаний и достаточного опыта невозможно.</h2>
                <h2>В ветеринарной клинике птицу тщательно обследуют: проведут анализы крови и помета, бактериологический посев для выявления инфекций.</h2>
                <h2>Своевременная диагностика необходима не только для лечения птицы, но и для сохранения здоровья хозяина. Некоторые птичьи болезни (например, туберкулез, сальмонеллез, орнитоз) передаются и человеку.</h2>
                <picture>
                    <source srcset="../../../assets/images/ornitolog/ornitolog3.webp" class="card-img-top r-img" type="image/webp">
                    <source srcset="../../../assets/images/ornitolog/ornitolog3.jpg" class="card-img-top r-img" type="image/jpeg"> 
                    <img src="../../../assets/images/ornitolog/ornitolog3.jpg" class="card-img-top r-img" alt="rodents">
                </picture>
                <h1>Лечение</h1>
                <h2>В большинстве случаев птиц лечат консервативно. Но в случае необходимости ветеринар прибегнет к операционному вмешательству.</h2>
                <h2>Не забывайте, что успех лечения зависит от скорости предоставления квалифицированной медицинской помощи. Если вам дорога жизнь пернатых друзей, при появлении первых признаков недуга обратитесь к ветеринару. Осмотрев птицу, он сможет предоставить ей необходимую помощь.</h2>
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
    name: 'vOrnitolog',
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