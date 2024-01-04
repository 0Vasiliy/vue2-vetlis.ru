<template>
    <div class="v-vetarticles">
       <div class="container">
        <h1 class="v-vetaricles-title">Полезные статьи</h1>
           <div class="v-vetarticles-card-block">
            <div class="card v-vetarticles-card col">           
                <img src="../../assets/images/vetarticles/kot-23.png" class="card-img-top" alt="kot-23">
                <div class="card-body">
                    <h5 class="card-title">Рвота у кошек</h5>
                    <p class="card-text">Рвота у кошек — достаточно распространенное явление, вызываемое различными факторами. Рефлекторное извержение содержимого желудка через рот — не болезнь, а симптом, указывающий на нарушение...</p>
                    <router-link  tag="a" to="/vVomitingCats"  class="buttons-card btn btn-primary">Подробнее</router-link>
                </div>   
            </div>
            <div class="card v-vetarticles-card col">           
                <img src="../../assets/images/vetarticles/dog-22.png" class="card-img-top" alt="dog-22">
                <div class="card-body">
                    <h5 class="card-title">Рвота у собак</h5>
                    <p class="card-text">Рвота у собак — достаточно распространенное явление, с которым сталкиваются многие владельцы. Она может быть вызвана различными причинами, от простого переедания до серьезных заболеваний. Если ...</p>
                    <router-link  tag="a" to="/vVomitingDogs"  class="buttons-card btn btn-primary">Подробнее</router-link>
                </div>   
            </div>
            <div class="card v-vetarticles-card col">           
                <img src="../../assets/images/vetarticles/pets.png" class="card-img-top" alt="pets">
                <div class="card-body">
                    <h5 class="card-title">Готовимся к появлению домашнего питомца</h5>
                    <p class="card-text">Маленькие четвероногие друзья — полноправные члены нашей семьи. Если семейный совет одобрил нового жителя, на примете есть хороший ветеринар, самое время заняться подготовкой ...</p>
                    <router-link  tag="a" to="/vPets"  class="buttons-card btn btn-primary">Подробнее</router-link>
                </div>   
            </div>
           </div>
        <!-- <a href="#" class="buttons-cards btn btn-primary">Больше интересных статей</a>   -->
       </div>
    </div>

</template>
<script>

export default {
    name: 'vVetarticles',
}
</script>
<style scoped lang="scss">
    .v-vetarticles{
        margin-left: 11%;
        margin-right: 11%;
        margin-top: 100px;
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
    .buttons-cards{
        margin-top: 50px;
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
         max-width: 1420px;
    }
    }
</style>