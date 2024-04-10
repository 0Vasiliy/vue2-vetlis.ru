<template>
    <div class="v-contacts">
        <div class="v-footer-contacts">
               <div class="text-container">
                    <h1>Ветеринарная клиника ЛИС</h1>
               </div>
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
                <div class="text-container">
                    <button class="v-footer-btn" @click="openModal">Запись на приём</button>
                </div>
        </div>
        <v-modal v-if="isModalOpen" @close="isModalOpen = false"/>       
    </div>
</template>
<script>
import vModal from '@/components/modal/v-modal.vue'
import vSocial from '@/components/social/v-social.vue'
export default {
    name: 'vContacts',
    components:{
        vModal,
        vSocial
    },
    data(){
        return {
           isModalOpen:false
        }
    },
    methods:{
       openModal(){
           this.isModalOpen = true;
       }
    } 
}
</script>
<style scoped lang="scss">
    .v-contacts{
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 50px;     
    border-radius: 20px;
    background: #485563;
    background: -webkit-linear-gradient(to right, #29323c, #485563);  
    background: linear-gradient(to right, #29323c, #485563); 
    }
    .v-footer-contacts{
    max-width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    font-size: 24px;
    font-weight: 300;
    line-height: 21px;
    font-family: 'Museo Sans Cyrl';
    font-weight: 500;
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
    text-align: left;
    text-decoration: none;
    font-size: 22px;
    font-weight: 300;
    line-height: 28px;
    font-family: 'Museo Sans Cyrl';
    font-weight: 500;
    color: gray
    }
}
.text-container {
    margin-left: 0; 
    z-index: 100;
    }
    .text-container h3 {
    font-size: 24px;
    color: rgba(225,225,225, .01);
    background-image: url("../../assets/images/lis_fon6.jpg");
    background-repeat: repeat;
    -webkit-background-clip:text;
    animation: animate 15s ease-in-out infinite;
    text-transform: uppercase;      
}
.text-container h1 {
    margin-left: 0;
    font-size: 35px;
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
.v-footer-btn { 
  margin-top: 15px;
  max-width: 300px;
  padding: 0 15px 0 15px;
  height: 50px; 
  margin-left: 0;
  font-size: 18px;
  color: rgba(225,225,225, .01);
  background-image: url("../../assets/images/lis_fon6.jpg");
  background-repeat: repeat;
  -webkit-background-clip:text;
  animation: animate 15s ease-in-out infinite;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
}
.v-footer-btn{
    border-radius: 10px;
}
@media(max-width: 450px){
    .text-container h1 {
        font-size: 24px;
    }
    .text-container h3{
        font-size: 18px;
    }
    .v-footer-contacts-phone{
        a{
            font-size: 18px;
        }
    }
    .v-footer-contacts-adress{
        h5{
            font-size: 18px;
        }
    }
   .v-footer-btn{
        font-size: 14px;
    }
}
@media(max-width: 300px){
    .text-container h1 {
        font-size: 20px;
    }
    .text-container h3{
        font-size: 16px;
    }
    .v-footer-contacts-phone{
        a{
            font-size: 16px;
        }
    }
    .v-footer-contacts-adress{
        h5{
            font-size: 16px;
        }
    }
   .v-footer-btn{
        font-size: 12px;
    }
}
</style>