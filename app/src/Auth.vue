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
                $.ajax({
                    type: "POST",
                    url: 'http://localhost:8080/login',
                    data:{
                        email:this.userData.login,
                        password:this.userData.password
                    },
                    xhrFields: {
                        withCredentials: true
                    },
                    success: function(data){
                        console.log(data);
                    },
                    error:function(err){
                        console.log(err)
                    }
                });
            }
        }
    }
</script>
