<template>
     <aside class="v-sidepanel">
        <a href="https://vk.com/vetlis" class="v-sidepanel_link"> <img src="@/assets/icons/social/vkontakte.svg" alt="vkontakte"></a>
        <a href="#" class="v-sidepanel_link"> <img src="@/assets/icons/social/telegram.svg" alt="telegram"></a>
        <div class="v-sidepanel_divider"></div>
        <div class="v-sidepanel_text"><span>Социальные сети</span></div>
     </aside>
</template>
<script>
export default {
    name: 'v-sidepanel'
}
</script>
<style scoped lang="scss">
    .v-sidepanel {
    position: fixed;
    top: 280px;
    left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 390px;
    z-index: 3;
    &_divider {
        width: 2px;
        height: 130px;
        background-color: #c0c0c0;;
    }
    &_text {
        color: #757575;
        height: 150px;
        width: 25px;  
        font-family: 'Museo Sans Cyrl';
        font-weight: 500;
        span {
            transform: rotate(-90deg) translate(-40%,-300%);
            display: block;
            width: 150px;
        }
    }
}
@media (min-width: 1920px){
    .sidepanel{
        right: 75%;
    }
}
@media (max-width: 991px){

.v-sidepanel img{
    width: 30px;
    height: auto;
}
}
@media (max-width: 620px){
    .v-sidepanel img{
        width: 25px;
    }
}
@media (max-width: 576px){
    .v-sidepanel img{
        width: 20px;
    }
    
 }

</style>