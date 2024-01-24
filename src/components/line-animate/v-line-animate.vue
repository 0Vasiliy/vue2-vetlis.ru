<template>
    <div lass="v-line-animate col-xl-9 col-md-9 col-10">
      <div class="container">
        <div class="v-line-animate-block">
            <svg class="wave-divider" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
            <defs>
                <path id="gentle-wave"
                d="M-160 44c30 0 
                58-18 88-18s
                58 18 88 18 
                58-18 88-18 
                58 18 88 18
                v44h-352z" />
            </defs>
            <g class="wave-parallax1"><use xlink:href="#gentle-wave" x="50" y="3" fill="#BFE2FF"/></g>
            <g class="wave-parallax2"><use xlink:href="#gentle-wave" x="50" y="0" fill="#5e9cd1"/></g>
            <g class="wave-parallax3"><use xlink:href="#gentle-wave" x="50" y="9" fill="#73bbf5"/></g>
            <g class="wave-parallax4"><use xlink:href="#gentle-wave" x="50" y="6" fill="#337AB7"/></g>
        </svg>
        <div class="dark-block">
            <div class="text-container">
                <h1>Ветеринарная клиника ЛИС</h1>
            </div>
            <div class="text-container">
                <h1>+7 (911) 259 83 84</h1>
            </div>
            <div class="text-container">
                <h1>+7 (931) 373 29 42</h1>
            </div>
            <div class="text-container-text">
                <h1>ул. Русановская д.19 к.4</h1>
            </div>
            <div class="text-container">
                <button>Запись на приём</button>
            </div>
        </div>
        <svg class="wave-divider dark-bg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
            <g class="wave-parallax1"><use xlink:href="#gentle-wave" x="50" y="3" fill="#5e9cd1"/></g>
            <g class="wave-parallax2"><use xlink:href="#gentle-wave" x="50" y="0" fill="#73bbf5"/></g>
            <g class="wave-parallax3"><use xlink:href="#gentle-wave" x="50" y="9" fill="#BFE2FF"/></g>
            <g class="wave-parallax4"><use xlink:href="#gentle-wave" x="50" y="6" fill="#FFFFFF"/></g>
        </svg>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name: 'vLineAnimate'
}
</script>
<style scoped lang="scss">
    .v-line-animate{
        max-width: 1400px;
        width: 100%;
    }
   wave-divider {
    width: 100%;
    height: 60px;
    display:block;    
}
.wave-parallax1 {
    animation: wave-move1 10s linear infinite;
}
.wave-parallax2 {
    animation: wave-move2 8s linear infinite;
}
.wave-parallax3 {
    animation: wave-move3 6s linear infinite;
}
.wave-parallax4 {
    animation: wave-move4 4s linear infinite;
}
@keyframes wave-move1 {
    0% {
        transform: translateX(85px);
    }
    100% {
        transform: translateX(-90px);
    }
}
@keyframes wave-move2 {
    0% {
        transform: translateX(-90px);
    }
    100% {
        transform: translateX(85px);
    }
}
@keyframes wave-move3 {
    0% {
        transform: translateX(85px);
    }
    100% {
        transform: translateX(-90px);
    }
}
@keyframes wave-move4 {
    0% {
        transform: translateX(-90px);
    }
    100% {
        transform: translateX(85px);
    }
}
.dark-block {
    background: #337AB7;
    padding: 50px 0;
    font-size: 26px;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    color: #FFF;
}
.dark-bg {
    background: #337AB7;
}
.light-block {
    background: #FFF;
    padding: 50px 0;
    font-size: 26px;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    color: #337AB7;
} 
.text-container {
  margin-left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.text-container h1 { 
  margin-left: 50px;
  font-size: 50px;
  color:#D3D3D3;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
}
.text-container-text {
  margin-left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.text-container-text h1 { 
  margin-left: 50px;
  font-size: 30px;
  color:#D3D3D3;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
}
 button { 
  margin-top: 50px;
  max-width: 350px;
  padding: 0 15px 0 15px;
  height: 70px; 
  margin-left: 50px;
  font-size: 28px;
  color: rgba(225,225,225, .01);
  background-image: url("../../assets/images/lis_fon6.jpg");
  background-repeat: repeat;
  -webkit-background-clip:text;
  animation: animate 15s ease-in-out infinite;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
}
button{
    border-radius: 10px;
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
@media (min-width: 1400px)
{
    .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container
     {
    max-width: 1400px;
    width:72%
    }
}
</style>