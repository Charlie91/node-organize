<template>
    <div class="animated fadeIn">
        <b-container class="bv-example-row">
            <b-row>
                <b-col md="6" offset-md="3">
                    <b-list-group>
                        <template v-for="note in notes">
                            <b-list-group-item>
                                {{ note.text }}
                                <button @click="deleteNote(note)">Х</button>
                            </b-list-group-item>
                        </template>
                    </b-list-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" offset-md="3">
                    <form @submit.prevent="sendData">
                        <b-form-textarea id="textarea1"
                                         v-model="newNote"
                                         placeholder="Введите новое напоминание"
                                         :rows="3"
                                         :max-rows="6">
                        </b-form-textarea>
                        <button class="btn btn-primary">Добавить</button>
                    </form>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'dashboard',
        data: function(){
            return {
                notes: [{
                    text:'Твоя первая запись...'
                }],
                newNote:''
            }
        },
        mounted(){
            this.getNotes();
        },
        methods:{
            getNotes(){
                axios.get('http://localhost:8080/notes',{
                    withCredentials: true
                })
                    .then((response) => {
                        this.notes = [...response.data];
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
            sendData(e){
                if(!this.newNote)return;
                axios.post('http://localhost:8080/addNote',
                    {
                        text:this.newNote,
                    },
                    {
                        withCredentials: true
                    }
                )
                    .then((response) => {
                        if(!response.data.isSaved)return;
                        this.getNotes();
                        this.newNote = '';
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            deleteNote(note){
                axios.post('http://localhost:8080/deleteNote',
                    {
                        id:note._id
                    },
                    {
                        withCredentials: true
                    }
                )
                    .then((response) => {
                        if(response.data === 'ok'){
                            this.notes.forEach((item,index) => {
                                if(note._id === item._id)
                                    this.notes.splice(index,1);
                            })
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>

<style>
    .bv-example-row{
        margin-top:60px
    }
</style>