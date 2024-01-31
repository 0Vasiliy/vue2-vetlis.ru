<template>
    <section class="v-news col-xl-9 col-md-9 col-10" id="news_action">          
               <div class="container">
                <div class="v-news_block">
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
                    <img src="../../assets/images/news/fon_vet_old.jpg">               
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
    display: flex;
    background: #B2FEFA;
    background: -webkit-linear-gradient(to right,#B2FEFA, #0ED2F7,);
    background: linear-gradient(to right, #B2FEFA, #0ED2F7,);
    max-width: 100%;   
    border-radius: 20px; 
}

    img{
       max-width: 800px; 
       border-radius: 20px;
       width: 100%;
       overflow: hidden;
       object-fit: cover; 
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
@media (min-width: 1600px){
    .container {
    max-width: 1400px
}
}
@media (max-width: 1250px){
   .v-news_block{
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column-reverse;
   } 
   .v-news_title{
    margin-left: auto;
    max-width: 80%;
   }
}
@media (max-width: 850px){
    .v-news_title{
        h1{
            line-height: 25px;
        }
    }
   }
   @media (max-width: 500px){
    .v-news_title{
        h1{
            line-height: 22px;
        }
    }
   }
</style>
