<template>
    <div class="v-carousel col-md-4 col-sm-8">
        <div class="v-carousel-heading">Ветеринарная клиника "ЛИС"</div>
            <div class="v-carousel-slide" :style="{'margin-left': '-' + (100 * currentSlideindex) + '%'}">
            <vCarouselItem
            v-for="item in carousel_data"
            :key="item.id"
            :item_data="item"
        />
            </div> 
    </div>
</template>

<script>
import vCarouselItem from './v-Carousel-item.vue';

export default {
    name: 'vCarousel',
    components:{
        vCarouselItem
    },
    props:{
        carousel_data:{
            type: Array,
            default: () => []
        },
        interval:{
            type:Number,
            default: 0
        }
    },
    data(){
        return{
            currentSlideindex: 0
        }
    },
    methods:{
        prevSlide(){
            if(this.currentSlideindex >= this.carousel_data.length - 1){
                this.currentSlideindex = 0
            }else{
                this.currentSlideindex++   
            }
                    
        },
        nextSlide(){          
            if(this.currentSlideindex > 0){
                this.currentSlideindex--
            }
            
        }
    },
    mounted(){
        if(this.interval > 0){
            let vn =this;
            setInterval(function(){
                vn.prevSlide()
            },vn.interval)
        }
    }

}

</script>

<style  scoped lang="scss">
    .v-carousel{
        max-width: 800px;
        width: 100%;
        max-height: 700px;
        overflow: hidden;
        border-radius: 20px;
    }
    .v-carousel-slide{
        display: flex;
        transition: all ease-in-out .5s;
    }
   
    .v-carousel-slide{
        margin-bottom: 100px;
        img{         
            width: 800px;
            height: 400px;
            border-radius: 20px;
        }
    }
    .v-carousel-heading{
        margin-top: 4%;
        margin-bottom: -50px;
        font-size: 38px;
        text-align: center;
        line-height: 45px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 700;
        color: #757575;
    }
    @media (max-width: 1100px){
    .v-carousel{
        max-width: 600px;
        width: 100%;
        max-height: 600px;
        margin-top: 0;
    }
    .v-carousel-slide{
        margin-top: none;
        margin-bottom: none;    
    }
    .v-carousel-slide img{
        max-width: 600px;
    }

    }
    @media(max-width: 1100px){
        .v-carousel{
            max-width: 600px;;
        }
    }
    @media (max-width: 840px){
    .v-carousel{
        max-width: 500px;
    }
    .v-carousel-heading{
        margin-bottom: -60px;
    }
    .v-carousel-slide{
        margin-bottom: 50px;
    }
    }
    
    @media (max-width: 620px){
        .v-carousel{
            max-width: 400px;
            max-height: 500px;
        }
    }
    @media (max-width: 520px){
        .v-carousel{
            max-width: 300px;
        }
        .v-carousel-heading{
            font-size: 28px;
            line-height: 30px;
        }
    }
    @media (max-width: 420px){
        .v-carousel{
            max-width: 250px;
        }
        .v-carousel-heading{
            font-size: 22px;
            line-height: 25px;
        }
    }
    @media (max-width: 321px){
        .v-carousel{
            max-width: 220px;
        }
    }
</style>