<template>
    <section class="v-recommendations col-xl-9 col-md-9 col-10" id="recomendation">
       <div class="container">
        <h1 class="v-recommendations-title">Рекомендации <span>ветеринара</span></h1>
        <div class="v-recommendations-block card">       
            <div class="card v-recommendations-link col">           
                <img src="../../assets/images/recommendations/rec1.jpg" class="card-img-top" alt="Собрать мочу у кота">
                <div class="card-body">
                    <h5 class="card-title">Как правильно собрать мочу</h5>
                    <p class="card-text">Очень важным, надежным, относительно недорогим показателем здоровья кошки является анализ мочи, а качественно собрать мочу и быстро доставить ее в клинику не так-то просто...</p>
                    <router-link  tag="a" to="/vUrine"  class="buttons-card btn btn-primary v-button-card"><p>Подробнее</p></router-link>
                </div>   
            </div>    
            <div class="card v-recommendations-link vet-cards col">           
                <img src="../../assets/images/recommendations/pos3.jpg" class="card-img-top" alt="После операции,ребилитация">
                <div class="card-body">
                    <h5 class="card-title">Период реабилитации</h5>
                    <p class="card-text">В восстановительный период соблюдение особого режима для животного имеет большое значение. Лечащий врач дает рекомендации, как вести себя в послеоперационный период...</p>
                    <router-link  tag="a" to="/vRehabilitation"  class="buttons-card btn btn-primary v-button-card"><p>Подробнее</p></router-link>
                </div>   
            </div>    
            <div class="card v-recommendations-link vet-cards col">           
                <img src="../../assets/images/recommendations/drip.jpg" class="card-img-top" alt="Капельница">
                <div class="card-body">
                    <h5 class="card-title">Как поставить капельницу</h5>
                    <p class="card-text">Внутривенная инфузия - это введение в организм растворов.Применяется для животных в тяжёлом состоянии, при быстром и резком обезвоживании, остром течении заболеваний и в других случаях...</p>
                    <router-link  tag="a" to="/vDrip"  class="buttons-card btn btn-primary v-button-card"><p>Подробнее</p></router-link>
                </div>   
            </div> 
        </div>
       </div>
    </section>
</template>
<script>
export default {
    name: 'vRecommendations'
}
</script>
<style scoped lang="scss">
.v-button-card{
        display: flex;
        align-items: center;
        max-width: 150px;
        height: 40px;        
        border: none;
        background: hsla(221, 45%, 73%, 1);
        background: linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%);
        background: -moz-linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%);
        background: -webkit-linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%);
        filter: gradient( startColorstr="#9BAFD9", endColorstr="#103783", GradientType=1 );
        border-radius: 4px;
        cursor: pointer;
        p{
            margin-top: 10%;
            font-size: 18px;
            align-items: center;
            text-align: center;
            line-height: 21px;
            font-family: 'Museo Sans Cyrl';
            font-weight: 300;
            color: white; 
        }
        
    }
    .v-recommendations-block{
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        border:none;
    }
    .v-recommendations-title{
        font-size: 36px;
        font-weight: 300;
        text-align: center;
        line-height: 21px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 700;
        color: #757575;
    }
    .v-recommendations-link{
        display: flex;
        flex-direction: column;
        padding: 0;
        flex: 0 0 30%;
        max-width: 30%;
        border-radius: 20px; 
        border: 1px solid #723030;
        img{         
            max-width: 100%;
            border-radius: 20px 20px 0 0 ;
        }
    }
    @media (min-width: 1400px){
    .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
         max-width: 1400px;
    }
    }
    @media (max-width: 1100px){
        .card-text{
            font-size: 12px;
        }
        .card-title{
            font-size: 14px;
        }
    }
    @media (max-width: 1000px){
        .v-recommendations-link{
        flex: 0 0 100%;
        max-width: 100%;
        }
        .v-button-card{
            margin-top: 0;
        }
        .vet-cards{
            margin-top: 50px;
        }
        .v-recommendations-block{
            flex-direction: column;
        }
        .card-text{
            font-size: 10px;
        }
        .card-title{
            font-size: 12px;
        }
        .v-button-card{
            max-width: 100px;
            max-height: 30px;
            p{
                padding: 10px 0 0 0;
                font-size: 10px;   
            }
            
        }
    }
    @media (max-width: 550px){
        span{
        margin-top: 20px;
       }      
    }

</style>