<template>
    <section lass="v-line-animate col-xl-9 col-md-9 col-10">
      <div class="container">
        <div class="v-line-animate-block">
            <svg class="wave-divider" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
            <defs>
                <path id="gentle-wave"
                d="M-160 44c30 0 
                58-18 88-18s
                58 18 88 18 
                58-18 88-18 
                58 18 88 18
                v44h-352z" />
            </defs>
            <g class="wave-parallax1"><use xlink:href="#gentle-wave" x="50" y="3" fill="#BFE2FF"/></g>
            <g class="wave-parallax2"><use xlink:href="#gentle-wave" x="50" y="0" fill="#5e9cd1"/></g>
            <g class="wave-parallax3"><use xlink:href="#gentle-wave" x="50" y="9" fill="#73bbf5"/></g>
            <g class="wave-parallax4"><use xlink:href="#gentle-wave" x="50" y="6" fill="#337AB7"/></g>
        </svg>
        <div class="dark-block">
            <div class="text-container">
                <h1>Ветеринарная клиника ЛИС</h1>
            </div>
            <div class="text-container">
                <h1>+7 (911) 259 83 84</h1>
            </div>
            <div class="text-container">
                <h1>+7 (931) 373 29 42</h1>
            </div>
            <div class="text-container-text">
                <h1>ул. Русановская д.19 к.4</h1>
            </div>
            <div class="text-container">
                <button class="button_gradient btn_anime" @click="openModal">Запись на приём</button>
            </div>
        </div>
        <svg class="wave-divider dark-bg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
            <g class="wave-parallax1"><use xlink:href="#gentle-wave" x="50" y="3" fill="#5e9cd1"/></g>
            <g class="wave-parallax2"><use xlink:href="#gentle-wave" x="50" y="0" fill="#73bbf5"/></g>
            <g class="wave-parallax3"><use xlink:href="#gentle-wave" x="50" y="9" fill="#BFE2FF"/></g>
            <g class="wave-parallax4"><use xlink:href="#gentle-wave" x="50" y="6" fill="#FFFFFF"/></g>
        </svg>
        </div>
        <v-modal v-if="isModalOpen" @close="isModalOpen = false"/>
      </div>
    </section>
</template>

<script>
import vModal from '@/components/modal/v-modal.vue'
export default {
    name: 'vLineAnimate',
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

<style scoped lang="scss">
@import '@/assets/css/modul_btn_gradient.scss';

    .v-line-animate{
        max-width: 1400px;
        width: 100%;
    }
   wave-divider {
    width: 100%;
    height: 60px;
    display:block;    
}
.wave-parallax1 {
    animation: wave-move1 10s linear infinite;
}
.wave-parallax2 {
    animation: wave-move2 8s linear infinite;
}
.wave-parallax3 {
    animation: wave-move3 6s linear infinite;
}
.wave-parallax4 {
    animation: wave-move4 4s linear infinite;
}
@keyframes wave-move1 {
    0% {
        transform: translateX(85px);
    }
    100% {
        transform: translateX(-90px);
    }
}
@keyframes wave-move2 {
    0% {
        transform: translateX(-90px);
    }
    100% {
        transform: translateX(85px);
    }
}
@keyframes wave-move3 {
    0% {
        transform: translateX(85px);
    }
    100% {
        transform: translateX(-90px);
    }
}
@keyframes wave-move4 {
    0% {
        transform: translateX(-90px);
    }
    100% {
        transform: translateX(85px);
    }
}
.dark-block {
    background: #337AB7;
    padding: 50px 0;
    font-size: 26px;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    color: #FFF;
}
.dark-bg {
    background: #337AB7;
}
.light-block {
    background: #FFF;
    padding: 50px 0;
    font-size: 26px;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    color: #337AB7;
} 
.text-container {
  margin-left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.text-container h1 { 
  margin-left: 50px;
  font-size: 50px;
  color:#D3D3D3;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
}
.text-container-text {
  margin-left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.text-container-text h1 { 
  margin-left: 50px;
  font-size: 30px;
  color:#D3D3D3;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
}

.btn_anime{
    margin-top: 50px;
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
    max-width: 1400px;
    width:72%
    }
}
@media (max-width:1550px){
    .text-container{
        margin-left: 30px;
    }
    .text-container-text{
        margin-left: 30px;
    }
}
@media (max-width:1300px){
    .text-container h1{
        font-size: 40px;
    }
    .text-container-text h1{
        font-size: 25px;
    }
    .btn_anime{
        margin-left: auto;
        margin-right: auto;
    }
}
@media (max-width:991px){
    .text-container h1{
        font-size: 30px;
    }
    .text-container-text h1{
        font-size: 20px;
    }
}
@media (max-width:768px){
    .text-container h1{
        font-size: 20px;
    }
    .text-container-text h1{
        font-size: 15px;
    }
    .btn_anime {
        max-width: 250px;
        font-size: 20px;
    }
}
@media (max-width:500px){
    .text-container h1{
        font-size: 15px;
    }
    .text-container-text h1{
        font-size: 12px;
    }
    .btn_anime {
        padding: 0 9px 0 9px;
        height: 50px; 
        max-width: 200px;
        font-size: 16px;
    }
}
@media (max-width:400px){
    .text-container{
        margin-left: 0;
    }
    .text-container-text{
        margin-left: 0;
    }
    .text-container h1{
        font-size: 12px;
    }
    .text-container-text h1{
        font-size: 9px;
    }
    .btn_anime {
        padding: 0 8px 0 8px;
        height: 40px; 
        max-width: 150px;
        font-size: 12px;
    }
}

</style>