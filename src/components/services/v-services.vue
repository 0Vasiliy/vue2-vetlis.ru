<template>
    <div class="v-services" id="servis">
        <div class="container">
            <div class="row">
                <h1 class="v-services_title">Наши услуги</h1>
            </div>
            <div class="row">              
                    <div class="v-services_item col-3 col">
                        <a class="v-services_block">
                            <span>Терапия</span>
                            <img src="@/assets/icons/services/therapy.svg">
                        </a>
                    </div>
                    <div class="v-services_item col-3 col">
                        <a class="v-services_block">
                            <span>Хирургия</span>
                            <img src="@/assets/icons/services/surgery.svg">
                        </a>
                    </div>
                    <div class="v-services_item col-3 col">
                        <a class="v-services_block">
                            <span>Визуальная диагностика</span>
                            <img src="@/assets/icons/services/visual.svg">
                        </a>
                    </div>
                    <div class="v-services_item col-3 col">
                        <a class="v-services_block">
                            <span>Стерилизация <br>и кастрация</span>
                            <img src="@/assets/icons/services/sterilizacziya.svg">                             
                        </a>
                    </div>
                    <div class="v-services_item col-3 col">
                        <a class="v-services_block">
                            <span>Лаборатория</span>
                            <img src="@/assets/icons/services/lab.svg">                             
                        </a>
                    </div>
                    <div class="v-services_item col-3 col">
                        <a class="v-services_block">
                            <span>Дерматология</span>
                            <img src="@/assets/icons/services/derm.svg">                             
                        </a>
                    </div>
                    <div class="v-services_item col-3 col">
                        <a class="v-services_block">
                            <span>Лечение грызунов</span>
                            <img src="@/assets/icons/services/lechenie-gryzunov.svg">                             
                        </a>
                    </div>
                    <div class="v-services_item col-3 col">
                        <a class="v-services_block">
                            <span>Вакцинация</span>
                            <img src="@/assets/icons/services/vakcinacia.svg">                             
                        </a>
                    </div>
                    <div class="v-services_item col-3 col">
                        <a class="v-services_block">
                            <span>Стоматология</span>
                            <img src="@/assets/icons/services/stomatologiya.svg">                             
                        </a>
                    </div>
                    <div class="v-services_item col-3 col">
                        <a class="v-services_block">
                            <span>Ультразвуковая чистка зубов</span>
                            <img src="@/assets/icons/services/canin.svg">                             
                        </a>
                    </div>
                    <div class="v-services_item col-3 col">
                        <a class="v-services_block">
                            <span>Кардиология</span>
                            <img src="@/assets/icons/services/kardio.svg">                             
                        </a>
                    </div>
                    <div class="v-services_item col-3 col">
                        <a class="v-services_block">
                            <span>Офтальмогия</span>
                            <img src="@/assets/icons/services/oftalmogia.svg">                             
                        </a>
                    </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-services',
}
</script>

<style scoped lang="scss">
    .v-services{
    display: flex;
    flex-direction: row;
    margin-top: 100px; 
    margin-left: 50px;
    margin-right: 50px;
    max-width: 1920px;
    }
    .container{
        max-width: 1920px;
    }
    .v-services_item{    
        margin-top: 30px;  
        max-width: 20%;
        margin-right: 20px;
        height: 100px;
        border-radius: 20px;  
        border: 1px solid #723030;
        cursor: pointer;
        display: flex;
        align-items: center;
        
    }
    .v-services_title{
        font-size: 36px;
        font-weight: 300;
        text-align: center;
        line-height: 21px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 700;
        color: #757575;
    }
    .v-services_block{
        text-decoration: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        span{
            font-size: 20px;
            font-weight: 300;
            text-align: center;
            line-height: 20px;
            font-family: 'Museo Sans Cyrl';
            font-weight: 300;
            color: #757575;
        }
        img{
            max-width: 45px;
            margin-left: 5px;
        }
}

</style>