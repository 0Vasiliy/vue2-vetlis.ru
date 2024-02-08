<template>
     <section class="v-menu">
        <div class="container">
            <div class="row">
                <div class="col  menu_block">                   
                    <ul class="col  menu_block_list">
                        <li class="menu_block_item"><a href="#carusel" class="menu_block_link ">О нас</a></li>
                        <li class="menu_block_item"><a href="#news_action" class="menu_block_link ">Новости</a></li>
                        <li class="menu_block_item"><a href="#servis" class="menu_block_link ">Услуги</a></li>
                        <li class="menu_block_item"><a href="#vetart" class="menu_block_link ">Полезные статьи</a></li>
                        <li class="menu_block_item"><a href="#recomendation" class="menu_block_link ">Рекомедации ветрача</a></li>
                        <li class="menu_block_item"><a href="#footer" class="menu_block_link ">Контакты</a></li>
                    </ul>                                  
                    <!-- hamburger -->                
                    <div class="v-hamburger">
                        <h5>Меню</h5>
                            <img src="../../assets/images/arrows/right-arrows.png">
                        <div class="v-hamburger-btn" @click.prevent="show = true">
                            <span></span>
                            <span class="long"></span>
                            <span></span>
                        </div>
                    </div> 
                    <!-- hamburger-menu -->
                    <div class="v-hamburger-menu" id="show" v-if="show" @click.self="close">
                        <div class="v-hamburger_menu_block">
                                <!-- hamburger-close -->
                            <div class="v-hamburger-close" @click="close">
                                <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183716 1.30861 -0.183716 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183716 26.55 -0.183716 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z" fill="black"/>
                                </svg>
                            </div>
                            <nav>
                                <ul class="v-hamburger_menu_list" id="menu_list_id">
                                    <li class="v-hamburger_menu_item" @click="close"><a href="#carusel"
                                        class="v-hamburger_menu_link"
                                        @mouseover="hover = true"
                                        @mouseleave="hover = false"
                                        :class="{ link : hover }"
                                        >О нас</a></li>
                                    <li class="v-hamburger_menu_item" @click="close"><a href="#news_action" class="v-hamburger_menu_link">Новости</a></li>
                                    <li class="v-hamburger_menu_item" @click="close"><a href="#servis" class="v-hamburger_menu_link ">Услуги</a></li>
                                    <li class="v-hamburger_menu_item" @click="close"><a href="#vetart" class="v-hamburger_menu_link">Полезные статьи</a></li>
                                    <li class="v-hamburger_menu_item" @click="close"><a href="#recomendation" class="v-hamburger_menu_link link_vet">Рекомендации<br>ветеринара</a></li>
                                    <li class="v-hamburger_menu_item" @click="close"><a href="#footer" class="v-hamburger_menu_link">Контакты</a></li>
                                </ul>
                            </nav>                
                            <div class="v-hamburger_menu_social">   
                                <a href="https://vk.com/id1980195" class="sidepanel_link"> <img src="../../assets/icons/social/vkontakte.svg" alt="vkontakte"></a>
                                <a href="https://t.me/vasiliy_k_p" class="sidepanel_link"> <img src="../../assets/icons/social/telegram.svg" alt="telegram"></a>
                            </div>
                        </div>
                        <v-overlay/>
                    </div>  
                </div>                           
            </div>
        </div>
    </section>
</template>

<script>
import vOverlay from '../overlay/v-overlay.vue'
export default {
    name: 'v-menu',
    components:{
        vOverlay
    },
    data(){
    return{
        show: false,
        hover: false,
        }  
    },
    methods: {
            close: function () {
                this.show = false
            }
        },
}

</script>
<style scoped lang="scss">
//menu
    .v-menu{ 
    max-width:1400px;
    width: 75%;
    margin-top: 50px; 
    padding-left: 0px;
    border: 1px solid #723030;
    border-left: none;
    border-right: none;
}

