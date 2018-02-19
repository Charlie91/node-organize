<template>
    <div id="app">
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
    import axios from 'axios';
    export default {
        name: 'app2',
        data(){
            return{
                showRegistr:false
            }
        },
        mounted(){
            axios.get('http://localhost:8080/profile',{
                withCredentials: true
            })
                .then(function (response) {
                    if(response.data.local){
                        window.location = window.location.origin + '/#/dashboard';
                    }
                })
                .catch(function (error) {
                    console.log(error);
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
