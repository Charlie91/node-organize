<template>
    <div id="app">
        <template v-if="showRegistr">
            <Reg></Reg>
            <a @click="displayAuthForm"></a>
            <b-link class="reglink" @click="displayAuthForm">Войти с существующего аккаунта</b-link>
        </template>
        <template v-else>
            <Auth></Auth>
            <b-link class="reglink" @click="displayAuthForm">Зарегистрироваться</b-link>
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
    body{
        background-image:url('../assets/background.jpg');
        background-size:cover;
    }
    .form-control{
        background: rgba(0,0,0,0.3);
    }
    .form-control:focus{
        background: rgba(0,0,0,0.5);
    }


</style>

<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width:60%;
        margin:auto;
        margin-top: 160px;
        color:#fff;
        background:rgba(0,0,0,0.5);
        padding:30px;
        border-radius:3px;
        border: 1px solid #28a7459e;
    }
    #app img{
        width:100px;
        height:auto;
    }

    .reglink{
        margin-top:20px;
        display:block
    }

</style>
