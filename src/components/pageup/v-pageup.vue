<template>
    <div class="v-pageup">
        <a href="#up" class="pageup">
            <img src="../../assets/icons/pageup/up.svg" alt="up">
        </a>     
    </div>
</template>

<script>
export default {
   name: 'vPageup',
   
   mounted(){
    // Up button
    let upp = document.querySelector('.pageup');

    window.onscroll = function(){
    if(window.pageYOffset > 580){
        upp.style.display = "block"
    }
    else{
        upp.style.display ="none"
    }
    }

    upp.addEventListener('click',function(){
    window.scrollBy({
        top:-document.documentElement.scrollHeight,
        behavior: "smooth"
    })
    })
   } 
}
</script>

<style scoped lang="scss">
   .pageup {
    display: none;
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 50px;
    height: 50px;
    img {
        width: 100%;
    }
}
</style>