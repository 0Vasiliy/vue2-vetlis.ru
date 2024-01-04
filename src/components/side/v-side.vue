<template>
    <div class="v-side" data-v-sticky-container id="side">       
        <div class="v-side-right" v-sticky id="side2">
            <img src="@/assets/images/side/fon.jpg" class="card-img-top" alt="kot-23"> 
        </div>       
    </div>
</template>
<script>
import VueStickyDirective from '@renatodeleao/vue-sticky-directive'
export default {
    name: 'v-side',
    directives: {
    "sticky": VueStickyDirective
  },
}
</script>

<style scoped lang="scss">
    .v-side{
        margin-right: 0;
        flex: 0 0 30%;
        max-width: 30%;
        border: 1px solid gray;
        border-radius: 20px;
        padding: 30px;
        img{
            border-radius: 20px;
        }
    }
   
</style>