<template>
    <section class="v-line">
       <div class="container">
            <hr>
       </div>
    </section>
</template>
<script>
export default {
   name: 'vLine' 
}
</script>
<style scoped>
    hr {
    border: none;
    height: 3px;
    margin: 40px 0;
    background-image: linear-gradient(to right, #FFF,#008080, #BFE2FF,#008080, #FFF);
}
hr:before,
hr:after {
    content: '';
    display: inline-block;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    border: 2px solid #008080;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #FFF;
}
hr:after {
    animation: anim-hr 1s linear infinite;  
}
@keyframes anim-hr {
    0% {
        width: 40px;
        height: 40px;
    } 
    100% {
        width: 0;
        height: 0;
    }
}
</style>