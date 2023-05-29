<template>
    <div>
        <NavbarmodeMenuconnect />
    </div>
    <div class="write-post-container">
        <div class="user-profile">
            <div>
                <button @click="publish">Publier</button>
            </div>
        </div>
        <div class="post-input-container">
            <textarea rows="3" placeholder="write something" v-model="commentaire"></textarea>
            <div class="add-post-lik">
                <input v-model="title">
            </div>
        </div>
    </div>
    <div class="publication-zone">
            <div class="publication" v-for="post in posts" :key="post.id">
                <div>
                    <h3> {{ post.title }}</h3>
                </div>
                <div class="post-body">
                    <p>{{ post.commentaire }}</p>
                </div>
            </div>
        </div>

</template>
<script>
import axios from 'axios';
import NavbarmodeMenuconnect from './Navbar_mode.vue';
export default{
    name : 'blenderlearn_mode',
    components:{
        NavbarmodeMenuconnect
    },data(){
        return {
            commentaire : '',
            title : '',
            posts:[],
            email:''
        }
    }
    ,methods :{
        publish(){
            let contenu = {commentaire : this.commentaire, title : this.title}
            axios.post('http://localhost:3000/contenupublishmode',contenu)
        }
    },
    mounted(){
        axios.get('http://localhost:3000/modetry', { headers: { token: localStorage.getItem('token') } })
            .then(res => {
                this.email = res.data.boss.email;
            })
        axios.get('http://localhost:3000/contenupublishmodeget')
            .then(res => {
                this.posts = res.data;
            })
            .catch(error => {
                        console.error('Error retrieving posts:', error);
            });
    }
}
</script>
<style>
</style>