<template>
    <form class="v-modal v-form-validate row g-3" ref="form" @submit.prevent="sendEmail">
        <div class="v-form-block">
            <div class="v-modal-close" @click="closeModal" aria-label="close">
                <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183716 1.30861 -0.183716 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183716 26.55 -0.183716 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z" fill="black"/>
                </svg>
            </div>
            <div class="v-form-group">
            
            <div class="v-form-input  col-md-8">
                <label for="surname" class="form-label">Фамилия:</label>
                <input 
                type="input" 
                class="form-control" 
                id="surname"
                name="surname" 
                placeholder="Фамилия:"
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
              
            <div class="v-form-input col-md-8">
                <label for="inputAddress2" class="form-label">Имя:</label>
                <input 
                type="text"
                class="form-control"
                id="name"
                name="name" 
                placeholder="Имя:"
                v-model.trim="form.name"
                :class="$v.form.name.$error ? 'is-invalid' : ''"
                >
                <p v-if="$v.form.name.$dirty && !$v.form.name.required" class="invalid-feedback">
                Введите Имя
                </p>
            </div> 
        
            <div class="v-form-input  col-md-8">
                <label for="inputEmail4" class="form-label">email:</label>
                <input 
                type="email" 
                class="form-control" 
                id="email" 
                name="email" 
                placeholder="email@mail.ru"
                v-model.trim="form.email"
                :class="$v.form.email.$error ? 'is-invalid' : ''"
                >
                <p v-if="$v.form.email.$dirty && !$v.form.email.required" class="invalid-feedback">
                Введите email
                </p>
                <p v-if="$v.form.email.$dirty && !$v.form.email.email" class="invalid-feedback">
                Email неккоректный
                </p>
            </div>          
           
            <div class="v-form-input col-md-8">
                <label for="inputAddress3" class="form-label">Телефон:</label>
                <input
                type="tel"
                class="form-control" 
                id="phone" 
                name="phone" 
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
                    
            <div class="v-form-input col-md-8">
                <label for="inputAddress3" class="form-label">Опишите вашу проблему:</label>
                <textarea
                type="text"
                class="form-control" 
                id="text" 
                name="text" 
                placeholder="Введите текст:"
                v-model.trim="form.text"           
                :class="$v.form.text.$error ? 'is-invalid' : ''"                                      
                />
                <p v-if="$v.form.text.$dirty && !$v.form.text.required" class="invalid-feedback">
                Поле не должно быть пустым
                </p>
            </div>
             
            <div class="v-form-input col-md-8">
                <button type="submit" class="v-form-btn btn btn-primary">Запись на приём</button>
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
import emailjs from '@emailjs/browser';

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
                email: '',
                phone: '',
                text: '',
            },           
        }
    },
    validations: {
      form: {
        surname: { required, minLength: minLength(5)},
        name: {required},
        email: { required, email },
        phone: {required, numeric},
        text: {required,},
      }
    },
    methods:{
    closeModal(){
        this.$emit('close')
    },
    sendEmail() {
        this.$v.form.$touch()
        if (!this.$v.form.$error) {
                alert( 'Ваша заявка отправлена! В ближайшее время с вами свяжутся'),
            this.$emit('close');
        }
      emailjs
        .sendForm('service_*****', 'template_*****', this.$refs.form, {
          publicKey: '*********',
        
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    },
  },
}

</script>

<style scoped>
  
    .v-form-validate{
        position: fixed;
        top:70px;
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
        margin-top: 10px;
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
    textarea{
        border: 3px solid teal;;
    }
    p{
        height: 5px;
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
    }
    .v-modal-close{
        left: 355px;
        }
    @media(max-width: 400px){
        .form-selected {
        flex: 0 0 75%;
        width: 75%;
        }
    }
        .v-modal-close{
        left: 345px;
        }
        .v-form-btn{
            max-width: 200px;
            font-size: 13px;
            height: 35px;
        }
        label,input,select,option,textarea{
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
        label,input,select,option,textarea{
            font-size: 9px;
        }
        .v-form-btn{
            max-width: 130px;
            font-size: 10px;
        }
        .v-modal-close{
        left: 280px;
        }
    }
    @media(max-width: 260px){
        
        label,input,select,option,textarea{
            font-size: 8px;
        }
        .v-form-btn{
            max-width: 100px;
            font-size: 8px;
        }
    }
</style>