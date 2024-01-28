<template>
    <section class="v-map">
        <div class="container">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3AqPzQLUY6W4-H4Cxx1DdFkhTqbPZJsL87&amp;source=constructor" width="100%" height="600" frameborder="0"></iframe>
        </div>
    </section>
</template>
<script>
export default {
    name: 'vMap'
}
</script>
<style scoped lang="scss">
        @media (min-width: 1400px)
{
    .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container
     {
    max-width: 1400px;
    width:72%
    }
}
</style>