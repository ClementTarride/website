<template>
<div class="write-post-container">
        <div class="user-profile">
            <img>
            <div>
                <p>{{ Username }}</p>
                <button @click="publish">Publier</button>
            </div>
        </div>
        <div class="post-input-container">
            <textarea rows="3" placeholder="write something" v-model="commentaire"></textarea>
            <div class="add-post-lik">

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name : "postsome_thing",
    data(){
        return { 
            Username: '',
            email: '',
            commentaire: ''
        }
    },
    mounted() {
        axios.get('http://localhost:3000/user', { headers: { token: localStorage.getItem('token') } })
            .then(res => {
                this.Username = res.data.user.username;
                this.email = res.data.user.email;
            })

    },methods :{
        publish(){
            let usermessage = {
                commentaire: this.commentaire,
                username : this.Username
            }
            axios.post('http://localhost:3000/publish', usermessage)
        }
    }
}
</script>
<style>
/* Styles pour la section write-post-container */
.write-post-container {
    background-color: #f0f2f5;
    padding: 10px;
    margin-bottom: 20px;
}

.user-profile {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.user-profile img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
}

.user-profile p {
    margin: 0;
}

.post-input-container textarea {
    width: 100%;
    padding: 10px;
    resize: vertical;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
}

.post-input-container .add-post-link {
    display: flex;
    align-items: center;
}

.post-input-container .add-post-link a {
    margin-right: 10px;
    text-decoration: none;
    color: #3b5998;
}

.post-input-container .add-post-link a:hover {
    text-decoration: underline;
}

.post-input-container .add-post-link button {
    padding: 5px 10px;
    background-color: #3b5998;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.post-input-container .add-post-link button:hover {
    background-color: #293e6a;
}
</style>