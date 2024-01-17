<template>
    <section class="v-news col-xl-9 col-md-9 col-10" id="news_action">
            <div class="v-news_block">
               <div class="container">
                <div class="row"> 
                    <div class="v-news_title">
                        <h1>ВНИМАНИЕ!
                            Уважаемые посетители!
                            В период действия новых ограничений в связи с ростом заболеваемости COVID-19 сообщаем, что Ветеринарная клиника ""ЛИС""
                            продолжает свою работу, поскольку подавляющее большинство пациентов - это тяжелобольные и экстренные животные.
                            
                            Прием посетителей будет осуществляться ТОЛЬКО В СРЕДСТВАХ ИН.ЗАЩИТЫ(В МАСКАХ И ПЕРЧАТКАХ).
                            Напоминаем
                            -просьба находиться в зале на расстоянии, соблюдать физическую дистанцию с другими посетителями.
                            -в клинике с одним животным должен находится один посетитель.
                        </h1>
                        <vButton class="button-news"/>
                    </div>
                  
                </div>
               </div>
            </div>
    </section>   
</template>
<script>
import vButton from '@/components/buttons/v-button.vue'
export default {
    name: 'v-news',
    components:{
        vButton
    }
}
</script>
<style scoped lang="scss">
    .v-news_block{
    background: url(../../assets/images/news/fon_vet22.jpg) center (center/cover) no-repeat;
    background-size: contain;
    margin-top: 30px;
    overflow: hidden;
    object-fit: cover;       
    border-radius: 20px; 
    max-width: 100%;
    min-height: 550px;     
}
.v-news_title{
    margin-top: 5%;
    margin-left: 10%;   
    max-width: 40%;
    h1{   
        font-size: 14px;
        text-align: center;
        line-height: 35px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 700;
        color: #757575;
    }
}
.button-news{
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
}
// @media (min-width: 1600px){
//     .container {
//     max-width: 1434px
// }
// }
</style>
