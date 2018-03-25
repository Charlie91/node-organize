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
        background:rgb(241, 241, 241);
        padding:30px;
        border-radius:3px;
        box-shadow: 0 0 3px #d0d0d0;
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
