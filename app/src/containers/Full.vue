<template>
    <b-container class="bv-example-row">
        <div>
            <router-view></router-view>
            <div style="text-align:center">
                <b-button class="exit_button" @click="logOut" variant="outline-danger">
                    Выйти
                </b-button>
            </div>
        </div>
    </b-container>
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

<style>
    .exit_button{
        position: absolute;
        left: 0;
        top: 0;
    }
</style>
