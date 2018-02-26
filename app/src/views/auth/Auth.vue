<template>
    <div>
        <h4>Авторизация/Вход в систему</h4>
        <b-form @submit="sendData">
            <b-form-group
                          label="Email/Логин:"
                          label-for="exampleInput1"
                          description="Логин или адрес почты">
                <b-form-input
                              type="text"
                              v-model="userData.login"
                              placeholder="Введите логин">
                </b-form-input>
            </b-form-group>
            <b-form-group
                          label="Пароль:"
                          label-for="exampleInput2"
            >
                <b-form-input
                              type="password"
                              v-model="userData.password"
                              placeholder="Введите пароль">
                </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="success">Войти</b-button>
        </b-form>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'Auth',
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
                axios.post('http://localhost:8080/login',
                    {
                        email:this.userData.login,
                        password:this.userData.password
                    },
                    {
                        withCredentials: true
                    }
                )
                    .then(function (response) {
                        if(response.data.login === 'success'){
                            window.location = window.location.origin + '/#/dashboard';
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>
