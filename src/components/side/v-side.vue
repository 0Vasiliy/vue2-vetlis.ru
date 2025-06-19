<template>
    <div class="v-side" id="side">       
        <div class="v-side-right" id="side2">
               <v-header-logo class="side-comp side-logo"/>
            <v-header-lis class="side-comp"/>
            <v-header-vet class="side-comp side-vet"/>
            <div class="line-mini"></div>
            <v-header-adress class="side-adress"/>
            <div class="line-mini"></div>
            <v-header-phone class="side-comp"/>
            <button type="button" class="v-button side-comp" id="phone_btn" @click="openModal">
                <h1 class="v-button-title">Запись на приём</h1>
            </button>
              <div class="slideshow">
            <div class="slideshow-item">
                <img src="../../assets/images/side/21.jpg" alt="">
            </div>
            <div class="slideshow-item">
                <img src="../../assets/images/side/20.jpg" alt="">
            </div>
            <div class="slideshow-item">
                <img src="../../assets/images/side/23.jpg" alt="">
            </div>
            <div class="slideshow-item">
                <img src="../../assets/images/side/24.jpg" alt="">
             </div>
        </div>
         
        </div>  
        <div class="v-side-right" id="side3">
               <v-header-logo class="side-comp side-logo"/>
            <v-header-lis class="side-comp"/>
            <v-header-vet class="side-comp side-vet"/>
            <div class="line-mini"></div>
            <v-header-adress class="side-adress"/>
            <div class="line-mini"></div>
            <v-header-phone class="side-comp"/>
            <button type="button" class="v-button side-comp" id="phone_btn" @click="openModal">
                <h1 class="v-button-title">Запись на приём</h1>
            </button>
              <div class="slideshow">
            <div class="slideshow-item">
                <img src="../../assets/images/side/21.jpg" alt="">
            </div>
            <div class="slideshow-item">
                <img src="../../assets/images/side/20.jpg" alt="">
            </div>
            <div class="slideshow-item">
                <img src="../../assets/images/side/23.jpg" alt="">
            </div>
            <div class="slideshow-item">
                <img src="../../assets/images/side/24.jpg" alt="">
             </div>
        </div>
         
        </div>   
        <v-modal v-if="isModalOpen" @close="isModalOpen = false"/>       
    </div>
</template>
<script>
import vHeaderLogo from '@/components/header/header-logo/v-header-logo.vue'
import vHeaderLis from '@/components/header/header-lis/v-header-lis.vue'
import vHeaderVet from '@/components/header/header-vet/v-header-vet.vue'
import vHeaderAdress from '@/components/header/header-adress/v-header-adress.vue'
import vHeaderPhone from '@/components/header/header-phone/v-header-phone.vue'
import vModal from '@/components/modal/v-modal.vue'


export default {
    name: 'v-side',
    components:{
        vHeaderLogo,
        vHeaderLis,
        vHeaderVet,
        vHeaderAdress,
        vHeaderPhone,
        vModal,
    },
    data(){
        return {
           isModalOpen: false,
           isFixed: false,
           scrollPosition: 0
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods:{
       openModal(){
           this.isModalOpen = true;
       },
       handleScroll() {
           const sideElement = document.getElementById('side');
           const sideRightElement = document.getElementById('side2');
           const sideRightElement3 = document.getElementById('side3');
           
           if (!sideElement || !sideRightElement || !sideRightElement3) return;

           const rect = sideElement.getBoundingClientRect();
           const windowHeight = window.innerHeight;
           const scrollProgress = Math.min(1, Math.abs(rect.top) / (windowHeight / 2));
           
           // Если элемент в зоне видимости
           if (rect.top >= 0) {
               if (this.isFixed) {
                   sideRightElement.classList.remove('fixed');
                   sideRightElement3.classList.remove('fixed');
                   sideRightElement.style.transform = 'translateY(0)';
                   sideRightElement3.style.transform = 'translateY(0)';
                   this.isFixed = false;
               }
           }
           // Если элемент начинает уходить за верх экрана
           else if (rect.top < 0) {
               const progress = Math.abs(rect.top) / windowHeight;
               
               sideRightElement.style.transform = `translateY(${-progress * 100}%)`;
               sideRightElement3.style.transform = `translateY(${-progress * 100}%)`;
               
               if (!this.isFixed && progress >= 0.5) {
                   sideRightElement.classList.add('fixed');
                   sideRightElement3.classList.add('fixed');
                   this.isFixed = true;
               }
           }
       }
    }  
}
</script>

<style scoped lang="scss">
@import '@/assets/css/modul_btn.scss';

    .v-side{
        margin-right: 0;
        flex: 0 0 30%;
        max-width: 30%;
        border: 1px solid gray;
        border-radius: 20px;
        padding: 30px;
        position: relative;
        overflow: hidden;
        img{
            border-radius: 20px;
        }
    }
    .line-mini{
        width:100%;
        height: 2px;
        background: teal;
    }
    .v-button{
        margin-left: 0;
    }
   .v-side-right{
    // position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 100%;
    left: 0;
    padding: 0 30px;
    box-sizing: border-box;
    transition: transform 0.5s ease;
    opacity: 1;
    visibility: visible;
   }
   #side2 {
    top: 0;
   }
   #side3 {
    top: 100%;
   }
   .v-side-right.fixed {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    left: 0;
    padding: 0 30px;
    opacity: 1;
    visibility: visible;
   }
   .side-adress{
    margin-top: 10px;
    width: 100%;
   }
   .side-comp{
    margin-top: 20px;
    width: 100%;
   }
   .side-vet{
    margin-bottom: 10px;
    width: 100%;
   }
   @media (max-width: 1400px){
    .v-side-right{
        padding: 0 30px;
    }
   }
   @media (max-width: 1200px){
    .v-side-right{
        padding: 0 30px;
    }
   }

// Анимация
.slideshow {
    width: 100%;
    height: 900px;
    position: relative;
    overflow: hidden;
    background: teal;
    margin: 20px 0;
    border-radius: 20px;
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

@media(max-width: 768px){
//     .v-about{
//     flex: 0 0 82%;
//     max-width: 82%;
//    }
}

</style>