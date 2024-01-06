<template>
    <div class="v-urinary">
        <div class="container">
           <div class="v-urinary-block">
               <div class="v-urinary-block-left">
                <h1 class="v-urinary_title">Болезни почек и мочевого пузыря</h1> 
                <div class="v-urinary-subtitle">
                    <h2>Распространенной проблемой является мочекаменная болезнь у котов. Камни в мочевом пузыре у кота доставляют ему много неприятностей и болевых ощущений. Мы предлагаем современные эффективные способы лечения этой болезни. Также наши врачи помогут вашему животному, если у него цистит или пиелонефрит. В нашей ветеринарной клинике можно сделать биохимический анализ крови для диагностики болезней почек.</h2>
                    <img src="../../../../assets/images/therapy/urinary.jpeg" class="card-img-top" alt="urinary">
                    <h1>Болезни половой системы</h1>
                    <h2>В нашей ветеринарной клинике лечат эндометрит, венерическую саркому, аденому простаты, опухоли матки, опухоли семенников и другие заболевания половой сферы. У нас можно сделать УЗИ матки и яичников собакам и кошкам. Возможно удаление пиометры у кошек, пиометры у собак.Наши врачи осуществляют родовспоможение собакам и кошкам, в том числе мы занимаемся наблюдением и помощью при патологических родах. В нашей ветеринарной клинике проводится кесарево сечение собак и кошек.</h2>
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
    name: 'vUrinary',
    components: {
        vSide,
    },
}
</script>
<style scoped lang="scss">
    .v-urinary-block-left{
        margin-right: 20px;
        margin-left: 0;
        flex: 0 0 70%;
        max-width: 70%;
        border: 1px solid gray;
        border-radius: 20px;
        padding: 30px;
    }
    .v-urinary-block{
        display: flex;
    }

    .v-urinary_item{   
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
    .v-urinary_title{
        font-size: 36px;
        font-weight: 300;
        text-align: center;
        line-height: 21px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 700;
        color: #757575;
    }
    .v-urinary_block{
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

    .v-urinary-title{
        text-align: left;
        margin-top: 40px;
        font-size: 42px;
        line-height: 36px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 700;
        color: #757575;
    }
    .v-urinary-subtitle{
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
    .v-urinary-subtitle li::marker {
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