.menu_block{  
    display: flex;
    margin-top: 23px;
    justify-content: space-between;
    max-width: 100%;
    transition: all .3s linear;
  
    &_list {
        margin-left: 0;
        list-style: none;
        display: flex;
        align-items: center;
        padding-left: 0px;
        max-width: 900px;
    }
    &_item {
        padding: 5px 14px;
        border-left: 2px dotted #cecece;
        &:first-child {
            border-left: none;
        }
    }
    &_link {
        color: #757575;;
        font-size: 24px;
        font-weight: 300;
        text-align: center;
        line-height: 21px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 700;
        text-decoration: none;
        display: block;       
        font-size: 15px;
        transition: all .4s linear;
        &:hover {
            transition: all .4s linear;
            text-decoration: none;
            color: #103783;
        }
    }
 
}
.menu_block_line{
    span {
        display: block;
        margin: 0 auto;       
        height: 2px;
        background-color: #723030;
        border-radius: 50%;             
    }
}
.menu_text{
    margin-right: 0;
}
//hamburger
.v-hamburger-btn {
    margin-right: 0px;
    height: 21px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    cursor: pointer;
    span {
        display: block;
        width: 30px;
        height: 3px;
        background: teal;
    }
    span.long {
        width: 36px;
    }
    }
    .v-hamburger{
        margin-left: auto;
        margin-right: auto;
        border: 2px solid #723030;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        cursor:pointer;
        h5{
            margin-right: 20px;
            color: teal;
            font-size: 24px;
        }
        img{
            margin-right: 20px;
            width: 40px;
            height: 40px;
        }
    }
  
    //hamburger_menu
    .v-hamburger-menu {
        position: fixed;
        top: 100px;
        left: 0;
        height: 100vh;   
        z-index: 999;
        visibility: visible;
        transition: all .6s;
        border: 5px solid #723030;
    }
    .v-hamburger_menu_block{
        position: relative;
        width: 345px;
        background-color: #e4e0e0e7;
        height: 100%;
        padding-top: 140px;
        padding-left: 40px;
        padding-right: 40px;
        transition: all .6s;
        z-index: 10;
    }
    .v-hamburger_menu_list{
        list-style-type: none;
         padding-left: 35px;        
        ul{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-content: flex-start;
        }
    }
    .v-hamburger_menu_item{
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
      align-content: flex-start;
    }
    .v-hamburger_menu_link{
        position: relative;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        margin-bottom: 15px;
        text-decoration: none; 
        color: #757575; 
    }
    .v-hamburger_menu_link:hover {
        transition: all .4s linear;
        text-decoration: none;
        color:#103783;
        }

    .v-hamburger_menu_link::before {
        content: '';
        position: absolute;
        left: -35px;
        top: 10px;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        border: 1px solid #000000;
        transition: all 0.6s;
        }
    .v-hamburger_menu_link:hover::before{
        background-color: #6d3b3b;       
    }
    .link{
        color: #6d3b3b; 
    }
    .v-hamburger_menu_link a{
        background-color: #723030;
    }
    .v-hamburger_menu_social{
        position: absolute;
        bottom: 130px;
        left: 50%;
        transform: translateX(-50%);
        width: 90px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    //hamburger_close
    .v-hamburger-close{
        position: absolute;
        top: 25px;
        right: 25px;
        cursor: pointer;
  } 

    //hamburger media
@media (min-width: 992px){
    .v-hamburger-btn{
        display: none;
    }
    .v-hamburger{
    display: none;    
    }
}
    //menu
@media (max-width: 991px){
    .menu_block_list{
        display: none;
    }
    .v-menu{
        border: none;
        width: 77%;
    }
}
@media (max-width: 767px){
    .v-menu{
        width: 87%;
    }
}
@media (max-width: 500px){
    .menu_text{
        display: flex;
        margin-left: auto;
        margin-right: auto;
    }
    .v-menu{
        margin-top: 15px;
        padding-left: 30px;
    }
}
@media(max-width: 400px){
    .v-hamburger_menu_block{
        width: 280px;
    }
    .v-hamburger_menu_link{
        font-size: 18px;
        line-height: 30px;  
    }
    .v-hamburger_menu_link::before{
        top: 8px;
    }
}
</style>