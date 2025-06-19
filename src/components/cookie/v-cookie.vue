<template>
    <div v-if="showCookie" class="v-cookie-overlay">
     <div class="v-cookie-modal">
            <div class="v-cookie-content">
                <div class="v-cookie-header">
                    <h3 class="v-cookie-title">Использование файлов cookie</h3>
                    <button class="v-cookie-close" @click="closeCookie" aria-label="close">
                        <svg width="20" height="20" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183716 1.30861 -0.183716 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183716 26.55 -0.183716 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z" fill="#757575"/>
                        </svg>
                    </button>
                </div>
                <div class="v-cookie-body">
                    <p class="v-cookie-text">
                        Мы используем файлы cookie для улучшения работы сайта и предоставления персонализированного контента. 
                        Продолжая использовать сайт, вы соглашаетесь с использованием файлов cookie.
                    </p>
                </div>
                <div class="v-cookie-footer">
                    <button class="v-cookie-btn v-cookie-btn-accept" @click="acceptCookie">
                        Принять
                    </button>
                    <button class="v-cookie-btn v-cookie-btn-close" @click="closeCookie">
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vCookie',
    data() {
        return {
            showCookie: false
        }
    },
    mounted() {
        // Проверяем, было ли уже принято соглашение
        const cookieAccepted = localStorage.getItem('cookieAccepted');
        if (!cookieAccepted) {
            this.showCookie = true;
        }
    },
    methods: {
        acceptCookie() {
            localStorage.setItem('cookieAccepted', 'true');
            this.showCookie = false;
        },
        closeCookie() {
            this.showCookie = false;
        }
    }
}
</script>

<style scoped lang="scss">
.v-cookie-overlay {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    z-index: 9999;
}

.v-cookie-modal {
    background: white;
    border-radius: 20px 20px 0 0;
    padding: 30px 20px 30px 20px;
    box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.3);
    border: 1px solid #723030;
    border-bottom: none;
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
}

.v-cookie-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.v-cookie-title {
    font-size: 24px;
    font-weight: 700;
    font-family: 'Museo Sans Cyrl';
    color: #757575;
    margin: 0;
    line-height: 1.2;
}

.v-cookie-close {
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    border-radius: 4px;
    transition: background-color 0.3s;
    
    &:hover {
        background-color: #f5f5f5;
    }
}

.v-cookie-body {
    margin-bottom: 25px;
}

.v-cookie-text {
    font-size: 16px;
    font-weight: 300;
    font-family: 'Museo Sans Cyrl';
    color: #757575;
    line-height: 1.5;
    margin: 0;
}

.v-cookie-footer {
    display: flex;
    gap: 15px;
    justify-content: flex-end;
}

.v-cookie-btn {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 300;
    font-family: 'Museo Sans Cyrl';
    transition: all 0.3s;
    
    &-accept {
        background: hsla(221, 45%, 73%, 1);
        background: linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%);
        background: -moz-linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%);
        background: -webkit-linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%);
        filter: gradient( startColorstr="#9BAFD9", endColorstr="#103783", GradientType=1 );
        color: white;
        
        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(16, 55, 131, 0.3);
        }
    }
    
    &-close {
        background: #f5f5f5;
        color: #757575;
        border: 1px solid #e0e0e0;
        
        &:hover {
            background: #e0e0e0;
        }
    }
}

@media (max-width: 1600px) {
    .v-cookie-modal {
        max-width: 1200px;
    }
}
@media (max-width: 1500px) {
    .v-cookie-modal {
        max-width: 1100px;
    }
}
@media (max-width: 1420px) {
    .v-cookie-modal {
        max-width: 1000px;
    }
}
@media (max-width: 1390px) {
    .v-cookie-modal {
        max-width: 1150px;
    }
}
@media (max-width: 991px) {
    .v-cookie-modal {
        max-width: 100%;
    }
}
@media (max-width: 600px) {
    .v-cookie-modal {
        padding: 20px;
        max-width: 100%;
        width: 100%;
    }
    
    .v-cookie-title {
        font-size: 20px;
    }
    
    .v-cookie-text {
        font-size: 14px;
    }
    
    .v-cookie-footer {
        flex-direction: column;
        gap: 10px;
    }
    
    .v-cookie-btn {
        width: 100%;
        padding: 12px 20px;
    }
}
</style> 