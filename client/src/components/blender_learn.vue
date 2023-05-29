<template>
    <div>
        <NavbarMenuconnect />
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
import NavbarMenuconnect from './NavBarconnect.vue';
export default{
    name : 'blenderlearn_cli',
    components:{
        NavbarMenuconnect
    },data(){
        return {
            commentaire : '',
            title : '',
            posts:[]
        }
    },
    mounted(){
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
<style></style>