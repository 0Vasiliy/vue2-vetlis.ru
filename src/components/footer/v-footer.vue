<template>
    <section class="v-footer" id="footer">
        <div class="container">
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
                        <h5>ул.Русановская д.19 к.4</h5>
                   </div>
                  <div class="v-footer-contacts-social">
                    <a href="https://vk.com/vetlis" class="v-sidepanel_link"> <img src="@/assets/icons/social/vkontakte.svg" alt="vkontakte"></a>
                    <a href="#" class="v-sidepanel_link"> <img src="@/assets/icons/social/telegram.svg" alt="telegram"></a>
                  </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

export default {
    name: 'vFooter',
}
</script>
<style scoped lang="scss">
    .v-footer-block{
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
    margin-top: 20px;
}
.v-footer-contacts-adress{
    margin-top: 15px;
    display: flex;
    margin-left: 0;
    h5{
    text-decoration: none;
    font-size: 20px;
    font-weight: 300;
    line-height: 21px;
    font-family: 'Museo Sans Cyrl';
    font-weight: 400;
    color: gray
    }
}
@media (min-width: 1400px)
{
    .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container
     {
    max-width: 1400px;
    width: 72%;
    }
}
</style>