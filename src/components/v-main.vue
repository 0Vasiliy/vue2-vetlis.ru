<template>
  <div class="v-mainapp">
      <v-sidepanel/>
      <v-header/>
      <v-menu/>
      <v-about/>
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
      <v-footer/>
      <v-cookie/>
  </div>
</template>

<script>
import vHeader from './header/v-header.vue'
import vNews from './news/v-news.vue'
import vSidepanel from './sidepanel/v-sidepanel.vue'
import vAbout from './about/v-about.vue'
import vServices from './services/v-services.vue'
import vMenu from './menu/v-menu.vue'
import vVetarticles from './vetarticles/v-vetarticles.vue'
import vLis from './lis/v-lis.vue'
import vRecommendations from './recommendations/v-recommendations.vue'
import vLineAnimate from './line-animate/v-line-animate.vue'
import vLine from './line/v-line.vue'
import vMap from './map/v-map.vue'
import vFooter from './footer/v-footer.vue'
import vCookie from './cookie/v-cookie.vue'

export default {
  name: 'v-mainapp',
  components:{
    vHeader,
    vSidepanel,
    vAbout,
    vNews,
    vServices,
    vMenu,
    vVetarticles,
    vLis,
    vRecommendations,
    vLineAnimate,
    vLine,
    vMap,
    vFooter,
    vCookie
  },
  props: {
   
  }
}
</script>

<style>
.v-mainapp{
  min-width: 300px;
}
 @import '@/assets/css/animate.css';
</style>
