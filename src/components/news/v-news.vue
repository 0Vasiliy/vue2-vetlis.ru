<template>
     <div class="v-news" id="news_action">       
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
            </div>               
        </div>       
    </div>
</template>
<script>
export default {
    name: 'v-news',
}
</script>
<style scoped lang="scss">
    .v-news{
        max-width: 1920px;
    }
    .v-news_block{
    background: url(../../assets/images/news/fon_vet2.jpg) center (center/cover) no-repeat;
    margin-top: 30px;
    margin-right: 50px;
    margin-left: 50px;
    overflow: hidden;
    object-fit: cover;       
    border-radius: 20px; 
    max-width: 100%;
    min-height: 500px;     
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

</style>
