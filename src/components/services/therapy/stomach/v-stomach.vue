<template>
    <div class="v-stomach">
        <div class="container">
           <div class="v-modul-block">
               <div class="v-modul-block-left">
                <h1 class="v-modal_title">Болезни желудка и кишечника</h1> 
                <div class="v-modul-subtitle">
                    <h2>Мы можем также помочь вашему животному, если у него гастрит, язва желудка, энтерит, запор, отравление. Или если животное съело пуговицу, иголку, мячик. Признаками проблем с желудком и кишечником могут быть рвота, запах изо рта, понос или запор, резкое похудание, плохой аппетит. Если кошка или собака проглотила инородное тело, то это рвота, отказ от еды. Наши врачи при необходимости делают операции по удалению инородного тела из желудка, кишечника, глотки. Окажут квалифицированную помощь при завороте желудка у собак. Заворот желудка у собаки требует неотложной ветеринарной помощи! Собака может погибнуть в течение пары часов, если вовремя не обратиться к ветеринару!</h2>
                    <h1>Гастрит и гастроэнтерит</h1>
                    <h2>Именно острый гастрит – наиболее частая патология органов ЖКТ у собак. Причины развития гастрита практически всегда связаны с пищевой погрешностью. Кормление испорченной или неподходящей едой (копчености, сладости, слишком жирная, соленая, пряная пища) постепенно ведет к развитию у собаки гастрита. То есть воспалению стенок желудка. Также возможной причиной гастрита может стать поедание собакой инородных предметов и костей в том числе.</h2>
                    <h2>Когда к воспалению желудка прибавляется еще и воспаление двенадцатиперстной кишки и тонкого отдела кишечника получаем гастроэнтерит у собак. Помимо вышеназванных причин, гастроэнтерит может возникать на фоне кишечных паразитов. Иногда гастроэнтерит становится следствием сильных отравлений или некорректного применения ряда препаратов</h2>
                    <h2>Заподозрить гастрит или гастроэнтерит помогут такие симптомы:</h2>
                    <ul>
                        <li>рвота. В зависимости от степени поврежденности стенок органа, рвотные массы могут содержать сгустки крови или примесь желчи.</li>
                        <li>если отсутствует сама рвота, то могут присутствовать позывы к ней. При этом аппетит собаки существенно снижается или отсутствует вовсе</li>
                        <li>угнетенное состояние, неопрятный внешний вид, свалявшаяся шерсть. Естественно, что больное животное будет выглядеть непривлекательно, а при гастрите тем более</li>
                        <li>если имеется гастроэнтерит, то к рвоте прибавится жидкий стул – диарея. При этом в кале могут присутствовать элементы крови</li>
                    </ul>
                    <h1>Энтероколит</h1>
                    <h2>Энтероколит – воспалительный процесс в тонком и толстом кишечнике, как самостоятельное заболевание наблюдается очень редко. Как правило, энтероколит является следствием серьезных инфекционных заболеваний, инвазий, застойных процессов в кишечнике, отравлений или опухолевых образований</h2>
                    <h2>Из-за сложности в диагностике, острый энтероколит часто переходит в хроническую форму. При этом хроническая форма характеризуется меньшим воспалением, но зато большими секреторными и перистальтическими нарушениями</h2>
                    <h2>Симптомы</h2>
                    <h2>Энтероколит  всегда сопровождается жидким калом. При этом первые испражнения имеют кашеобразную консистенцию, а каждое последующее более жидкую консистенцию со следами слизи или крови. Помните, что такое расстройство стула, как сильный понос, чревато выпадением прямой кишки. А потому долго игнорировать такой симптом нельзя. Кроме жидкого кала, может наблюдаться раздражение и воспаление анальной области</h2>
                    <h1>Заворот</h1>
                    <h2> Заворот кишок или желудка – это перекручивание органа вокруг своей оси. Мы с вами от такой напасти практически застрахованы, у нас органы пищеварения жестко фиксируются связками. У собак же такого связочного аппарата нет, да и горизонтальная расположенность желудка и кишечника провоцирует заворот. Способствует опасной патологии неправильный режим кормления: собаку нельзя кормить один раз в день, давая ей при этом большой объем пищи.</h2>                   
                    <picture>
                        <source srcset="../../../../assets/images/therapy/stomach.webp" class="card-img-top r-img" type="image/webp">
                        <source srcset="../../../../assets/images/therapy/stomach.jpg" class="card-img-top r-img" type="image/jpeg"> 
                        <img src="../../../../assets/images/therapy/stomach.jpg" class="card-img-top r-img" alt="stomach">
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
    name: 'vStomach',
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