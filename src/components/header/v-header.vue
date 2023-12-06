<template>
     <div class="v-header">
       <div class="row">
        <div class="container">
            <div class="col v-header_block col-lg-12">
                <div class="v-header_block_logo">
                    <img src="@/assets/icons/logo/logo.jpg" alt="logo" class="v-header_block_logo_img">
                    <h1 class="v-header_block_subtitle">ЛИС</h1>
                    <h4 class="v-header_block_title">Ветеринарная клиника</h4>                   
                </div>
                <div class="v-header_block_phone">
                    <div class="v-header_block_phone_link">
                        <a class="col v-header_block_phone_link_old" href="tel:+79112598384"><img src="@/assets/icons/phone.png" alt="#">+7 (911) 259 83 84</a>
                        <a class="col v-header_block_phone_link_new" href="tel:+79313732942"><img src="@/assets/icons/phone.png" alt="#">+7 (931) 373 29 42</a>
                    </div>
                    <button type="button" class="col v-header_block_phone_btn" id="phone_btn">
                        <h1 class="v-header_block_phone_btn_title">Запись на приём</h1>
                    </button>
                </div>
           </div>
        </div>
       </div>
    </div>
</template>

<script>

export default {
    name: 'v-header'
}
</script>

<style scoped lang="scss">
    .v-header{
    height: 170px;
    max-width: 1920px;
    margin-left: 100px;
    margin-right: 100px;
    &_block{
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
       
        max-height: 160px;
        &_title{
            margin-left: 50px;
        }
    }
}
.v-header_block_logo{
    display: flex;
    align-items: center;
    margin-left: 50px;
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
        color: #757575;;
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
    margin-right: 50px;
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
    &_btn{
        display: flex;
        align-items: center;
        margin-left: 20px;
        width: 200px;
        height: 40px;        
        border: none;
        background: hsla(221, 45%, 73%, 1);
        background: linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%);
        background: -moz-linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%);
        background: -webkit-linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%);
        filter: gradient( startColorstr="#9BAFD9", endColorstr="#103783", GradientType=1 );
        border-radius: 4px;
        cursor: pointer;
        &_title{
            margin-top: 3%;
            font-size: 18px;
            align-items: center;
            text-align: center;
            line-height: 21px;
            font-family: 'Museo Sans Cyrl';
            font-weight: 300;
            color: white;
        }
    }
}
.v-header_block_phone_link_new{
    margin-top: 10px;
}

</style>