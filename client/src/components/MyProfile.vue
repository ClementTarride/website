<template>
    <body>
        <div>
            <NavBarconnect />
        </div>
        <div class="box">
            <div class="name">
                <p>{{ name }}</p>
            </div>
            <div class="email">
                <p>{{ email }}</p>
            </div>
        </div>
        <div class="comment">
            <div class="publication-zone">
                <div class="publication" v-for="post in posts" :key="post.id">
                    <div class="post-header">
                        <h3>{{ name }}</h3>
                    </div>
                    <div class="post-body">
                        <p>{{ post.commentaire }}</p>
                    </div>
                    <div class="post-footer">
                        <a href="#">J'aime</a>
                        <a href="#">Commenter</a>
                        <a href="#">Partager</a>
                    </div>
                </div>
            </div>

        </div>
    </body>
</template>
<script>
import axios from 'axios';
import NavBarconnect from './NavBarconnect.vue';
export default {
    name: "my_profile",
    data() {
        return {
            name: '',
            email: '',
            posts: []
        }
    },
    components: {
        NavBarconnect
    },
    created() {
        if (localStorage.getItem('token') === null) {
            this.$route.push('/');
        }
    },
    mounted() {
        axios.get('http://localhost:3000/user', { headers: { token: localStorage.getItem('token') } })
            .then(res => {
                this.name = res.data.user.username;
                this.email = res.data.user.email;

                axios.get('http://localhost:3000/mypublish', { params: { username: this.name } })
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
p {
    color: aliceblue;
}

.box {
    margin-left: 1em;
    margin-top: 100px;
    position: relative;
    width: 200x;
    height: 100px;
    border: 2px solid rgb(0, 0, 0);
    justify-content: space-between;
}

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
</style>