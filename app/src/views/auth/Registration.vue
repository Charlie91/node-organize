<template>
    <div>
        <h4>Регистрация</h4>
        <b-form @submit="sendData">
            <b-form-group id="exampleInputGroup1"
                          label="Email/Логин:"
                          label-for="exampleInput1"
                          description="Логин или адрес почты">
                <b-form-input id="exampleInput1"
                              type="text"
                              v-model="userData.login"
                              placeholder="Введите логин">
                </b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup2"
                          label="Пароль:"
                          label-for="exampleInput2"
            >
                <b-form-input id="exampleInput1"
                              type="password"
                              v-model="userData.password"
                              placeholder="Введите пароль">
                </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="success">Зарегистрироваться</b-button>
        </b-form>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'Registration',
        data(){
            return {
                userData:{
                    login:'',
                    password:''
                }
            }
        },
        methods:{
            sendData(e){
                if(!(this.userData.login && this.userData.password))return;
                axios.post('http://localhost:8080/signup',
                    {
                        email:this.userData.login,
                        password:this.userData.password
                    }
                )
                    .then(function (response) {
                        console.log(response)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>
