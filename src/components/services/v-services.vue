<template>
    <section class="v-services" id="servis">
        <div class="container">
            <div class="row">
                <h1 class="v-services_title">Наши услуги</h1>
            </div>
            <div class="row">              
                    <div class="v-services_item col-3 col">                  
                        <router-link tag="a" to="/vTherapy" class="v-services_block"><span>Терапия</span><img src="@/assets/icons/services/therapy.svg"></router-link>
                    </div>
                    <div class="v-services_item col-3 col">
                        <a class="v-services_block">
                            <span>Хирургия</span>
                            <img src="@/assets/icons/services/surgery.svg">
                        </a>
                    </div>
                    <div class="v-services_item col-3 col">
                        <router-link tag="a" to="/vUzi" class="v-services_block"><span>Узи диагностика</span><img src="@/assets/icons/services/visual.svg"></router-link>
                    </div>
                    <div class="v-services_item col-3 col">
                        <!-- <a class="v-services_block">
                            <span>Стерилизация <br>и кастрация</span>
                            <img src="@/assets/icons/services/sterilizacziya.svg">                             
                        </a> -->
                        <router-link tag="a" to="/vSterilization" class="v-services_block"><span>Стерилизация <br>и кастрация</span><img src="@/assets/icons/services/sterilizacziya.svg"></router-link>
                    </div>
                    <div class="v-services_item col-3 col">
                        <router-link tag="a" to="/vLab" class="v-services_block"><span>Лабораторная<br>диагностика</span><img src="@/assets/icons/services/lab.svg"></router-link>
                    </div>
                    <div class="v-services_item col-3 col">
                        <!-- <a class="v-services_block">
                            <span>Дерматология</span>
                            <img src="@/assets/icons/services/derm.svg">                             
                        </a> -->
                        <router-link tag="a" to="/vDerma" class="v-services_block"><span>Дерматология</span><img src="@/assets/icons/services/derm.svg"></router-link>
                    </div>
                    <div class="v-services_item col-3 col">
                        <a class="v-services_block">
                            <span>Лечение грызунов</span>
                            <img src="@/assets/icons/services/lechenie-gryzunov.svg">                             
                        </a>
                    </div>
                    <div class="v-services_item col-3 col">
                        <!-- <a class="v-services_block">
                            <span>Вакцинация</span>
                            <img src="@/assets/icons/services/vakcinacia.svg">                             
                        </a> -->
                        <router-link tag="a" to="/vVaccinationChip" class="v-services_block"><span>Вакцинация и <br>чипирование</span><img src="@/assets/icons/services/vakcinacia.svg"></router-link>
                    </div>
                    <div class="v-services_item col-3 col">
                        <!-- <a class="v-services_block">
                            <span>Стоматология</span>
                            <img src="@/assets/icons/services/stomatologiya.svg">                             
                        </a> -->
                        <router-link tag="a" to="/vStom" class="v-services_block"><span>Стоматология</span><img src="@/assets/icons/services/stomatologiya.svg"></router-link>
                    </div>
                    <div class="v-services_item col-3 col">
                        <router-link  tag="a" to="/vTeeth" class="v-services_block"><span>Ультразвуковая чистка зубов</span><img src="@/assets/icons/services/canin.svg"></router-link>
                    </div>
                    <div class="v-services_item col-3 col">
                        <!-- <a class="v-services_block">
                            <span>Кардиология</span>
                            <img src="@/assets/icons/services/kardio.svg">                             
                        </a> -->
                        <router-link  tag="a" to="/vKardio" class="v-services_block"><span>Кардиология</span><img src="@/assets/icons/services/kardio.svg"></router-link>
                    </div>
                    <div class="v-services_item col-3 col">
                        <a class="v-services_block">
                            <span>Офтальмология</span>
                            <img src="@/assets/icons/services/oftalmogia.svg">                             
                        </a>
                    </div>
            </div>           
        </div>
    </section>
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
    margin-right: 11%;
    margin-left: 11.5%;
    max-width: 1550px;
    }

    .v-services_item{   
        box-sizing: content-box; 
        display: flex;
        margin-top: 30px;  
        max-width: 20%;
        padding: 10px 10px;
        height: 100px;
        border-radius: 20px;  
        border: 1px solid #723030;
        cursor: pointer;
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
    @media (min-width: 1600px){
        .container {
            max-width: 1434px;
        }
    }
    @media (min-width: 768px) and (max-width: 1100px){
        .col-3{
            flex: 0 0 35%;
            max-width: 35%;
        }
    }
    @media (max-width: 860px){
        .col-3{
            flex: 0 0 45%;
            max-width: 45%;
        }
        .v-services{
            margin-right: 10%;
            margin-left: 12%;
        }
    }
    @media (max-width: 767px){
        .col-3 {
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
        }
    }

</style>