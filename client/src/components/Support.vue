<template>
    <body>
        <div>
            <NavbarMenuconnect />
        </div>
        <div class="write-post-container">
            <div class="user-profile">
                <div>
                    <h2>input url image</h2>
                </div>
                <input v-model="urlimg">
                <div>
                    <h2> Title</h2>
                </div>
                <input v-model="title">
                <div>
                    <p>{{ username }}</p>
                </div>
                <div>
                    <button @click="publish">Publier</button>
                </div>
            </div>
            <div class="post-input-container">
                <textarea rows="3" placeholder="write something" v-model="commentaire"></textarea>
                <div class="add-post-lik">

                </div>
            </div>
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
import NavbarMenuconnect from './NavBarconnect.vue';
export default {
    name: 'Support_cli',
    components: {
        NavbarMenuconnect
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
                username: this.username,
                urlimg: this.urlimg,
                title: this.title,
            }
            axios.post('http://localhost:3000/publishsupport', usermessage)
        },
        delete_comm(posttitle) {

            console.log(posttitle);
            axios.delete('http://localhost:3000/publishsupportdelete',{params:{title : posttitle}} )
        }
    },

    mounted() {
        axios.get('http://localhost:3000/user', { headers: { token: localStorage.getItem('token') } })
            .then(res => {
                this.username = res.data.user.username;
                this.email = res.data.user.email;
                axios.get('http://localhost:3000/mypublish_support', { params: { username: this.username } })
                    .then(res => {
                        this.posts = res.data;
                    })
                    .catch(error => {
                        console.error('Error retrieving posts:', error);
                    });
            })
            .catch(error => {
                console.error('Error retrieving user information:', error);
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
}</style>