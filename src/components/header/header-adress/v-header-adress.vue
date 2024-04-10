<template>
    <div class="v-header-adress">
        <h1 class="v-header_block_adress_title">г. Санкт-Петербург<br>ул.Русановская<br>д.19 к.4<br>с 10.00-21.00</h1>
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
        text-decoration: none;
        font-size: 28px;
        font-weight: 300;
        text-align: center;
        line-height: 38px;
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