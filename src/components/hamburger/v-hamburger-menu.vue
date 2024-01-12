<template>
      <div class="v-hamburger-menu" id="menu_id" v-if="hamburgerOpen" @close="hamburgerOpen = false" @click.self="close">
                        <div class="v-hamburger_menu_block">
                            <vHamburgerClose @click="close"/>
                            <nav>
                                <ul class="v-hamburger_menu_list" id="menu_list_id">
                                    <li class="v-hamburger_menu_item"><a href="#" class="v-hamburger_menu_link">О нас</a></li>
                                    <li class="v-hamburger_menu_item"><a href="#" class="v-hamburger_menu_link ">Услуги</a></li>
                                    <li class="v-hamburger_menu_item"><a href="#" class="v-hamburger_menu_link">Новости</a></li>
                                    <li class="v-hamburger_menu_item"><a href="#" class="v-hamburger_menu_link">Консультация ветеринара</a></li>
                                    <li class="v-hamburger_menu_item"><a href="#" class="v-hamburger_menu_link">Полезные статьи</a></li>
                                    <li class="v-hamburger_menu_item"><a href="#" class="v-hamburger_menu_link">Контакты</a></li>
                                </ul>
                            </nav>                
                            <div class="v-hamburger_menu_social">   
                                <a href="https://vk.com/id1980195" class="sidepanel_link"> <img src="../../assets/icons/social/vkontakte.svg" alt="vkontakte"></a>
                                <a href="https://t.me/vasiliy_k_p" class="sidepanel_link"> <img src="../../assets/icons/social/telegram.svg" alt="telegram"></a>
                            </div>
                        </div>
                        <div class="menu_overlay"></div>
                    </div>   
</template>
<script>
import vHamburgerClose from '@/components/hamburger/v-hamburger-close.vue'
export default {
    name: 'v-hamburger-menu',
    components:{
        vHamburgerClose,
    },
    data(){
        return{
            hamburgerOpen: true
        }
    },
    methods: {
        close(){
            this.$emit('close')
        }
    }
}
</script>
<style scoped lang="scss">
    .v-hamburger-menu {
        position: fixed;
        top: 0;
        left: -100%;
        height: 100vh;
        z-index: 10;
        // visibility: hidden;
        opacity: 0;
        transition: all .6s;
        // &.active {
        //     left: 0;
        //     visibility: visible;
        //     opacity: 1;   
        // }
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
        //  padding-left: 35px;
         
        ul{

            display: flex;
            flex-direction: column;
        }
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
    .v-hamburger_menu_link a{
        background-color: #723030;
    }
    .v-hamburger_menu_social{
        position: absolute;
        bottom: 50px;
        left: 40%;
        transform: translateX(-50%);
        width: 90px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    // .menu_overlay{
    //     position: fixed;
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    //     height: 100%;
    //     background-color: #723030;
    //     opacity: .75;
    // }


    @media (max-width: 991px){
        .menu_block_list{
            display: none;
    }
    }
</style>