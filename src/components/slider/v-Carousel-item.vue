<template>
    <div class="v-carousel-item">
        <img :src=" require('@/assets/images/' + item_data.img)" alt="">
    </div>
</template>

<script>
export default {
    name: 'vCarouselItem',
    props:{
        item_data:{
            type: Object,
            default: () => {}
        }      
    }
}
</script>

<style scoped>
.v-carousel-item{
    margin-top: 100px;
    margin-bottom: 100px;
    max-width: 120%;
    max-height: 400px;
    border-radius: 20px;
    background-size: cover auto 100%;
    background-repeat: no-repeat center;
}
img{
  width: 800px;
  height: 400px;  
  border-radius: 20px;
}
@media (max-width: 1100px){
    .v-carousel-item img{
        width: 600px;
    }

}
@media (max-width: 840px){
    .v-carousel-item img{
        width: 500px;
    }
    .v-carousel-item{
        max-width: 100%;
    }
}

@media (max-width: 620px){
    .v-carousel-item img{
        width: 400px;
        height: 100%;
    }
}
@media (max-width: 520px){
    .v-carousel-item img{
        width: 300px;
    }
}
@media (max-width: 420px){
    .v-carousel-item img{
        width: 250px;
    }
}
@media (max-width: 321px){
        .v-carousel-item img{
        width: 220px;
    }
    }
</style>