<template>
    <div class="v-others">
        <div class="container">
           <div class="v-modul-block">
               <div class="v-modul-block-left">
                <h1 class="v-modul_title">Основные терапевтические услуги</h1> 
                <div class="v-modul-subtitle">
                    
                    <img src="../../../../assets/images/therapy/others.jpg" class="card-img-top r-img" alt="sob">
                    
                </div>                                        
                </div>               
                <v-side/>
            </div>
             
        </div>
    </div>
</template>

<script>
import vSide from '@/components/side/v-side.vue'
export default {
    name: 'vOthers',
    components: {
        vSide,
    },
}
</script>
<style scoped lang="scss">
    @import '@/assets/css/modul.scss';
</style>