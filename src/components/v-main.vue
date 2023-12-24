<template>
  <div class="v-main">
      <v-sidepanel/>
      <v-header/>
      <v-menu/>
      <v-carousel-main/>
      <v-news/>
      <v-services/>
  </div>
</template>

<script>
import vHeader from './header/v-header.vue'
import vNews from './news/v-news.vue'
import vSidepanel from './sidepanel/v-sidepanel.vue'
import vCarouselMain from './slider/v-Carousel-main.vue'
import vServices from './services/v-services.vue'
import vMenu from './menu/v-menu.vue'

export default {
  name: 'v-main',
  components:{
    vHeader,
    vSidepanel,
    vCarouselMain,
    vNews,
    vServices,
    vMenu 
  },
  props: {
   
  }
}
</script>

<style>
 @import '@/assets/css/animate.css';
</style>
