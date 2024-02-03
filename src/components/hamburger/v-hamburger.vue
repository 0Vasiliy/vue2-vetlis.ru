<template>
     <div class="menu_text">
            <h5>Меню</h5>
            <img src="../../assets/images/arrows/right-arrows.png">
        <div class="v-hamburger">
            <span></span>
            <span class="long"></span>
            <span></span>
        </div>
    </div> 
   
</template>

<script>
export default {
    name: 'v-hamburger'
}
</script>
<style scoped lang="scss">
    .v-hamburger {
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
    .menu_text{
        margin-left: auto;
        margin-right: auto;
        border: 1px solid #723030;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        align-items: center;
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
    @media (min-width: 992px){
        .v-hamburger{
            display: none;
        }
        .menu_text{
        display: none;    
    }
    }

</style>