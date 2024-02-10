<template>
    <form class="v-modal v-form-validate row g-3" @submit.prevent="handlerSubmit">
        <div class="v-form-block">
            <div class="v-modal-close" @click="closeModal" aria-label="close">
                <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183716 1.30861 -0.183716 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183716 26.55 -0.183716 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z" fill="black"/>
                </svg>
            </div>
            <div class="v-form-group">
            <!-- Фамилия -->
            <div class="v-form-input  col-md-8">
                <label for="surname" class="form-label">Фамилия</label>
                <input 
                type="input" 
                class="form-control" 
                id="surname" 
                placeholder="Фамилия"
                v-model.trim="form.surname"
                :class="$v.form.surname.$error ? 'is-invalid' : ''"
                >
                <p v-if="$v.form.surname.$dirty && !$v.form.surname.required" class="invalid-feedback">
                Введите фамилию
                </p>
                <p v-if="$v.form.surname.$dirty && !$v.form.surname.minLength" class="invalid-feedback">
                Здесь должно быть менее 3-х символов
                </p>
            </div>
                 <!-- Имя -->
            <div class="v-form-input col-md-8">
                <label for="inputAddress2" class="form-label">Имя</label>
                <input 
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Имя"
                v-model.trim="form.name"
                :class="$v.form.name.$error ? 'is-invalid' : ''"
                >
                <p v-if="$v.form.name.$dirty && !$v.form.name.required" class="invalid-feedback">
                Введите Имя
                </p>
            </div> 
                    <!-- Отчество -->
            <div class="v-form-input col-md-8">
                <label for="inputAddress2" class="form-label">Отчество</label>
                <input 
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Отчество"
                v-model.trim="form.patronymic"
                :class="$v.form.patronymic.$error ? 'is-invalid' : ''"
                >
                <p v-if="$v.form.patronymic.$dirty && !$v.form.patronymic.required" class="invalid-feedback">
                Введите Отчество
                </p>
            </div> 
            <!-- email -->
            <div class="v-form-input  col-md-8">
                <label for="inputEmail4" class="form-label">Имя</label>
                <input 
                type="email" 
                class="form-control" 
                id="inputEmail4" 
                placeholder="email@mail.ru"
                v-model.trim="form.email"
                :class="$v.form.email.$error ? 'is-invalid' : ''"
                >
                <p v-if="$v.form.email.$dirty && !$v.form.email.required" class="invalid-feedback">
                Обязательное поле
                </p>
                <p v-if="$v.form.email.$dirty && !$v.form.email.email" class="invalid-feedback">
                Email неккоректный
                </p>
            </div>          
            <!-- phone -->
            <div class="v-form-input col-md-8">
                <label for="inputAddress3" class="form-label">Телефон</label>
                <input
                type="tel"
                class="form-control" 
                id="inputAddress3" 
                placeholder="+7(000)-000-00-00"
                v-model.trim="form.phone"
                v-mask="'##################'"
                :class="$v.form.phone.$error ? 'is-invalid' : ''"                
                maxlength="18"
                minlength="18" 
                v-phone           
                >
                <p v-if="$v.form.phone.$dirty && !$v.form.phone.required" class="invalid-feedback">
                Введите номер телефона
                </p>
            </div>             
                <!-- button -->
            <div class="v-form-input col-md-8">
                <button type="submit" class="v-form-btn btn btn-primary">Записасться на приём</button>
            </div>       
            </div>  
        </div> 
        <v-overlay/>   
    </form>   
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email, numeric} from 'vuelidate/lib/validators'
import vOverlay from '../overlay/v-overlay.vue'

export default {
    name: 'vModal',
    components:{
        vOverlay
    },
    mixins: [validationMixin],      
    data(){
        return{
            form:{
                surname: '',
                name: '',
                patronymic: '',
                phone: '',
                email: '',
            },           
        }
    },
    validations: {
      form: {
        surname: { required, minLength: minLength(5)},
        name: {required},
        patronymic: {required},
        email: { required, email },
        phone: {required, numeric},
      }
    },
    methods:{
        handlerSubmit(){
            this.$v.form.$touch()
        if (!this.$v.form.$error) {
          console.log('Валидация прошла успешно')
        }
    },
    closeModal(){
        this.$emit('close')
    }
    }
}
</script>

