<template>
    <div class="v-therapy">
        <div class="container">
            <div class="row">
                <h1 class="v-therapy_title">Терапия</h1>
            </div>
            <div class="row">              
                <div class="v-therapy_item col-3 col">
                        <a class="v-therapy_block">
                            <span>Дыхательная система</span>
                            <!-- <img src="@/assets/icons/services/therapy.svg"> -->
                        </a>
                </div>
            </div>           
        </div>
    </div>
</template>

<script>

export default {
    name: 'vTherapy'
}
</script>
<style scoped lang="scss">
    .v-therapy{
    display: flex;
    flex-direction: row;
    margin-top: 100px; 
    margin-right: 11%;
    margin-left: 11.5%;
    max-width: 1550px;
    }

    .v-therapy_item{   
        box-sizing: content-box; 
        display: flex;
        margin-top: 30px;  
        max-width: 20%;
        padding: 10px 10px;
        height: 100px;
        border-radius: 20px;  
        border: 1px solid #723030;
        cursor: pointer;
        align-items: center;       
    }
    .v-therapy_title{
        font-size: 36px;
        font-weight: 300;
        text-align: center;
        line-height: 21px;
        font-family: 'Museo Sans Cyrl';
        font-weight: 700;
        color: #757575;
    }
    .v-therapy_block{
        text-decoration: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        span{
            font-size: 20px;
            font-weight: 300;
            text-align: center;
            line-height: 20px;
            font-family: 'Museo Sans Cyrl';
            font-weight: 300;
            color: #757575;
        }
        img{
            max-width: 45px;
            margin-left: 5px;
        }
}
@media (min-width: 1600px){
    .container {
        max-width: 1434px;
    }
}
@media (min-width: 768px) and (max-width: 1100px){
    .col-3{
        flex: 0 0 35%;
        max-width: 35%;
    }
}
@media (max-width: 860px){
    .col-3{
        flex: 0 0 45%;
        max-width: 45%;
    }
    .v-services{
        margin-right: 10%;
        margin-left: 12%;
    }
}
@media (max-width: 767px){
    .col-3 {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }
}
</style>