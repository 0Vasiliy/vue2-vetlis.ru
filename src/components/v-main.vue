<template>
  <div class="v-mainapp">
      <v-sidepanel/>
      <v-header/>
      <v-menu/>
      <v-carousel-main/>
      <v-news/>
      <v-services/>
      <v-vetarticles/>
      <v-lis/>
  </div>
</template>

<script>
import vHeader from './header/v-header.vue'
import vNews from './news/v-news.vue'
import vSidepanel from './sidepanel/v-sidepanel.vue'
import vCarouselMain from './slider/v-Carousel-main.vue'
import vServices from './services/v-services.vue'
import vMenu from './menu/v-menu.vue'
import vVetarticles from './vetarticles/v-vetarticles.vue'
import vLis from './lis/v-lis.vue'

export default {
  name: 'v-mainapp',
  components:{
    vHeader,
    vSidepanel,
    vCarouselMain,
    vNews,
    vServices,
    vMenu,
    vVetarticles,
    vLis
  },
  props: {
   
  }
}
</script>

<style>
.v-mainapp{
  min-width: 320px;
}
 @import '@/assets/css/animate.css';
</style>
