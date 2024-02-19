<template>
    <section class="v-carousel-main  col-xl-9 col-md-9 col-10" id="carusel">      
      <div class="container">
        <v-carousel
                :carousel_data="sliderItems"
                :interval="2000"
          />
          <v-carousel-item/>
          <div class="v-carousel-title col-md-8">
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
        {id:5, name: 'img5', img:'5.jpg'},
      ]
    }
  }
}

</script>
<style scoped lang="scss">

  .v-carousel-main{
    max-width: 1400px;
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
    margin-top: -70px;
    h1{
        margin-top: 50px;
        margin-bottom: 50px;
        font-size: 24px;
        text-align: center;
        line-height: 35px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 700;
        color: #757575;
    }
  }
  @media (max-width: 1100px){
    .v-carousel-title{
        margin-top: -40px;
        align-items: center;      
        max-width: 600px;
    }
}

    @media (max-width: 840px){
     .v-carousel-title{
        max-width: 500px;
        h1{
          font-size: 18px;
          line-height: 35px;
        }
    }
    }
    
    @media (max-width: 620px){
      .v-carousel-title{
        margin-top: -70px;
          max-width: 400px;
            h1{
          margin-bottom: 30px;
          font-size: 16px;
        }
        }
    }
    @media (max-width: 520px){
      .v-carousel-title{
          margin-top: -150px;
          max-width: 300px;
          h1{
            line-height: 25px;
          }
        }
    }
    @media (max-width: 420px){
      .v-carousel-title{
            margin-top: -170px;
            max-width: 250px;
        }
    }

</style>