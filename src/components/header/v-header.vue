<template>
    <section class="v-header col-xl-9 col-md-9 col-10 ">
       <div class="row">
        <div class="container">
            <div class="v-header_block">
                <div class="col v-header_block_logo">
                    <v-header-logo class="h-logo"/>
                    <v-header-lis class="h-lis"/>
                    <v-header-vet class="h-vet"/>
                </div>
                <div class="col v-header_adress">
                    <v-header-adress class="h-adress"/>
                    <v-header-adress-num class="h-adress h-adress2"/>
                </div>
                <div class="col v-header_block_phone">
                    <div class="v-header_block_phone_link">
                        <v-header-phone/>
                    </div>
                   <button type="button" class="v-button" id="phone_btn" @click="openModal">
                        <h1 class="v-button-title">Запись на приём</h1>
                    </button>
                </div> 
           </div>
           <v-modal v-if="isModalOpen" @close="isModalOpen = false"/>
        </div>
       </div>  
    </section>
</template>

<script>
import vHeaderLogo from '@/components/header/header-logo/v-header-logo.vue'
import vHeaderLis from '@/components/header/header-lis/v-header-lis.vue'
import vHeaderVet from '@/components/header/header-vet/v-header-vet.vue'
import vHeaderAdress from '@/components/header/header-adress/v-header-adress.vue'
import vHeaderAdressNum from '@/components/header/header-adress-num/v-header-adress-num.vue'
import vHeaderPhone from '@/components/header/header-phone/v-header-phone.vue'
import vModal from '@/components/modal/v-modal.vue'

export default {
    name: 'v-header',
    components:{
        vHeaderLogo,
        vHeaderLis,
        vHeaderVet,
        vHeaderAdress,
        vHeaderAdressNum,
        vHeaderPhone,
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
@import '@/assets/css/modul_btn.scss';
    .v-header{
        margin: 0 auto;
        background: #ECE9E6;
        max-width: 1400px;
        min-height: 200px; 
        border-radius: 20px;
    &_block{   
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 70px;
        &_title{
            margin-left: 50px;
        }
    }
}

.v-header_block_logo{
    display: flex;
    align-items: center;
    max-width: 800px;
    height: 80px;
    color: #757575; 
}
.v-header_block_phone{
    display: flex;
    align-items: center;
    max-width: 600px;
    max-height: 80px;
}
.h-logo{
    margin-bottom: 20px;
}
.h-adress2{
    margin-top: 20px;
}

@media (min-width: 1230px){
    .v-header_block{
        margin-left: 2%;
        margin-right: 2%;
    }
}
@media (max-width: 1625px){
    .v-header_block{
        margin-top: 50px;
    }
.v-header_block_logo{
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   align-content: center;
   justify-content: center;
   align-items: center;
   height: auto;
   margin-bottom: 50px;
}
.v-header_block_phone{
   display: flex;
   flex-wrap: wrap;
   align-content: center;
   justify-content: center;
   align-items: center;
   height: auto;
}
.v-button{
    margin-top: 20px;
}
}

@media (max-width: 1100px){
.v-header{
    height: auto;
 }
.v-header_block {
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   align-content: center;
   justify-content: center;
   align-items: center;
   height: auto;
   margin-bottom: 50px;
}
.v-header_block_logo{
   margin-bottom: 0;
}
.v-header_block_phone{
    flex-direction: column;
    flex-wrap: nowrap;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto; 
}
.v-button{
    margin-left: auto;
    margin-right: auto; 
}
.h-adress{
    margin-top: 20px;
}
.h-lis{
    margin-top: 10px;
}
.h-vet{
    margin-top: 10px;
}
}
@media(max-width:500px){
.v-header_block_phone{
    display: flex;
    flex-direction: column;
    max-height: none;
    margin-left: auto;
    margin-right: auto;
}
.v-button{
    margin-top: 20px;
}
}

</style>