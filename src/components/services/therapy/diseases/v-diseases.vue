<template>
    <div class="v-diseases">
        <div class="container">
           <div class="v-modul-block">
               <div class="v-modul-block-left">
                <h1 class="v-modul_title">Болезни ушей</h1> 
                <div class="v-modul-subtitle">
                    <h2>В нашей ветеринарной клинике «ЛИС» Ваш питомец сможет получить помощь при воспалении уха (отит). Мы лечим аллергический отит у собак и кошек, отодектоз (ушной клещ), а также оказываем хирургическую помощь при заболевании ушей (удаление  новообразований уха, удаление слухового прохода при хроническом отите, хирургическое лечение гематомы ушной раковины у собак и кошек). В ветклинике можно провести купирование ушей собаке ( стаффордширский терьер, доберман, дог, миттельшнауцер, цвергшнауцер, ризеншнауцер, пинчер, кане – корсо)</h2>
                    <h2>Отодектоз</h2>                   
                    <picture>
                        <source srcset="../../../../assets/images/therapy/Sob_otodektoz.webp" class="card-img-top r-img" type="image/webp">
                        <source srcset="../../../../assets/images/therapy/Sob_otodektoz.jpg" class="card-img-top r-img" type="image/jpeg"> 
                        <img src="../../../../assets/images/therapy/Sob_otodektoz.jpg" class="card-img-top r-img" alt="sob">
                    </picture> 
                    <h2>Отит</h2>                    
                    <picture>
                        <source srcset="../../../../assets/images/therapy/otogematoma-koshki.webp" class="card-img-top r-img" type="image/webp">
                        <source srcset="../../../../assets/images/therapy/otogematoma-koshki.jpg" class="card-img-top r-img" type="image/jpeg"> 
                        <img src="../../../../assets/images/therapy/otogematoma-koshki.jpg" class="card-img-top r-img" alt="kosh">
                    </picture>
                    <h2>Как определить наличие болезни?</h2> 
                    <h2>В общем-то, сделать это может даже очень далекий от ветеринарии и медицины человек, так как признаки характерны:</h2>
                    <ul>
                        <li>крайне неприятный запах от ушей.</li>
                        <li>собака постоянно чешет и царапает ушные раковины. </li>
                        <li>из слуховых проходов может выделять экссудат.</li>
                        <li>сами ушные раковины заметно краснеют, отекают, воспаляются</li>
                        <li>то особенно заметно на кончиках ушей.</li>
                    </ul>
                    <h2> Пес ходит с наклоненной головой, стараясь постоянно держать ее в одном положении. Если хозяин задевает уши своего питомца, тут же возникает выраженная болевая реакция. Изменения в поведении, такие как депрессия или раздражительность.</h2>                 
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
    name: 'vDiseases',
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