<template>
    <div class="v-vaccination-chip">
        <div class="container">
           <div class="v-modul-block">
               <div class="v-modul-block-left">
                <h1 class="v-modul_title">Вакцинация и чипирование</h1> 
                <div class="v-modul-subtitle">Каждый человек, если он решил завести домашнее животное, в первую очередь должен поставить своему питомцу, кошке или собаке, обязательные профилактические прививки.
                    Кошки или собаки могут быть переносчиками опасных, а иногда даже смертельных для человека болезней, это бешенство, стригущий лишай, лептоспироз (или по-другому — глисты), токсоплазмоз, хламидиоз и сальмонеллез.
                    Наиболее опасное — бешенство. Чаще всего им можно заразиться после укуса больного животного. Вирус поражает центральную нервную систему и при отсутствии лечения или позднем обращении может привести к смерти.
                    <h2>Чипирование ― установка электронного чипа, используется для идентификации собак и кошек в базе данных. Наличие чипа необходимо на некоторых пунктах пограничного контроля. Номер чипа вносится в электронную базу данных и в международный паспорт животного. В случае пропажи животного, любая ветеринарная станция определит его владельцев и поможет вернуться домой.</h2>
                </div>                                        
                <div class="row">
                    <router-link  tag="a" to="/vVaccination" class="v-modul_block v-modul_item col-3 col"><span>Вакцинация</span></router-link>
                    <router-link  tag="a" to="/vChip" class="v-modul_block v-modul_item col-3 col"><span>Чипирование</span></router-link>
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
    name: 'vVaccinationChip',
    components: {
        vSide,
    },
}
</script>

<style scoped lang="scss">
    @import '@/assets/css/modul.scss';
</style>