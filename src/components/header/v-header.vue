<template>
    <section class="v-header">
       <div class="row">
        <div class="container">
            <div class="col-md-11 col-sm-12 v-header_block">
                <div class="col v-header_block_logo">
                    <v-header-logo class="h-logo"/>
                    <v-header-lis class="h-lis"/>
                    <v-header-vet class="h-vet"/>
                </div>
                <div class="col v-header_adress">
                    <v-header-adress class="h-adress"/>
                    <v-header-adress-num class="h-adress"/>
                </div>
                <div class="col v-header_block_phone">
                    <div class="v-header_block_phone_link">
                        <v-header-phone/>
                    </div>
                   <vButton class="header-btn"/>
                </div>
           </div>
        </div>
       </div>
    </section>
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
    name: 'v-header',
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
    .v-header{
        max-width: 1540px; 
        width: 80%;
    &_block{   
        display: flex;
        margin-top: 40px;
        max-width: 1920px;
        &_title{
            margin-left: 50px;
        }
    }
}

.v-header_block_logo{
    display: flex;
    align-items: center;
    margin-left: 0px;
    max-width: 800px;
    height: 80px;
    color: #757575;   
}
.v-header_block_phone{
    display: flex;
    align-items: center;
    max-width: 600px;
    max-height: 80px;
    margin-right: 0px;
  
}

@media (max-width: 1630px){
.v-header{
    height: auto;
}
.v-header_block {
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   align-content: center;
   align-items: center;
   height: auto;
}
.v-header_block_logo{
    display: flex;
   flex-direction: column;
   flex-wrap: wrap;  
   align-content: center;
   align-items: center;
   margin-left: auto;
   height: auto; 
}
.v-header_block_phone{
    margin-top: 20px;
}
.v-header_adress{
    margin-top: 20px;
}
.h-lis{
    margin-top: 20px;
}
.h-vet{
    margin-top: 20px;
}
}
@media(max-width:500px){
.v-header_block_phone{
    display: flex;
    flex-direction: column;
    max-height: none;
}
.header-btn{
    margin-top: 20px;
}
}
</style>