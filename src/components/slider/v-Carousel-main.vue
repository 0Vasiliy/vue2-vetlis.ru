<template>
    <section class="v-carousel-main  col-xl-9 col-md-9 col-10">      
      <div class="container">
        <v-carousel
                :carousel_data="sliderItems"
                :interval="2000"
          />
          <v-carousel-item/>
          <div class="v-carousel-title col-xxl-4 col-xl-6 col-md-8">
                <h1 class="slider_subtitle">Ветеринарная клиника "ЛИС" предлагает полный комплекс ветеринарных услуг для поддержания здоровья и красоты Ваших питомцев.Регулярное посещение ветеринарного врача позволит следить за здоровьем Вашего питомца и диагностировать заболевания на ранних стадиях развития для начала своевременного лечения.</h1>
            </div>
      </div>
  </section>
</template>

<script>
import vCarousel from './v-Carousel.vue';
import vCarouselItem from './v-Carousel-item.vue';

export default {
    name: 'vCarouselMain',
    components: {
    vCarousel,
    vCarouselItem
  },
  data(){
    return{
      sliderItems:[
        {id:1, name: 'img1', img:'1.jpg'},
        {id:2, name: 'img2', img:'2.jpg'},
        {id:3, name: 'img3', img:'3.jpg'},
        {id:4, name: 'img4', img:'4.jpg'},
        {id:5, name: 'img4', img:'5.jpg'},
      ]
    }
  }
}

</script>
<style scoped lang="scss">

  .v-carousel-main{
    max-width: 1920px;
    display: flex;
    align-items: center;
    background: hsla(186, 33%, 94%, 1);
    background: linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%);    
    background: -moz-linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%);   
    background: -webkit-linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%);   
    filter: gradient( startColorstr="#EBF4F5", endColorstr="#B5C6E0", GradientType=1 );
    margin-top: 30px;
    border-radius: 20px;
    background-size: auto 100%;
  }
  .v-carousel-title{
    max-width: 100%;
    h1{
        font-size: 24px;
        text-align: center;
        line-height: 35px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 700;
        color: #757575;
    }
  }
</style>