<template>
    <div class="v-therapy">
        <div class="container">
           <div class="v-therapy-block">
               <div class="v-therapy-block-left">
                <h1 class="v-therapy_title">Терапия</h1> 
                <div class="v-therapy-subtitle">Терапия домашних животных – это диагностика и лечение заболеваний животных без хирургического вмешательства. Терапия (синоним: лечение) - процесс, целью которого является облегчение, снятие или устранение проявлений того или иного патологического состояния организма (нарушенного, ненормального), нормализация нарушенных процессов жизнедеятельности и выздоровление. Терапией также называют «все, что не хирургия», то есть методы нехирургического, или консервативного лечения заболеваний. Терапевтическое лечение может также проводиться до хирургического вмешательства (предоперационная терапия) и после операции - послеоперационная терапия.
                    <h2>Ветеринарная терапия – это лечение собак, кошек и других животных консервативными, медикаментозными или другими, например, физиотерапевтическими методами.</h2>
                </div>                                        
                <div class="row">
                    <router-link  tag="a" to="/vRespiratorySystem" class="v-therapy_block v-therapy_item col-3 col"><span>Дыхательная система</span></router-link>
                    <router-link  tag="a" to="/vDiseases" class="v-therapy_block v-therapy_item col-3 col"><span>Болезни ушей</span></router-link>
                    <router-link  tag="a" to="/vStomach" class="v-therapy_block v-therapy_item col-3 col"><span>Болезни желудка и кишечника</span></router-link>    
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
    name: 'vTherapy',
    components: {
        vSide,
    },
}
</script>

<style scoped lang="scss">
    .v-therapy-block-left{
        margin-right: 20px;
        margin-left: 0;
        flex: 0 0 70%;
        max-width: 70%;
        border: 1px solid gray;
        border-radius: 20px;
        padding: 30px;
    }
    .v-therapy-block{
        display: flex;
    }

    .v-therapy_item{   
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
    .v-therapy_title{
        font-size: 36px;
        font-weight: 300;
        text-align: center;
        line-height: 21px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 700;
        color: #757575;
    }
    .v-therapy_block{
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

    .v-therapy-title{
        text-align: left;
        margin-top: 40px;
        font-size: 42px;
        line-height: 36px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 700;
        color: #757575;
    }
    .v-therapy-subtitle{
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
    .v-therapy-subtitle li::marker {
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