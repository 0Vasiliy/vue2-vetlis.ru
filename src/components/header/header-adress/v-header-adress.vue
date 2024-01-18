<template>
    <div class="v-header-adress">
        <h1 class="v-header_block_adress_title">ул.Русановская</h1>
    </div>
</template>
<script>
export default {
    name: 'vHeaderAdress'
}
</script>
<style scoped lang="scss">
    .v-header-adress{
        h1{
        // margin-top: 20px;
        text-decoration: none;
        font-size: 36px;
        font-weight: 300;
        text-align: center;
        line-height: 21px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 300;
        color: #757575;;
        }
    }
    .v-header_block_adress{ 
        display: flex;
        max-width: 200px;
        max-height: 80px;
}

</style>