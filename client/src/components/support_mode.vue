<template>
    <body>
        <div>
            <NavbarmodeMenuconnect />
        </div>
        <div class="publication-zone">
            <div class="publication" v-for="post in posts" :key="post.id">
                <div class="post-header">
                    <h3>{{ post.username }}</h3>
                </div>
                <div class="post-body">
                    <p>{{ post.commentaire }}</p>
                </div>
                <div>
                    <img :src="post.urlimg">
                </div>
                <div class="post-footer">
                    <button @click="delete_comm(post.title)">Delete</button>
                </div>
            </div>
        </div>

    </body>
</template>
<script>
import axios from 'axios';
import NavbarmodeMenuconnect from './Navbar_mode.vue';
export default {
    name: 'Support_mode',
    components: {
        NavbarmodeMenuconnect
    },
    data() {
        return {
            username: '',
            email: '',
            commentaire: '',
            urlimg: '',
            title: '',
            posts: []
        }
    },
    methods: {
        publish() {
            let usermessage = {
                commentaire: this.commentaire,
                urlimg: this.urlimg,
                title: this.title,
            }
            axios.post('http://localhost:3000/publishsupport', usermessage)
        },
        delete_comm(posttitle) {

            console.log(posttitle);
            axios.delete('http://localhost:3000/publishsupportdelete', { params: { title: posttitle } })
        }
    },

    mounted() {
        axios.get('http://localhost:3000/modetry', { headers: { token: localStorage.getItem('token') } })
            .then(res => {
                this.email = res.data.boss.email;
            })
        axios.get('http://localhost:3000/allpublisheduser')
            .then (res =>{
                this.posts =res.data;
            })
            .catch(error => {
                console.error('Error retrieving posts:', error);
            });
    }


}
</script>
<style>
.publication-zone {
    margin-top: 20px;
}

.publication {
    background-color: #f0f2f5;
    padding: 10px;
    margin-bottom: 20px;
}

.publication .post-header img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
}

.publication .post-header h3 {
    margin: 0;
}

.publication .post-footer a {
    margin-right: 10px;
    text-decoration: none;
    color: #3b5998;
}

p {
    color: black;
}

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

.user-profile h2 {
    margin: 0;
    font-size: 18px;
}

.user-profile input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.post-input-container textarea {
    width: 100%;
    padding: 10px;
    resize: vertical;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
}

.publication {
    background-color: #f0f2f5;
    padding: 10px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
}

.post-header {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
}

.post-header img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
}

.post-header h3 {
    margin: 0;
    font-size: 18px;
}

.post-body {
    margin-bottom: 5px;
}

.post-footer {
    display: flex;
}

.post-footer button {
    padding: 5px 10px;
    background-color: #3b5998;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
}
</style>