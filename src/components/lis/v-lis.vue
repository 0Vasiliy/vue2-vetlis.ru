<template>
    <section class="v-lis col-xl-9 col-md-9 col-10">
       <div class="container">
            <div class="v-lis-block">
                <div class="wave-lis"> 
                    <div class="text-container-lis">
                        <h1>Ветеринарная клиника <br>ЛИС</h1>
                    </div>
                </div>
                <div class="wave-blok">
                  <div class="wave-block-lis">
                    <div class="wave">
                    <div class="text-container">
                        <h1>Лечение</h1>
                    </div>
                </div>
                <div class="wave">
                    <div class="text-container">
                        <h1>Иследование</h1>
                    </div>
                </div>
                <div class="wave">
                    <div class="text-container">
                        <h1>Стремление</h1>
                    </div>
                </div>
                  </div>
                  <div class="wave">
                    <div class="text-container">
                        <button class="button_gradient btn_lis" @click="openModal">Запись на приём</button>
                    </div>
                  </div>
                </div>
            </div>
            <v-modal v-if="isModalOpen" @close="isModalOpen = false"/>
       </div>
    </section>
</template>

<script>
import vModal from '@/components/modal/v-modal.vue'

export default {
   name: 'vLis',
    components:{
        vModal,
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

<style>
@import '@/assets/css/modul_btn_gradient.scss';
.v-lis-block{
    margin: auto;
    font-family: sans-serif;
    overflow: auto;  
    background: #bdc3c7;
    background: -webkit-linear-gradient(to right, #abbaab, #bdc3c7);  
    background: linear-gradient(to right, #abbaab, #bdc3c7); 
    background-size: 400% 400%;
    background-attachment: fixed;
    padding:75px 0 75px 0;
    border-radius: 20px;
}

.wave-blok{
    display: flex;
    align-items: center;
}
@keyframes gradient {
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0% 0%;
    }
}

.wave-lis {
    max-width: 1000px;
    animation: wave-lis 10s -3s linear infinite;
    transform: translate3d(0, 0, 0);    
}
 
.wave-lis:nth-of-type(2) {
    bottom: -1.25em;
    animation: wave 18s linear reverse infinite;
    opacity: 0.8;
}

.wave-lis:nth-of-type(3) {
    bottom: -2.5em;
    animation: wave 20s -1s reverse infinite;
    opacity: 0.9;
}

@keyframes wave-lis {
    2% {
        transform: translateX(1);
    }

    25% {
        transform: translateX(-25%);
    }

    50% {
        transform: translateX(-50%);
    }

    75% {
        transform: translateX(-25%);
    }

    100% {
        transform: translateX(1);
    }
}  

.text-container {
  margin-left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.text-container-lis{
  margin-left: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  margin-bottom: 70px;  
}
.text-container-lis h1{
  font-size: 75px;
  color: rgba(225,225,225, .01);
  background-image: url("../../assets/images/lis_fon3.jpg");
  background-repeat: repeat;
  -webkit-background-clip:text;
  animation: animate 15s ease-in-out infinite;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
}

.text-container h1 { 
  margin-left: 50px;
  font-size: 50px;
  color: rgba(225,225,225, .01);
  background-image: url("../../assets/images/lis_fon6.jpg");
  background-repeat: repeat;
  -webkit-background-clip:text;
  animation: animate 15s ease-in-out infinite;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
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
@media (min-width: 1400px)
{
    .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container
     {
    max-width: 1350px;
    }
}
@media(max-width: 1600px){
    .wave-lis{
        max-width: 100%;
    }
    .text-container-lis{
        margin-left: 50%;
    }
    .text-container-lis h1{
        font-size: 60px;
    }
    .text-container h1{
        margin-left: 0;
        font-size: 40px;
    }
    .btn_lis{
        max-width: 250px; 
        font-size: 22px;
        margin-left: 0;
    }
}
@media(max-width: 1450px){
    .text-container-lis h1{
        font-size: 50px;
    }
}
@media(max-width: 1200px){
    .text-container-lis h1{
        font-size: 40px;
    }
    .text-container h1{
        font-size: 30px;
    }
    .wave-blok{
        flex-direction: column;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start
    }
    .btn_lis{
        margin-top: 30px;       
    }
   
}
@media(max-width: 980px){
    .text-container-lis{
        margin-bottom: 30px;
    }
    .text-container-lis h1{
        font-size: 30px;
    }
    .text-container h1{
        font-size: 22px;
    } 
    .btn_lis{
        max-width: 200px; 
        font-size: 16px;
        height: 50px;
    }
}

@media(max-width: 670px){
    .text-container-lis h1{
        font-size: 25px;
    }
    .text-container{
        margin-left: 70px;
    }
}
@media(max-width: 490px){
    .text-container-lis h1{
        font-size: 20px;
    }
    .text-container h1{
        font-size: 18px;
    } 
    .btn_lis{
        max-width: 150px; 
        font-size: 12px;
        height: 40px;
    }
   }
   @media(max-width: 450px){
    .text-container-lis h1{
        font-size: 16px;
    }
    .text-container h1{
        font-size: 14px;
    } 
    .btn_lis{
        max-width: 130px; 
        font-size: 9px;
        height: 40px;
    }
    .v-lis-block{
        padding:35px 0 35px 0;
    }
   }
   @media(max-width: 370px){
    .text-container-lis h1{
        font-size: 14px;
    }
    .text-container h1{
        font-size: 13px;
    } 
    .btn_lis{
        max-width: 120px; 
        font-size: 8px;
    } 
   }
</style>