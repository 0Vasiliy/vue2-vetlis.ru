<template>
    <button type="button" class="v-button" id="phone_btn">
        <h1 class="v-button-title">Запись на приём</h1>
    </button>
</template>
<script>
export default {
    name: 'vButton'
}
</script>
<style scoped lang="scss">
    .v-button{
        display: flex;
        align-items: center;
        margin-left: 20px;
        width: 200px;
        height: 40px;        
        border: none;
        background: hsla(221, 45%, 73%, 1);
        background: linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%);
        background: -moz-linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%);
        background: -webkit-linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%);
        filter: gradient( startColorstr="#9BAFD9", endColorstr="#103783", GradientType=1 );
        border-radius: 4px;
        cursor: pointer;
        &-title{
            margin-top: 3%;
            font-size: 18px;
            align-items: center;
            text-align: center;
            line-height: 21px;
            font-family: 'Museo Sans Cyrl';
            font-weight: 300;
            color: white;
        }
    }
</style>