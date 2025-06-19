<template>
    <section class="v-carousel-main  col-xl-9 col-md-9 col-10" :key="forceRenderKey">   
      <div class="container">
       <div class="v-carousel-block">
        <v-carousel
                :carousel_data="sliderItems"
                :interval="2000"
          />
          <v-carousel-item/>
          <div class="v-carousel-title col-md-8">
            <h2>Мы помогаем с 2013г.</h2>
          </div>
       </div>
       <v-yan2/>
       <div class="v-carousel-content">
          <h2>Мы предоставляем широкий спектр ветеринарных услуг, включая хирургию, терапию, дерматологию, кардиологию, стоматологию, УЗИ и многое другое. Независимо от потребностей вашего питомца, у нас есть все необходимое для его полноценного лечения и ухода.</h2>
          <h2>Цены на ветеринарные услуги в нашей клинике являются демократичными, несмотря на высокий уровень профессионализма и качества обслуживания.</h2>
          <h2>Мы стараемся использовать современное оборудование и методы, для более точной диагностики заболеваний. Высокий уровень профессионализма ветеринарных специалистов, и практический опыт лечения домашних животных обеспечивает качество лечения и профилактики питомцев. Клиника работает совместно с ведущими ветеринарными лабораториями г. Санкт-Петербурга, поэтому лабораторные анализы в нашей клинике выполняются быстро и качественно.</h2>
          <h2>Мы стараемся вылечить вашего любимца, учитывая, в первую очередь, его состояние здоровья.</h2>
       </div>
       <div class="v-footer-block">
                <div class="v-footer-services">
                   <div class="text-container">
                        <h3>Популярные услуги</h3>
                   </div>
                    <router-link tag="a" to="/vTherapy" class="v-footer-services-mini"><span>Терапия</span></router-link>
                    <router-link tag="a" to="/vSurgery" class="v-footer-services-mini"><span>Хирургия</span></router-link>
                    <router-link tag="a" to="/vUzi" class="v-footer-services-mini"><span>Узи Диагностика</span></router-link>
                    <router-link tag="a" to="/vSterilization" class="v-footer-services-mini"><span>Стерилизиция и кастрация</span></router-link>
                    <router-link tag="a" to="/vTeeth" class="v-footer-services-mini"><span>Ультразвуковая чистка зубов</span></router-link>
                    <router-link tag="a" to="/vLab" class="v-footer-services-mini"><span>Лабораторная диагностика</span></router-link>
                    <router-link tag="a" to="/vVaccinationChip" class="v-footer-services-mini"><span>Вакцинация и чипирование</span></router-link>
                </div>
                <div class="v-footer-vet">
                    <div class="text-container">
                        <h3>Популярные статьи</h3>
                   </div>
                   <router-link  tag="a" to="/vVomitingCats"  class="v-footer-vet-mini"><span>Рвота у кошек</span></router-link>
                   <router-link  tag="a" to="/vVomitingDog"  class="v-footer-vet-mini"><span>Рвота у собак</span></router-link>
                   <router-link  tag="a" to="/vPets"  class="v-footer-vet-mini"><span>Готовимся к появлениию питомца</span></router-link>
                   <router-link  tag="a" to="/vUrine"  class="v-footer-vet-mini"><span>Как правильно собрать мочу</span></router-link>
                   <router-link  tag="a" to="/vRehabilitation"  class="v-footer-vet-mini"><span>Период реабилитации</span></router-link>
                   <router-link  tag="a" to="/vDrip"  class="v-footer-vet-mini"><span>Как поставить капельницу</span></router-link>
                </div>
                <div class="v-footer-contacts">
                    <div class="text-container">
                        <h3>Контакты</h3>
                   </div>
                   <div class="v-footer-contacts-phone">
                        <a class="v-footer-contacts-phone-link-old" href="tel:+79112598384"><img src="@/assets/icons/phone.png" alt="#">+7 (911) 259 83 84</a>
                        <a class="v-footer-contacts-phone-link-new" href="tel:+79313732942"><img src="@/assets/icons/phone.png" alt="#">+7 (931) 373 29 42</a>
                   </div>
                   <div class="v-footer-contacts-adress">
                        <h5>г. Санкт-Петербург<br>ул.Русановская д.19 к.4<br>с 10.00-21.00</h5>
                   </div>
                  <v-social class="v-footer-contacts-social"/>
                </div>
        </div>
      </div>
  </section>
</template>

<script>
import vCarousel from './v-Carousel.vue';
import vCarouselItem from './v-Carousel-item.vue';
import vSocial from '../social/v-social.vue'
import vYan2 from '../yan/v-yan2.vue'

