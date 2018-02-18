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
                $.ajax({
                    type: "POST",
                    url: 'http://localhost:8080/signup',
                    data:{
                        email:this.userData.login,
                        password:this.userData.password
                    },
//                    xhrFields: {
//                        withCredentials: true
//                    },
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
