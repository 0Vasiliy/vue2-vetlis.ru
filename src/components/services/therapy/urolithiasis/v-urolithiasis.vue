<template>
    <div class="v-urolithiasis">
        <div class="container">
           <div class="v-modul-block">
               <div class="v-modul-block-left">
                <h1 class="v-modul_title">Мочекаменная болезнь</h1> 
                <div class="v-modul-subtitle">Наличие песка и/или камней в органах мочевыделительной системы называют мочекаменной болезнью, или МКБ. Образования могут иметь любую локализацию, обладают разным химическим составом, размерами и количеством. У кошек и котов мочекаменная болезнь обычно носит хронический характер, обладает своими особенностями протекания, лечения и профилактики.                  
                    <picture>
                        <source srcset="../../../../assets/images/therapy/uro1.webp" class="card-img-top r-img" type="image/webp">
                        <source srcset="../../../../assets/images/therapy/uro1.jpg" class="card-img-top r-img" type="image/jpeg"> 
                        <img src="../../../../assets/images/therapy/uro1.jpg" class="card-img-top r-img" alt="uro1">
                    </picture>
                   <h1>Какие виды камней бывают у котов при МКБ</h1>
                   <h2>Мочекаменная болезнь у котов проявляется в образовании двух видов камней: струвитов и оксалатов. Первые формируются в щелочной среде, имеют твердую структуру. Ощелачивание мочи, в основном, происходит из-за избытка в пище кошки фосфора и магния.</h2>
                   <h2>Второй вид возникает, если рН мочи имеет большую кислотность, причиной которой является повышенное содержание кальция. Для оксалатов характерно наличие острых краев и рыхлой структуры.</h2>
                   <h2>Причины мочекаменной болезни</h2>
                    <ul>
                        <li>погрешности в рационе (преобладание в пище каких-либо веществ);</li>
                        <li>недостаток воды или ее чрезмерная насыщенность солями;</li>
                        <li>наличие хронических заболеваний, очагов воспаления, нарушения обмена веществ в организме животного;</li>
                        <li>врожденные или приобретенные особенности анатомии;</li>
                        <li>наследственный фактор.</li>
                    </ul>
                    <h2>Симптомы МКБ</h2>
                    <ul>
                        <li>кот ходит в туалет не на привычное место, а где угодно;</li>
                        <li>мочи выделяется мало, в ней могут быть заметны песчинки, кровь;</li>
                        <li>сами позывы к выделению мочи, напротив, становятся частыми;</li>
                        <li>болевые ощущения и раздражение мочевыводящих путей песком заставляют кошку вылизывать уретру</li>
                    </ul>
                    <picture>
                        <source srcset="../../../../assets/images/therapy/uro2.webp" class="card-img-top r-img" type="image/webp">
                        <source srcset="../../../../assets/images/therapy/uro2.jpg" class="card-img-top r-img" type="image/jpeg"> 
                        <img src="../../../../assets/images/therapy/uro2.jpg" class="card-img-top r-img" alt="uro1">
                    </picture>
                    <h2></h2>
                    <h2>Постепенно у питомца поднимается температура тела (до 40 ˚С), он отказывается от пищи, мало двигается. Когда моча не может пройти по путям, кот приходит в сильное беспокойство, мяукает, принимает характерную позу, чтобы облегчить отток</h2>
                    <h2>Критические симптомы мочекаменной болезни</h2>
                    <ul>
                        <li>живот уплотняется, его объем становится заметно больше;</li>
                        <li>так как моча уже не может выйти, она застаивается в мочевом пузыре, вызывая сильнейшую интоксикацию тканей;</li>
                        <li>животное почти не двигается;</li>
                        <li>из пасти выделяется пенистая слюна;</li>
                        <li>температура животного падает, питомец дрожит;</li>
                        <li>возможна рвота.</li>
                    </ul>
                    <h1>Диагностика мочекаменной болезни</h1>
                    <h2>МКБ у кота можно диагностировать и на начальных стадиях развития болезни, если регулярно проводить обследования. Выявить заболевание или дифференцировать его от других патологий (опухолей, цистита и прочих) помогают такие методы:</h2>
                    <ul>
                        <li>анализы мочи (общий и микроскопический поляризованный);</li>
                        <li>УЗИ органов брюшной полости.</li>
                    </ul>
                    <h2>При отсутствии своевременной помощи животное погибает.Интоксикация наступает уже спустя сутки после того, как прекращается мочевыделение!</h2>
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
    name: 'vUrolithiasis',
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