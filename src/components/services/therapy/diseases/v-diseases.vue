<template>
    <div class="v-diseases">
        <div class="container">
           <div class="v-diseases-block">
               <div class="v-diseases-block-left">
                <h1 class="v-diseases_title">Болезни ушей</h1> 
                <div class="v-diseases-subtitle">
                    <h2>В нашей ветеринарной клинике «ЛИС» Ваш питомец сможет получить помощь при воспалении уха (отит). Мы лечим аллергический отит у собак и кошек, отодектоз (ушной клещ), а также оказываем хирургическую помощь при заболевании ушей (удаление  новообразований уха, удаление слухового прохода при хроническом отите, хирургическое лечение гематомы ушной раковины у собак и кошек). В ветклинике можно провести купирование ушей собаке ( стаффордширский терьер, доберман, дог, миттельшнауцер, цвергшнауцер, ризеншнауцер, пинчер, кане – корсо)</h2>
                    <h2>Отодектоз</h2> 
                    <img src="../../../../assets/images/therapy/Sob_otodektoz.jpg" class="card-img-top r-img" alt="sob">
                    <h2>Отит</h2> 
                    <img src="../../../../assets/images/therapy/otogematoma-koshki.jpg" class="card-img-top r-img" alt="kosh">
                    <h2>Как опрделитьналичие болезни?</h2> 
                    <h2>В общем-то, сделать это может даже очень далекий от ветеринарии и медицины человек, так как признаки характерны:</h2>
                    <ul>
                        <li>крайне неприятный запах от ушей.</li>
                        <li>собака постоянно чешет и царапает ушные раковины. </li>
                        <li>из слуховых проходов может выделять экссудат.</li>
                        <li>сами ушные раковины заметно краснеют, отекают, воспаляются</li>
                        <li>'то особенно заметно на кончиках ушей.</li>
                    </ul>
                    <h2> Пес ходит с наклоненной головой, стараясь постоянно держать ее в одном положении. Если хозяин задевает уши своего питомца, тут же возникает выраженная болевая реакция. Изменения в поведении, такие как депрессия или раздражительность.</h2>                 
                </div>                                        
                </div>               
                <v-side/>
            </div>
             
        </div>       
    </div>
</template>

<script>
import vSide from '@/components/side/v-side.vue'
export default {
    name: 'vDiseases',
    components: {
        vSide,
    },
}
</script>
<style scoped lang="scss">
        .v-diseases-block-left{
        margin-right: 20px;
        margin-left: 0;
        flex: 0 0 70%;
        max-width: 70%;
        border: 1px solid gray;
        border-radius: 20px;
        padding: 30px;
    }
    .v-diseases-block{
        display: flex;
    }

    .v-diseases_item{   
        box-sizing: content-box; 
        display: flex;
        margin-top: 50px;  
        max-width: 20%;
        padding: 10px 30px;
        height: 100px;
        border-radius: 20px;  
        border: 1px solid #723030;
        cursor: pointer;
        align-items: center;       
    }
    .v-diseases_title{
        font-size: 36px;
        font-weight: 300;
        text-align: center;
        line-height: 21px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 700;
        color: #757575;
    }
    .v-diseases_block{
        text-decoration: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        span{
            font-size: 20px;
            font-weight: 300;
            text-align: center;
            line-height: 20px;
            font-family: 'Museo Sans Cyrl';
            font-weight: 300;
            color: #757575;
        }
        img{
            max-width: 45px;
            margin-left: 5px;
        }
    }
    .r-img{
        border-radius: 20px;
    }
    .v-diseases-title{
        text-align: left;
        margin-top: 40px;
        font-size: 42px;
        line-height: 36px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 700;
        color: #757575;
    }
    .v-diseases-subtitle{
        margin-top: 30px;
        text-align: left;
        font-size: 24px;
        line-height: 24px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 300;
        color: #757575;
        ul{
            margin-top: 20px;
        }
        li{
            margin-top: 10px;
        }
        br{
            margin-top: 10px;
        }
        h2{
            margin-top: 15px;
            text-align: left;
            font-size: 24px;
            line-height: 24px;
            font-family: 'Museo Sans Cyrl';
            font-weight: 300;
            color: #757575;
        }   
    }
    .v-diseases-subtitle li::marker {
    color: teal;
    font-size: 24px;
    }
@media (min-width: 1600px){
    .container {
        max-width: 1434px;
    }
}
@media (min-width: 768px) and (max-width: 1100px){
    .col-3{
        flex: 0 0 35%;
        max-width: 35%;
    }
}
@media (max-width: 860px){
    .col-3{
        flex: 0 0 45%;
        max-width: 45%;
    }
    .v-services{
        margin-right: 10%;
        margin-left: 12%;
    }
}
@media (max-width: 767px){
    .col-3 {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }
}
</style>