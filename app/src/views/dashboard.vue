<template>
    <div class="animated fadeIn">
        <ul id="example-1">
            <li v-for="note in notes">
                {{ note.text }}
            </li>
        </ul>
        <form @submit="sendData">
            <textarea v-model="newNote"></textarea>
            <input type="submit"/>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'dashboard',
        data: function(){
            return {
                notes: [],
                newNote:''
            }
        },
        mounted(){
            axios.get('http://localhost:8080/notes',{
                withCredentials: true
            })
                .then((response) => {
                    console.log(response.data);
                    this.notes = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        methods:{
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
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>
