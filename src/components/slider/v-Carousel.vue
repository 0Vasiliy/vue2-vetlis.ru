<template>
    <div class="v-carousel col-md-4 col-sm-8 col-8">
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
        width: 600px;
        overflow: hidden;
        border-radius: 20px;
    }
    .v-carousel-slide{
        display: flex;
        transition: all ease-in-out .5s;
    }
   
    .v-carousel-slide{
        margin-top: 100px;
        margin-bottom: 100px; 
        img{         
            width: 600px;
            height: 400px;
            border-radius: 20px;
        }
    }

</style>