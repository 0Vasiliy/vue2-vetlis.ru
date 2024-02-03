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
                    <vHamburger/>
                    <vHamburgerMenu/>
                </div>                           
            </div>
        </div>
    </section>
</template>

<script>
import vHamburger from '@/components/hamburger/v-hamburger.vue'
import vHamburgerMenu from '@/components/hamburger/v-hamburger-menu.vue'

export default {
    name: 'v-menu',
    components: {
        vHamburger,
        vHamburgerMenu
    },
    data(){
        return{
            hamburgerOpen: true
        }
    }
}
</script>
<style scoped lang="scss">
    .v-menu{ 
    max-width:1400px;
    width: 75%;
    margin-top: 50px; 
    padding-left: 0px;
    // height: 75px;
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
// .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
//         max-width: 1620px;
//     }
// .container{
//     margin-left: 0px;
//     margin-right: 0px;
// }

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

</style>