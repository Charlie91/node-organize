<template>
    <div>
        <router-view></router-view>
        <div>
            <a @click="logOut">Выйти</a>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'full',
        mounted(){
            axios.get('http://localhost:8080/profile',{
                withCredentials: true
            })
                .then(function (response) {
                    console.log(response);
                    if(!response.data.local){
                       window.location = window.location.origin + '/#/auth';
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        methods:{
            logOut(e){
                axios.get('http://localhost:8080/logout',{
                    withCredentials: true
                })
                    .then(function (response) {
                        console.log(response);
                        if(!response.data.login){
                           window.location = window.location.origin + '/#/auth';
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        computed: {
            name () {
                return this.$route.name
            },
            list () {
                return this.$route.matched
            }
        }
    }
</script>
