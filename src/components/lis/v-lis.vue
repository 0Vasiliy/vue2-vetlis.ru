<template>
    <section class="v-lis">
       <div class="container">
            <div class="v-lis-block">
                <div class="wave-lis"> 
                    <div class="text-container-lis">
                        <h1>Ветеринарная клиника <br>ЛИС</h1>
                    </div>
                </div>
                <div class="wave">
                    <div class="text-container">
                        <h1>Лечение</h1>
                    </div>
                </div>
                <div class="wave">
                    <div class="text-container">
                        <h1>Иследование</h1>
                    </div>
                </div>
                <div class="wave">
                    <div class="text-container">
                        <h1>Стремление</h1>
                    </div>
                </div>
            </div>
       </div>
    </section>
</template>

<script>

export default {
   name: 'vLis' 
}
</script>

<style>
.v-lis{
    margin-top: 50px;
}
.v-lis-block{
    margin: auto;
    font-family: sans-serif;
    overflow: auto;  
    background: #bdc3c7;
    background: -webkit-linear-gradient(to right, #abbaab, #bdc3c7);  
    background: linear-gradient(to right, #abbaab, #bdc3c7); 
    background-size: 400% 400%;
    background-attachment: fixed;
    padding:75px 0 75px 0;
    border-radius: 20px;
}


@keyframes gradient {
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0% 0%;
    }
}

.wave-lis {
    animation: wave-lis 10s -3s linear infinite;
    transform: translate3d(0, 0, 0);    
}
 
.wave-lis:nth-of-type(2) {
    bottom: -1.25em;
    animation: wave 18s linear reverse infinite;
    opacity: 0.8;
}

.wave-lis:nth-of-type(3) {
    bottom: -2.5em;
    animation: wave 20s -1s reverse infinite;
    opacity: 0.9;
}

@keyframes wave-lis {
    2% {
        transform: translateX(1);
    }

    25% {
        transform: translateX(-25%);
    }

    50% {
        transform: translateX(-50%);
    }

    75% {
        transform: translateX(-25%);
    }

    100% {
        transform: translateX(1);
    }
}  

.text-container {
  margin-left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.text-container-lis{
  margin-left: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  margin-bottom: 70px;  
}
.text-container-lis h1{
  font-size: 75px;
  color: rgba(225,225,225, .01);
  background-image: url("../../assets/images/lis_fon3.jpg");
  background-repeat: repeat;
  -webkit-background-clip:text;
  animation: animate 15s ease-in-out infinite;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
}

.text-container h1 { 
  margin-left: 50px;
  font-size: 50px;
  color: rgba(225,225,225, .01);
  background-image: url("../../assets/images/lis_fon6.jpg");
  background-repeat: repeat;
  -webkit-background-clip:text;
  animation: animate 15s ease-in-out infinite;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
}
  @keyframes animate {
    0%, 100% {
      background-position: left top;
    }
    25%{
      background-position: right bottom;
     }
    50% {
      background-position: left bottom;
    }
    75% {
      background-position: right top;
    }   
}

</style>