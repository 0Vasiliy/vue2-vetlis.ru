<template>
    <div class="v-hamburger">
        <span></span>
        <span class="long"></span>
        <span></span>
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
        background: #151812;
    }
    span.long {
        width: 36px;
    }
}
</style>