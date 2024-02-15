<template>
    <div class="v-chip">
        <div class="container">
           <div class="v-modul-block">
               <div class="v-modul-block-left">
                <h1 class="v-modul_title">Чипирование</h1> 
                <div class="v-modul-subtitle">Чипирование это один из способов идентификации животных — самый продвинутый и надежный. Чип содержит в себе уникальный 15-значный код, по которому можно получить доступ к важной информации:
                    <ul>
                        <li>о животном (вид, порода, кличка, дата рождения и т.д.. Любая важная информация, при наличии);</li>
                        <li>о хозяине (имя, контактные данные);</li>
                        <li>о хозяине (имя, контактные данные);</li>
                    </ul>
                    <picture>
                        <source srcset="../../../../assets/images/chip/chip.webp" class="card-img-top r-img" type="image/webp">
                        <source srcset="../../../../assets/images/chip/chip.jpg" class="card-img-top r-img" type="image/jpeg"> 
                        <img src="../../../../assets/images/chip/chip.jpg" class="card-img-top r-img" alt="vac">
                    </picture>
                    <h1>Как выглядит микрочип</h1>
                    <h2>Размером он, как крохотное рисовое зернышко. Только оно сделано из биосовместимых материалов, чтобы не вступать в реакции с организмом животного, никак на него не влиять и даже не иметь такой возможности.</h2>
                    <h2>Внутри этой капсулы, конечно, находится устройство для передачи данных — интегральная микросхема.</h2>
                    <h2>Она не работает активно: никакого излучения или других полей. Никакого нагревания. Передача информации осуществляется мгновенно и только тогда, когда ее получают с помощью специального сканера.</h2>
                </div>                                        
                
                </div>               
                <v-contacts v-if="small"/>             
                <v-side v-else/>
            </div>            
        </div> 
    </div>
</template>

<script>
import resize from  '@/mixins/resize'
import vSide from '@/components/side/v-side.vue'
import vContacts from '@/components/contacts/v-contacts.vue'
export default {
    name: 'vChip',
    components: {
        vSide,
        vContacts,
    },
    mixins: [resize]
}
</script>
<style scoped lang="scss">
    @import '@/assets/css/modul.scss';
</style>