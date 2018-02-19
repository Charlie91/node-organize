<template>
    <div>
        <h4>Регистрация</h4>
        <form>
            <input v-model="userData.login" name="login"/>
            <input v-model="userData.password" name="password"/>
            <input type="submit" value="Зарегистрироваться" @click.prevent="sendData"/>
        </form>
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
