<template>
    <div class="v-sterilization">
        <div class="container">
           <div class="v-modul-block">
               <div class="v-modul-block-left">
                <h1 class="v-modul_title">Стерилизации и кастрации</h1> 
                <div class="v-modul-subtitle"> Стерилизация и кастрация домашних питомцев уже привычная современная мера, направленная на коррекции поведения и размножения питомца. Это одна из самых популярных процедур, проводимых в ветеринарных клиниках, благодаря чему любой специалист имеет достаточно опыта.
                    Большинство ветеринарных врачей рекомендуют обязательное проведение данной процедуры, если Вы не планируете заниматься разведением питомцев. Вовремя проведенная стерилизация убережет от множества гормональных, поведенческих проблем.      
                    <picture>
                        <source srcset="../../../assets/images/sterilization/st1.webp" class="card-img-top r-img" type="image/webp">
                        <source srcset="../../../assets/images/sterilization/st1.jpg" class="card-img-top r-img" type="image/jpeg"> 
                        <img src="../../../assets/images/sterilization/st1.jpg" class="card-img-top r-img" alt="Стерилизация">
                    </picture>
                    <h2>Существует множество мнений по поводу кастраций и стерилизаций животных. Под термином кастрация и стерилизация понимается искусственное нарушение репродуктивной способности организма.</h2>
                    <h1>Стерилизация</h1>
                    <h2>Стерилизация - операция, в ходе которой нарушается соединение между яичниками и маткой, но сами органы не удаляются. Эта операция применяется только для особей женского пола. В результате животное больше не может иметь потомство, но все равно испытывает потребность найти себе пару, т. к. яичники продолжают вырабатывать половые гормоны.</h2>
                    <h2>Многие хозяева из солидарности оставляют своему питомцу возможность влюбиться и реализовать свою любовь. Однако, у самки, находящейся под влиянием гормонов, продолжаются регулярные пустовки, сопровождающиеся беспокойным поведением, а также сохраняется риск различных заболеваний (опухоли яичников и матки, опухоли молочных желез, гнойное воспаление матки, ложная беременность). </h2>
                    <h2>В связи с этим стерилизованных животных часто приходится оперировать повторно и все равно удалять яичники и матку. Поэтому рациональнее животное не стерилизовать, а кастрировать.</h2>
                    <h1>Кастрация</h1>
                    <h2>Кастрация – операция по удалению половых желез: семенников у самца, яичников у самки (обычно яичники удаляются вместе с маткой). После проведения операции в организме прекращается выработка половых гормонов.</h2>
                    <picture>
                        <source srcset="../../../assets/images/sterilization/st2.webp" class="card-img-top r-img" type="image/webp">
                        <source srcset="../../../assets/images/sterilization/st2.jpg" class="card-img-top r-img" type="image/jpeg"> 
                        <img src="../../../assets/images/sterilization/st2.jpg" class="card-img-top r-img" alt="Кастрация">
                    </picture>
                    <h2>Продолжительность жизни стерилизованных животных в среднем дольше на 1, 5-2 года</h2>
                    <ul>
                        <li>Стерилизованные животные более спокойные, как следствие снижается агрессия, исчезает беспокойное поведение и стремление убежать. Животные становятся более послушными и управляемыми </li>
                        <li>У них пропадают все гормональные проблемы, а у Вас пропадают громкие крики, вой и мяуканье по ночам, сильно пахнущие метки, которые оставляют коты и собаки на коврах, мебели и обоях, а также драки между самцами. </li>
                        <li>Ваш питомец не будет страдать такими тяжелыми часто встречающимися заболеваниями, как простатит, пиометра, кисты  и новообразования яичников, матки и семенников</li>
                        <li>У стерилизованных в молодом возрасте животных почти исчезает вероятность возникновения гормонозависимых злокачественных опухолей молочной железы </li>
                    </ul>
                    <picture>
                        <source srcset="../../../assets/images/sterilization/st3.webp" class="card-img-top r-img" type="image/webp">
                        <source srcset="../../../assets/images/sterilization/st3.jpg" class="card-img-top r-img" type="image/jpeg"> 
                        <img src="../../../assets/images/sterilization/st3.jpg" class="card-img-top r-img" alt="Стерилизация и кастрация">
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
    name: 'vSterilization',
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