<template>
    <section class="v-vetarticles col-xl-9 col-md-9 col-10" id="vetart">
       <div class="container">
        <h1 class="v-vetaricles-title">Полезные статьи</h1>
           <div class="v-vetarticles-card-block">
            <div class="card v-vetarticles-card col">           
                <img src="../../assets/images/vetarticles/kot-23.jpg" class="card-img-top" alt="Рвота у кошек">
                <div class="card-body">
                    <h5 class="card-title">Рвота у кошек</h5>
                    <p class="card-text">Рвота у кошек — достаточно распространенное явление, вызываемое различными факторами. Рефлекторное извержение содержимого желудка через рот — не болезнь, а симптом, указывающий на нарушение...</p>
                    <router-link  tag="a" to="/vVomitingCats" class="btn btn-primary v-button-card"><p>Подробнее</p></router-link>
                </div>   
            </div>
            <div class="card v-vetarticles-card vet-cards col">           
                <img src="../../assets/images/vetarticles/dog-22.jpg" class="card-img-top" alt="Рвота у собак">
                <div class="card-body">
                    <h5 class="card-title">Рвота у собак</h5>
                    <p class="card-text">Рвота у собак — достаточно распространенное явление, с которым сталкиваются многие владельцы. Она может быть вызвана различными причинами, от простого переедания до серьезных заболеваний. Если ...</p>
                    <router-link  tag="a" to="/vVomitingDogs" class="buttons-card btn btn-primary v-button-card"><p>Подробнее</p></router-link>
                </div>   
            </div>
            <div class="card v-vetarticles-card vet-cards col">           
                <img src="../../assets/images/vetarticles/pets.jpg" class="card-img-top" alt="Домашний питомец">
                <div class="card-body">
                    <h5 class="card-title">Готовимся к появлению домашнего питомца</h5>
                    <p class="card-text">Маленькие четвероногие друзья — полноправные члены нашей семьи. Если семейный совет одобрил нового жителя, на примете есть хороший ветеринар, самое время заняться подготовкой ...</p>
                    <router-link  tag="a" to="/vPets" class="buttons-card btn btn-primary v-button-card"><p>Подробнее</p></router-link>
                </div>   
            </div>
           </div>
         <v-yan/>
        <!-- <a href="#" class="buttons-cards btn btn-primary">Больше интересных статей</a>   -->
       </div>

    </section>

</template>
<script>
import vYan from '../yan/v-yan.vue'
export default {
    name: 'vVetarticles',
    components:{
        vYan,
    }
}
</script>
<style scoped lang="scss">
    .v-button-card{
        margin-top: 50px;
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
    .v-vetarticles{
        margin-top: 30px;
    }
    .v-vetarticles-card-block{
        margin-top: 50px;
        display: flex;
    }
    .v-vetarticles-card{
        flex: 0 0 30%;
        max-width: 30%;
        border-radius: 20px; 
        border: 1px solid #723030;
        img{
            border-radius: 20px 20px 0 0; 
        }
    }
    .v-vetaricles-title{
        font-size: 36px;
        font-weight: 300;
        text-align: center;
        line-height: 21px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 700;
        color: #757575;
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
        .v-vetarticles-card{
        flex: 0 0 100%;
        max-width: 100%;
        }
        .v-button-card{
            margin-top: 0;
        }
        .vet-cards{
            margin-top: 50px;
        }
        .v-vetarticles-card-block{
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
 
</style>