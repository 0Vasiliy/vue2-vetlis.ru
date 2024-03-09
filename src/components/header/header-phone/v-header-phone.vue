<template>
    <div class="v-header-phone">
        <a class=" v-header_block_phone_link_old" href="tel:+79112598384"><img src="@/assets/icons/phone.png" alt="#">+7 (911) 259 83 84</a>
        <a class=" v-header_block_phone_link_new" href="tel:+79313732942"><img src="@/assets/icons/phone.png" alt="#">+7 (931) 373 29 42</a>
    </div>
</template>
<script>
export default {
    name: 'vHeaderPhone'
}
</script>
<style scoped lang="scss">
    .v-header-phone{
        display: flex;
        flex-direction: column;
        align-items: center;
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
    }
    .v-header_block_phone_link_new{
    margin-top: 20px;
}

</style>