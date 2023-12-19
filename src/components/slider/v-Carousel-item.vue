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
  overflow: hidden;
}

</style>