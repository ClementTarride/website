<template>
    <div class="publication-zone">
        <div class="publication" v-for="post in posts" :key="post.id">
            <div class="post-header">
                <h3>{{ post.username }}</h3>
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
</template>

<script>
import axios from 'axios';

export default {
    name: "is_post",
    data() {
        return {
            posts: []
        }
    },
    mounted() {
        axios.get('http://localhost:3000/messages')
            .then(res => {
                this.posts = res.data;
            })
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
</style>