<template>
    <div id="app">
        <img src="./assets/logo.png">
        <template v-if="showRegistr">
            <Reg></Reg>
            <a @click="displayAuthForm">Войти с существующего аккаунта</a>
        </template>
        <template v-else>
            <Auth></Auth>
            <a @click="displayAuthForm">Зарегистрироваться</a>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data(){
            return{
                showRegistr:false
            }
        },
        mounted(){
            $.ajax({
                type:"GET",
                url: 'http://localhost:8080/profile',
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
        },
        methods:{
            displayAuthForm: function () {
                this.showRegistr = !this.showRegistr
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    #app img{
        width:100px;
        height:auto;
    }
</style>
