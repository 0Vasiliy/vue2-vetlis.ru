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
        // vHeaderAdressNum,
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

    .v-side{
        margin-right: 0;
        flex: 0 0 30%;
        max-width: 30%;
        border: 1px solid gray;
        background: #ECE9E6;
        border-radius: 20px;
        padding: 30px;
        img{
            border-radius: 20px;
        }
    }
    .line-mini{
        width:100%;
        height: 2px;
        background: teal;
    }
   .v-side-right{
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    margin-left: 3%;
   }
   .side-adress{
    margin-top: 10px;
   }
   .side-comp{
    margin-top: 20px;
   }
   .side-vet{
    margin-bottom: 10px;
   }
   @media (max-width: 1400px){
    .v-side-right{
        margin-left: 1.5%;
    }
   }
   @media (max-width: 1200px){
    .v-side-right{
        margin-left: -0.8%;
    }
   }


</style>