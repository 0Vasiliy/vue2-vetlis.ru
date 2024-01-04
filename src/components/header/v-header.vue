<template>
    <section class="v-header">
       <div class="row">
        <div class="container">
            <div class="col-md-11 col-sm-12 v-header_block">
                <div class="col v-header_block_logo">
                    <img src="@/assets/icons/logo/logo.jpg" alt="logo" class="v-header_bkock_logo_img">
                    <h1 class="v-header_block_subtitle">ЛИС</h1>
                    <h4 class="v-header_block_title">Ветеринарная клиника</h4>                   
                </div>
                <div class="col v-header_adress">
                    <h1 class="v-header_block_adress_title">ул.Русановская д.19.к.4</h1>
                </div>
                <div class="col v-header_block_phone">
                    <div class="v-header_block_phone_link">
                        <a class=" v-header_block_phone_link_old" href="tel:+79112598384"><img src="@/assets/icons/phone.png" alt="#">+7 (911) 259 83 84</a>
                        <a class=" v-header_block_phone_link_new" href="tel:+79313732942"><img src="@/assets/icons/phone.png" alt="#">+7 (931) 373 29 42</a>
                    </div>
                   <vButton/>
                </div>
           </div>
        </div>
       </div>
    </section>
</template>

<script>
import vButton from '@/components/buttons/v-button.vue'

export default {
    name: 'v-header',
    components:{
        vButton
    }
}
</script>

<style scoped lang="scss">
    .v-header{
    max-width: 1920px;
    margin-left: 150px;
    margin-right: 200px;  
    &_block{   
        display: flex;
        margin-top: 40px;
        max-width: 1920px;
        &_title{
            margin-left: 50px;
        }
    }
}
.v-header_block_logo_img{
    animation: flip;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-delay: 2s;
}
.v-header_block_logo{
    display: flex;
    align-items: center;
    margin-left: 0px;
    max-width: 800px;
    height: 80px;
    img{
        width: 80px;
        height: 80px;
    }
    h1{
        font-size: 24px;
        text-align: center;
        line-height: 21px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 700;
        color: #757575;
        margin-left: 30px;
    }
    h4{
        margin-left: 10px;
        font-size: 18px;
        font-weight: 300;
        text-align: center;
        line-height: 21px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 300;
        color: #757575;;
    }
}
.v-header_block_phone{
    display: flex;
    align-items: center;
    max-width: 600px;
    max-height: 80px;
    margin-right: 0px;
    &_link{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img{
        margin-right: 10px;
    }
    a{
        text-decoration: none;
        font-size: 18px;
        font-weight: 300;
        text-align: center;
        line-height: 21px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 300;
        color: #757575;;
    }
}
.v-header_block_phone_link_new{
    margin-top: 10px;
}
.v-header_block_adress{ 
    display: flex;
    max-width: 200px;
    max-height: 80px;
    &_title{
        margin-top: 20px;
        text-decoration: none;
        font-size: 36px;
        font-weight: 300;
        text-align: center;
        line-height: 21px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 300;
        color: #757575;;
    }
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
.v-header_block_phone{
    margin-top: 40px;
}
.v-header_adress{
    margin-top: 20px;
}
}
</style>