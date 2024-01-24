<template>
  <div class="v-mainapp">
      <v-sidepanel/>
      <v-header/>
      <v-menu/>
      <v-carousel-main/>
      <v-line/>
      <v-news/>
      <v-line/>
      <v-services/>
      <v-line/>
      <v-vetarticles/>
      <v-line/>
      <v-lis/>
      <v-line/>
      <v-recommendations/>
      <v-line/>
      <v-line-animate/>
      <v-line/>
      <v-map/>
      <v-line/>
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
import vRecommendations from './recommendations/v-recommendations.vue'
import vLineAnimate from './line-animate/v-line-animate.vue'
import vLine from './line/v-line.vue'
import vMap from './map/v-map.vue'

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
    vLis,
    vRecommendations,
    vLineAnimate,
    vLine,
    vMap
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
