<template>
    <div class="v-respiratory-sistem">
        <div class="container">
           <div class="v-respiratory-sistem-block">
               <div class="v-respiratory-sistem-block-left">
                <h1 class="v-respiratory-sistem_title">Дыхательная система</h1> 
                <div class="v-respiratory-sistem-subtitle">
                    <img src="../../../../assets/images/therapy/img19.jpg" class="card-img-top r-img" alt="img19">
                    <h2>Лечение бронхита, пневмонии, ринита, ларингита  у собак и кошек. Пневмония у кошки или собаки при отсутствии своевременной квалифицированной помощи ветеринарного врача может привести к серьезным последствиям для животного, поэтому рекомендуем обратиться к нам при первых признаках заболевания у животного ( затрудненное дыхание, выделения из носа, вялость, отказ от еды, кашель и чихание).  Мы эффективно лечим такое заболевание как астма кошек, оказываем помощь при травмах грудной клетки. Травма грудной клетки бывает, если Ваш кот выпал из окна или балкона высотного дома или если животное сбила машина, а также в результате того, что крупная собака напала на более мелкую или на кошку.</h2>                   
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
   name: 'vRespiratorySystem',
   components: {
        vSide,
    },
}
</script>

<style scoped lang="scss">
     .v-respiratory-sistem-block-left{
        margin-right: 20px;
        margin-left: 0;
        flex: 0 0 70%;
        max-width: 70%;
        border: 1px solid gray;
        border-radius: 20px;
        padding: 30px;
    }
    .v-respiratory-sistem-block{
        display: flex;
    }
    .r-img{
        border-radius: 20px;
    }
    .v-respiratory-sistem_item{   
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
    .v-respiratory-sistem_title{
        font-size: 36px;
        font-weight: 300;
        text-align: center;
        line-height: 21px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 700;
        color: #757575;
    }
    .v-respiratory-sistem_block{
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

    .v-respiratory-sistem-title{
        text-align: left;
        margin-top: 40px;
        font-size: 42px;
        line-height: 36px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 700;
        color: #757575;
    }
    .v-respiratory-sistem-subtitle{
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
    .v-respiratory-sistem-subtitle li::marker {
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