<style scoped>
  
    .v-form-validate{
        position: fixed;
        top:50px;
        right: 0;
        left: 0;
        bottom: 0;
        max-width: 600px;
        margin: 0 auto;  
        z-index: 998;
    }
    .v-form-block{
        z-index: 10;
    }
    .v-form-group{
        margin-left: 50px;
        margin-right: 50px;
        padding: 70px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 4px solid #2f4f4f;
        background-color: white;
     
    }
    .v-form-input{
        margin-top: 15px;
    }

    .v-form-btn{
        max-width: 250px;
        margin-top: 20px;
        height: 45px;
        background-color: #778899;
        color: white;
        font-size: 18px;
        border: none;
    }
    .v-form-btn:hover{
        transition: all ease-in .3s;
        background-color: #2f4f4f;
    }
    .v-form-radio{
        display: flex;
    }
    .radio-fimale {
        margin-left: 20px;
    }
    .form-option-list{
        width: 100px;
        font-size: 10px;
    }
    label{
        display: flex;
        color: #2f4f4f;  
    }
    input{
        border: 3px solid teal;;
    }
    select{
        border: 3px solid teal;;
    }
    option{
        color: #2f4f4f;
        max-width: 200px;
        font-size: 14px;
    }
    .v-modal-close{
        position: absolute;
        top: -20px;
        left: 550px;
        cursor: pointer;
  } 
    @media(max-width: 1200px){
        .v-form-input{
        margin-top: 10px;
        }
        .v-form-group{
            padding: 10px;
        }
        .v-form-btn{
            margin-bottom: 50px;
        }
    }
    @media(max-width: 767px){
        .form-selected {
        flex: 0 0 50%;
        width: 50%;
        }
    }
    @media(max-width: 600px){
        .v-modal-close{
        top: -15px;
    }
    }
    @media(max-width: 585px){
        .form-selected {
        flex: 0 0 55%;
        width: 55%;
        }
        .v-modal-close{
        top: -13px;
        left: 520px;
        }
    }
    @media(max-width: 555px){
        .form-selected {
        flex: 0 0 57%;
        width: 57%;
        }
        .v-modal-close{
        left: 500px;
        }
    }
    @media(max-width: 540px){
        .form-selected {
        flex: 0 0 60%;
        width: 60%;
        }
        .v-modal-close{
        left: 480px;
        }
    }
    @media(max-width: 510px){
        .form-selected {
        flex: 0 0 62%;
        width: 62%;
        }
        .v-modal-close{
        left: 455px;
        }
    }
    @media(max-width: 500px){
        .form-selected {
        flex: 0 0 65%;
        width: 65%;
        }
        .v-modal-close{
        left: 435px;
        }
    }
    @media(max-width: 490px){
        .form-selected {
        flex: 0 0 67%;
        width: 67%;
        }
        .v-modal-close{
        left: 430px;
        }
    }
    @media(max-width: 470px){
        .form-selected {
        flex: 0 0 71%;
        width: 71%;
        }
        .v-modal-close{
        left: 410px;
        }
    }
    @media(max-width: 460px){
        .form-selected {
        flex: 0 0 73%;
        width: 73%;
        }
        .v-modal-close{
        left: 405px;
        }
    }
    @media(max-width: 450px){
        .form-selected {
        flex: 0 0 80%;
        width: 80%;
        }
        .v-modal-close{
        left: 390px;
        }
    }
    @media(max-width: 430px){
        .form-selected {
        flex: 0 0 82%;
        width: 82%;
        }
        .v-modal-close{
        left: 370px;
        }
    }
    @media(max-width: 411px){
        .form-selected {
        flex: 0 0 85%;
        width: 85%;
        }
        .v-modal-close{
        left: 350px;
        }
    }
    @media(max-width: 400px){
        .form-selected {
        flex: 0 0 75%;
        width: 75%;
        }
        .v-modal-close{
        left: 345px;
        }
        .v-form-btn{
            max-width: 200px;
            font-size: 13px;
            height: 35px;
        }
        label,input,select,option{
            font-size: 12px;
        }
    }
    @media(max-width: 380px){
        .form-selected {
        flex: 0 0 78%;
        width: 78%;
        }
        .v-modal-close{
        left: 325px;
        }
    }
    @media(max-width: 370px){
        .form-selected {
        flex: 0 0 84%;
        width: 84%;
        }
        .v-modal-close{
        left: 320px;
        }
    }
    @media(max-width: 355px){
        .v-modal-close{
        left: 310px;
        }
    }
    @media(max-width: 350px){
        .form-selected {
        flex: 0 0 90%;
        width: 90%;
        }
        .v-modal-close{
        left: 300px;
        }
        .v-form-radio{
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        }
        .radio-fimale {
        margin-left: 4px;
        }
       
    }
    @media(max-width: 340px){
        .form-selected {
        flex: 0 0 100%;
        width: 100%;
        }
        .v-modal-close{
        left: 290px;
        }
    }
    @media(max-width: 325px){
        .v-modal-close{
        left: 285px;
        }
    }
    @media(max-width: 300px){  
        label,input,select,option{
            font-size: 10px;
        }
        .v-form-btn{
            max-width: 120px;
            font-size: 10px;
        }
        .v-modal-close{
        left: 280px;
        }
    }
    @media(max-width: 260px){
        
        label,input,select,option{
            font-size: 8px;
        }
        .v-form-btn{
            max-width: 100px;
            font-size: 8px;
        }
    }
</style>