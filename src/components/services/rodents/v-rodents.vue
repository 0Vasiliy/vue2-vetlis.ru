<template>
    <div class="v-rodents">
        <div class="v-modul-block">
               <div class="v-modul-block-left">
                <h1 class="v-modul_title">Лечение грызунов и зайцеобразных</h1> 
                <div class="v-modul-subtitle">
                    
                    <img src="../../../assets/images/therapy/rodents.jpg" class="card-img-top r-img" alt="oko2">
                    
                </div>                                       
                </div>               
                <v-side/>
            </div> 
    </div>
</template>

<script>
import vSide from '@/components/side/v-side.vue'
export default {
    name: 'vRodents',
    components: {
        vSide,
    },
}

</script>

<style scoped lang="scss">
    @import '@/assets/css/modul.scss';
</style>