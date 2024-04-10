<template>
    <section class="v-about col-xl-9 col-md-9 col-10" id="carusel">
        <h1>Специализированная ветеринарная помощь для вашего питомца</h1>
        <div class="slideshow">
            <div class="slideshow-item">
                <img src="../../assets/images/about/1.jpg" alt="">
                <div class="slideshow-item-text">
                    <h5>Ветеринарная клиника "ЛИС"</h5>
                    <p>Помогает животным с 2013 года.<br> 11 лет результативной работы.</p>
                </div>
            </div>
            <div class="slideshow-item">
                <img src="../../assets/images/about/3.jpg" alt="">
                <div class="slideshow-item-text">
                    <h5>Ветеринарная клиника "ЛИС"</h5>
                    <p>У нас опытные врачи <br>с 15 летним стажем и более..</p>
                </div>
            </div>
            <div class="slideshow-item">
                <img src="../../assets/images/about/2.jpg" alt="">
                <div class="slideshow-item-text">
                    <h5>Ветеринарная клиника "ЛИС"</h5>
                    <p>Наши врачи регулярно принимают<br>много различных живонтных.<br> У них большой практический опыт.</p>
                </div>
            </div>
            <div class="slideshow-item">
                <img src="../../assets/images/about/4.jpg" alt="">
                <div class="slideshow-item-text">
                    <h5>Ветеринарная клиника "ЛИС"</h5>
                    <p>Мы используем современные методы лечения.<br>Мы всегда стремимся помочь и<br>ведём свомх пациентов.</p>            
                </div>
             </div>
        </div>
        <h2>Ветеринарная клиника "ЛИС" предлагает полный комплекс ветеринарных услуг для поддержания здоровья и красоты Ваших питомцев. Регулярное посещение ветеринарного врача позволит следить за здоровьем Вашего питомца и диагностировать заболевания на ранних стадиях развития для начала своевременного лечения.</h2>
        <router-link  tag="a" to="/vCarouselMain" class="v-button-slider"><span class="v-button-title">Подробнее о нас</span></router-link>
    </section>
</template>
<script>
export default {
    name: 'vAbout'
}
</script>
<style scoped>
   .v-about{   
    max-width: 74%;
    width: 1320px;
    border: 1px solid gray;
    border-radius: 20px;
    margin-top: 30px;
    background: hsla(186, 33%, 94%, 1);
   }
   .v-button-slider{
      display: flex;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 20px;
      width: 200px;
      height: 40px;        
      border: none;
      background: hsla(221, 45%, 73%, 1);
      background: linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%);
      background: -moz-linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%);
      background: -webkit-linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%);
      filter: gradient( startColorstr="#9BAFD9", endColorstr="#103783", GradientType=1 );
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
    }
  .v-button-title{
      font-size: 18px;
      align-items: center;
      text-align: center;
      line-height: 21px;
      font-family: 'Museo Sans Cyrl';
      font-weight: 300;
      color: white;
      }
   h1{
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 36px;
    line-height: 28px;
    font-family: 'Museo Sans Cyrl';
    font-weight: 500;
    color: #757575;
   }
   h2{
    text-align: center;
    padding: 10px 10px 0 10px;
    font-size: 24px;
    line-height: 24px;
    font-family: 'Museo Sans Cyrl';
    font-weight: 300;
    color: #757575;
    }   
   .slideshow {
    width: 100%;
    height: 500px;
    position: relative;
    overflow: hidden;
    /* background: #000; */
    background: teal;
    margin: 20px 0;
}
.slideshow-item {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    animation: slideanim 40s infinite;
    pointer-events: none;
}
.slideshow-item:nth-child(1),
.slideshow-item:nth-child(1) img {
    animation-delay: 0;
}
.slideshow-item:nth-child(2),
.slideshow-item:nth-child(2) img {
    animation-delay: 10s;
}
.slideshow-item:nth-child(3),
.slideshow-item:nth-child(3) img {
    animation-delay: 20s;
}
.slideshow-item:nth-child(4),
.slideshow-item:nth-child(4) img {
    animation-delay: 30s;
}
.slideshow-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: zoom 40s infinite;
}
.slideshow-item-text {
    max-width: 50%;
    position: absolute;
    bottom: 20px;
    left: 20px;
    background-color: rgba(0,0,0,0.7);
    color: #fff;
    padding: 20px 30px;
    font-family: Verdana, sans-serif;   
}
.slideshow-item-text h5 {
    font-size: 22px;
    margin: 0 0 10px 0;
    color: #BFE2FF;
}
.slideshow-item-text p {
    font-size: 15px;
    margin-bottom: 10px;
}
@keyframes slideanim {
    12.5%{
        opacity: 1;
        pointer-events: auto;
    }
    25%{
        opacity: 1;
        pointer-events: auto;
    }    
    37.5%{
        opacity: 0;
    }
}
@keyframes zoom {
    50%{
        transform: scale(1.3);
    }    
}
@media screen and (max-width: 1100px){
    .slideshow-item-text{
        max-width: 75%;
    }
}
@media(max-width: 768px){
    .v-about{
    flex: 0 0 82%;
    max-width: 82%;
   }
   h1{
    font-size: 24px;
    padding-left: 10px;
    padding-right: 10px;
   }
   h2{
    font-size: 14px;
   }
   .slideshow-item-text h5{
    font-size: 18px;
   }
   .slideshow-item-text p{
    font-size: 12px;
   }
}
@media screen and (max-width: 456px){
    .slideshow-item-text {
        bottom: 0;
        left: 3%;
        right: 3%;
        max-width: 100%;
        padding: 10px 20px;
    }
    .slideshow-item-text h5 {
        font-size: 16px;
    }
    .slideshow-item-text p {
        font-size: 12px;
    }
}
@media screen and (max-width: 356px){
    .slideshow-item-text {
      
        padding: 7px 15px;
    }
    .slideshow-item-text h5 {
        font-size: 12px;
    }
    .slideshow-item-text p {
        font-size: 10px;
    }
}
</style>