export default {
    name: 'vCarouselMain',
    components: {
    vCarousel,
    vCarouselItem, 
    vSocial,
    vYan2,
  },
  data(){
    return{
      forceRenderKey: 0,
      sliderItems:[
        {id:1, name: 'img1', img:'1.jpg'},
        {id:2, name: 'img2', img:'2.jpg'},
        {id:3, name: 'img3', img:'3.jpg'},
        {id:4, name: 'img4', img:'4.jpg'},
        {id:5, name: 'img5', img:'5.jpg'},
      ]
    }
  },
  methods: {
    reRender() {
      this.forceRenderKey++;
    }
  }
}
</script>
<style scoped lang="scss">

  .v-carousel-main{
    max-width: 1400px;
    display: flex;
    align-items: center;
    margin-top: 30px;    
  }
  .v-carousel-title{
    max-width: 100%;
    margin-top: -70px;
    h2{
        padding-left: 10px;
        padding-right: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: center;
        font-size: 36px;
        line-height: 32px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 300;
        color: #757575;
    }
  }

  .v-carousel-block{
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    background: hsla(186, 33%, 94%, 1);
    background: linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%);    
    background: -moz-linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%);   
    background: -webkit-linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%);   
    filter: gradient( startColorstr="#EBF4F5", endColorstr="#B5C6E0", GradientType=1 );
    border-radius: 20px;
    background-size: auto 100%;
  }
  .v-carousel-content{
    margin-top: 20px;
    border: 1px solid #757575;
    border-radius: 20px;
    h2{
        padding-left: 10px;
        padding-right: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: left;
        font-size: 24px;
        line-height: 32px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 300;
        color: #757575;
    }
  }
  // footer
  .v-footer-block{
      margin-top: 20px;
      display: flex;
      max-width: 100%;
      border-radius: 20px;
      background: #485563;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #29323c, #485563);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #29323c, #485563); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }

  .v-footer-services{
      margin-top: 20px;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 0 0 30%;
      max-width: 30%;
      border: 1px solid gray;
      border-radius: 20px;
      padding: 30px;  
      h3{ 
          color:gray ;
      }
      &-mini{
          margin-left: 0;
          margin-top: 5px;
          color: gray;
          text-decoration: none;
      }
      &-mini:hover{
          color: white ;
          transition: all 0.5s ease-in-out;
      }
  }
  .text-container {
    margin-left: 0; 
    z-index: 100;
    }
  .text-container h3 {
  font-size: 16px;
  color: rgba(225,225,225, .01);
  background-image: url("../../assets/images/lis_fon6.jpg");
  background-repeat: repeat;
  -webkit-background-clip:text;
  animation: animate 15s ease-in-out infinite;
  text-transform: uppercase;
    
  }
  @keyframes animate {
    0%, 100% {
      background-position: left top;
    }
    25%{
      background-position: right bottom;
     }
    50% {
      background-position: left bottom;
    }
    75% {
      background-position: right top;
    }   
  }
.v-footer-vet{
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 0 0 30%;
        max-width: 30%;
        border: 1px solid gray;
        border-radius: 20px;
        padding: 30px;  
        h3{
            color:gray ;
        }
        &-mini{
            margin-left: 0;
            margin-top: 5px;
            color: gray;
            text-decoration: none;
        }
        &-mini:hover{
            color: white ;
            transition: all 0.5s ease-in-out;
        }
    }
.v-footer-contacts{
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 0 30%;
    max-width: 30%;
    border: 1px solid gray;
    border-radius: 20px;
    padding: 30px;
    &-social{
        display: flex;
    }
}
.v-footer-contacts-phone{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    margin-left: 0;
    img{
    margin-right: 10px;
    }
    a{
    text-decoration: none;
    font-size: 18px;
    font-weight: 300;
    line-height: 21px;
    font-family: 'Museo Sans Cyrl';
    font-weight: 400;
    color: gray;
    }
    a:hover{
    color: white ;
    transition: all 0.5s ease-in-out;
    }
    }
.v-footer-contacts-phone-link-new{
    margin-top: 15px;
    }
.v-footer-contacts-social{
    margin-left: 0;
    margin-top: 10px;
}
.v-footer-contacts-adress{
    margin-top: 15px;
    display: flex;
    margin-left: 0;
    h5{
    text-align: left;
    text-decoration: none;
    font-size: 20px;
    font-weight: 300;
    line-height: 28px;
    font-family: 'Museo Sans Cyrl';
    font-weight: 400;
    color: gray
    }
}

@media (max-width: 1450px){
    .v-footer-block{
        flex-direction: column;
    }
    .v-footer-services{
        flex: 0 0 100%;
        max-width: 100%;
        width: 90%;
    }
    .v-footer-vet{
        flex: 0 0 100%;
        max-width: 100%;
        width: 90%;
    }
    .v-footer-contacts{
        flex: 0 0 100%;
        max-width: 100%;
        width: 90%;
    }
}

@media (max-width: 1100px){
    .v-carousel-title{
        margin-top: -40px;
    }
}

    @media (max-width: 840px){
     .v-carousel-title{
        max-width: 500px;
        h2{
          font-size: 24px;
        }
        
    }
    .v-carousel-content{
      h2{
          font-size: 18px;
          line-height: 24px;
        }
    }
    }
    
    @media (max-width: 620px){
      .v-carousel-title{
        margin-top: -70px;
        max-width: 400px;
        } 
        .v-carousel-content{
          h2{
          margin-top: 10px;
          margin-bottom: 10px;
          font-size: 16px;
        }
    }
        
    }
    @media (max-width: 520px){
      .v-carousel-title{
          margin-top: -150px;
          max-width: 300px;
        }
    }
    @media (max-width: 420px){
      .v-carousel-title{
            max-width: 250px;
            h2{
              font-size: 16px;
            }
        }
    }
    @media(max-width: 450px){
        .v-footer-services-mini{
            font-size: 12px;
            text-align: left;
        }
        .v-footer-vet-mini{
            font-size: 12px;
            text-align: left;
        }
        .v-footer-contacts-phone a{
          font-size: 13px;
        }
    }
</style>