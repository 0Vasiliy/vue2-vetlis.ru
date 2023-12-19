<template>
     <section class="v-menu">
        <div class="container">
            <div class="row">
                <div class="col  menu_block">                   
                    <ul class="col  menu_block_list">
                        <li class="menu_block_item"><a href="#" class="menu_block_link ">О нас</a></li>
                        <li class="menu_block_item"><a href="#servis" class="menu_block_link ">Услуги</a></li>
                        <li class="menu_block_item"><a href="#news_action" class="menu_block_link ">Новости</a></li>
                        <li class="menu_block_item"><a href="#" class="menu_block_link ">Консультация ветеринара</a></li>
                        <li class="menu_block_item"><a href="#" class="menu_block_link ">Полезные статьи</a></li>
                        <li class="menu_block_item"><a href="#" class="menu_block_link ">Контакты</a></li>
                    </ul>                  
                    <div class="menu_block_hamburger">
                        <span></span>
                        <span class="long"></span>
                        <span></span>
                    </div>
                    <div class="hamburger_menu" id="menu_id">
                        <div class="hamburger_menu_block">
                            <div class="hamburger_menu_close">
                                <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183716 1.30861 -0.183716 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183716 26.55 -0.183716 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z" fill="black"/>
                                </svg>
                            </div>
                
                            <nav>
                                <ul class="hamburger_menu_list" id="menu_list_id">
                                    <li class="hamburger_menu_item"><a href="#" class="hamburger_menu_link">О нас</a></li>
                                    <li class="hamburger_menu_item"><a href="#" class="hamburger_menu_link ">Услуги</a></li>
                                    <li class="hamburger_menu_item"><a href="#" class="hamburger_menu_link">Новости</a></li>
                                    <li class="hamburger_menu_item"><a href="#" class="hamburger_menu_link">Консультация ветеринара</a></li>
                                    <li class="hamburger_menu_item"><a href="#" class="hamburger_menu_link">Полезные статьи</a></li>
                                    <li class="hamburger_menu_item"><a href="#" class="hamburger_menu_link">Контакты</a></li>
                                </ul>
                            </nav>
                
                            <div class="hamburger_menu_social">   
                                <a href="https://vk.com/id1980195" class="sidepanel_link"> <img src="icons/social/vkontakte.svg" alt="vkontakte"></a>
                                <a href="https://t.me/vasiliy_k_p" class="sidepanel_link"> <img src="icons/social/telegram.svg" alt="telegram"></a>
                            </div>
                        </div>
                        <div class="menu_overlay"></div>
                    </div>   
                </div>                           
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'v-menu'
}
</script>
<style scoped lang="scss">
    .v-menu{ 
    // max-width:1620px;
    margin-left: 13%;
    margin-right: 13%;
    margin-top: 50px; 
    padding-left: 0px;
    height: 75px;
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
//
.menu_block_hamburger {
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
        background: #151812;
    }
    span.long {
        width: 36px;
    }
}

.hamburger_menu {
    position: fixed;
    top: 0;
    left: -100%;
    height: 100vh;
    z-index: 10;
    visibility: hidden;
    opacity: 0;
    transition: all .6s;
    &.active {
        left: 0;
        visibility: visible;
        opacity: 1;   
    }
    &_block {
        position: relative;
        width: 345px;
        background-color: #e4e0e0e7;
        height: 100%;
        padding-top: 140px;
        padding-left: 40px;
        transition: all .6s;
        z-index: 10;
    }
    &_close {
        position: absolute;
        top: 25px;
        right: 25px;
        cursor: pointer;
    }
    &_list {
        list-style-type: none;
        padding-left: 35px;
    }
    &_link {
        position: relative;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        margin-bottom: 15px;
        text-decoration: none; 
        color: #757575;
        &:hover {
            transition: all .4s linear;
            text-decoration: none;
            color:#103783;
        }
        &:before {
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
        &:hover {
            &:before {
                background-color: #6d3b3b;
            }
        }
        a {
            background-color: #723030;
           
        }
    }
    &_social {
        position: absolute;
        bottom: 50px;
        left: 40%;
        transform: translateX(-50%);
        width: 90px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &_overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #723030;
        opacity: .75;
    }
}
.container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
        max-width: 1620px;
    }
.container{
    margin-left: 0px;
    margin-right: 0px;
}
</style>