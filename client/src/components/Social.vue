<template>
    <div class="navbar">
        <NavBarconnect />
    </div>
    <div class="Profile-container">
        <img>
        <div class="profile-details">
            <div class="pd-left">
                <div class="pd-row">
                    <img class="pd-image">
                    <div>
                        <h3>{{ Username }}</h3>
                        <p>{{ email }}</p>
                    </div>
                </div>
            </div>
            <div class="pd-right"></div>
        </div>
    </div>
    <div><postsome_thing /></div>
    <div><is_post /></div>
    
    
</template>
<script>
import axios from 'axios';
import NavBarconnect from './NavBarconnect';
import postsome_thing from './postsomething.vue';
import is_post from './Ispost.vue';
export default {
    name: "social_page",
    components: {
        NavBarconnect, postsome_thing, is_post
    }, data() {
        return {
            Username: '',
            email: '',
        }
    }, created() {
        if (localStorage.getItem('token') === null) {
            this.$route.push('/');
        }
    },
    mounted() {
        axios.get('http://localhost:3000/user', { headers: { token: localStorage.getItem('token') } })
            .then(res => {
                this.Username = res.data.user.username;
                this.email = res.data.user.email;
            })

    }
};
</script>
<style>
/* Styles pour la section profile-container */
.profile-container {
    padding: 20px 15%;
    color: #626262;
}

.cover-img {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 14px;
}

.profile-details {
    background: #fff;
    padding: 20px;
    border-radius: 4px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.pd-row {
    display: flex;
    align-items: flex-start;
}

.pd-image {
    width: 100px;
    margin-right: 20px;
    border-radius: 6px;
}

.pd-row div h3 {
    font-size: 25px;
    font-weight: 600;
}

.pd-row div p {
    font-size: 13px;
}

</style>