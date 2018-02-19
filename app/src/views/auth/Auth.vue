<template>
    <div>
        <h4>Авторизация/Вход в систему</h4>
        <form>
            <input v-model="userData.login" name="login"/>
            <input v-model="userData.password" name="password"/>
            <input type="submit" value="Войти" @click.prevent="sendData"/>
        </form>
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
