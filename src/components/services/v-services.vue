<template>
    <section class="v-services col-xl-9 col-md-9 col-10" id="servis">
        <div class="container">
            <div class="row">
                <h1 class="v-services_title">Наши услуги</h1>
            </div>
            <div class="row">              
                    <div class="v-services_item col-3 col">                  
                        <router-link tag="a" to="/vTherapy" class="v-services_block"><span>Терапия</span><img src="@/assets/icons/services/therapy.svg" alt="Терапия"></router-link>
                    </div>
                    <div class="v-services_item col-3 col">
                        <router-link tag="a" to="/vSurgery" class="v-services_block"><span>Хирургия</span><img src="@/assets/icons/services/surgery.svg" alt="Хирургия"></router-link>
                    </div>
                    <div class="v-services_item col-3 col">
                        <router-link tag="a" to="/vUzi" class="v-services_block"><span>Узи диагностика</span><img src="@/assets/icons/services/visual.svg" alt="Узи диагностика"></router-link>
                    </div>
                    <div class="v-services_item col-3 col">
                        <router-link tag="a" to="/vSterilization" class="v-services_block"><span>Стерилизация <br>и кастрация</span><img src="@/assets/icons/services/sterilizacziya.svg" alt="Стерилизация и кастрация"></router-link>
                    </div>
                    <div class="v-services_item col-3 col">
                        <router-link tag="a" to="/vLab" class="v-services_block"><span>Лабораторная<br>диагностика</span><img src="@/assets/icons/services/lab.svg" alt="Лабораторная диагностика"></router-link>
                    </div>
                    <div class="v-services_item col-3 col">
                        <router-link tag="a" to="/vDerma" class="v-services_block"><span>Дерматология</span><img src="@/assets/icons/services/derm.svg" alt="Дерматология"></router-link>
                    </div>
                    <div class="v-services_item col-3 col">
                        <router-link tag="a" to="/vRodents" class="v-services_block"><span>Лечение грызунов<br>и зайцеобразных</span><img src="@/assets/icons/services/lechenie-gryzunov.svg" alt="Лечение грызунов и зайцеобразных"></router-link>
                    </div>
                    <div class="v-services_item col-3 col">
                        <router-link tag="a" to="/vVaccinationChip" class="v-services_block"><span>Вакцинация и <br>чипирование</span><img src="@/assets/icons/services/vakcinacia.svg" alt="Вакцинация и чипирование"></router-link>
                    </div>
                    <div class="v-services_item col-3 col">
                        <router-link tag="a" to="/vStom" class="v-services_block"><span>Стоматология</span><img src="@/assets/icons/services/stomatologiya.svg" alt="Стоматология"></router-link>
                    </div>
                    <div class="v-services_item col-3 col">
                        <router-link  tag="a" to="/vTeeth" class="v-services_block"><span>Ультразвуковая чистка зубов</span><img src="@/assets/icons/services/canin.svg" alt="Ультразвуковая диагностика"></router-link>
                    </div>
                    <div class="v-services_item col-3 col">
                        <router-link  tag="a" to="/vKardio" class="v-services_block"><span>Кардиология</span><img src="@/assets/icons/services/kardio.svg" alt="Кардиология"></router-link>
                    </div>
                    <div class="v-services_item col-3 col">
                        <router-link  tag="a" to="/vEye" class="v-services_block"><span>Офтальмология</span><img src="@/assets/icons/services/oftalmogia.svg" alt="Отальмология"></router-link>
                    </div>
                    <div class="v-services_item col-3 col">
                        <router-link  tag="a" to="/vOrnitolog" class="v-services_block"><span>Орнитолог</span><img src="@/assets/icons/services/ornitolog.svg" alt="Орнитолог"></router-link>
                    </div>
            </div>
            <v-pageup/>
        </div>
    </section>
</template>

<script>
import vPageup from '../pageup/v-pageup.vue'

export default {
    name: 'v-services',
    components:{
        vPageup 
    }
}
</script>

<style scoped lang="scss">
    .v-services{
    display: flex;
    flex-direction: row;
    margin-top: 50px; 
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
    @media (min-width: 1400px){
    .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
         max-width: 1400px;
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
    }
    @media (max-width: 767px){
        .col-3 {
            -ms-flex: 0 0 100%;
            flex: 0 0 80%;
            max-width: 80%;
        }
      
    }

</style>