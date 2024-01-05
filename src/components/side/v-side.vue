<template>
    <div class="v-side" id="side">       
        <div class="v-side-right" id="side2">
            <v-header-logo class="side-comp side-logo"/>
            <v-header-lis class="side-comp"/>
            <v-header-vet class="side-comp"/>
            <v-header-adress class="side-comp"/>
            <v-header-adress-num class="side-comp"/>
            <v-header-phone class="side-comp"/>
            <v-button class="side-comp"/>
        </div>       
    </div>
</template>
<script>
import vButton from '@/components/buttons/v-button.vue'
import vHeaderLogo from '@/components/header/header-logo/v-header-logo.vue'
import vHeaderLis from '@/components/header/header-lis/v-header-lis.vue'
import vHeaderVet from '@/components/header/header-vet/v-header-vet.vue'
import vHeaderAdress from '@/components/header/header-adress/v-header-adress.vue'
import vHeaderAdressNum from '@/components/header/header-adress-num/v-header-adress-num.vue'
import vHeaderPhone from '@/components/header/header-phone/v-header-phone.vue'

export default {
    name: 'v-side',
    components:{
        vButton,
        vHeaderLogo,
        vHeaderLis,
        vHeaderVet,
        vHeaderAdress,
        vHeaderAdressNum,
        vHeaderPhone
    }
}
</script>

<style scoped lang="scss">
    .v-side{
        margin-right: 0;
        flex: 0 0 30%;
        max-width: 30%;
        border: 1px solid gray;
        border-radius: 20px;
        padding: 30px;
        img{
            border-radius: 20px;
        }
    }
   .v-side-right{
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
   }
   .side-comp{
    margin-top: 10px;
   }
   @media (max-width: 1200px){
    .v-side-right{
        margin-left: auto;
    }
   }
</style>