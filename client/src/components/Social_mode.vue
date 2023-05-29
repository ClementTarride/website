<template>
    <div class="navbar">
        <NavbarmodeMenuconnect />
    </div>
    <div><is_post /></div>
    
    
</template>
<script>
import NavbarmodeMenuconnect from './Navbar_mode.vue';
import is_post from './Ispost.vue';
import axios from 'axios';
export default {
    name: "social_page_mode",
    components: {
        NavbarmodeMenuconnect, is_post
    }, data() {
        return {
            email: '',
        }
    }, created() {
        if (localStorage.getItem('token') === null) {
            this.$route.push('/');
        }
    },
    mounted() {
        axios.get('http://localhost:3000/modetry', { headers: { token: localStorage.getItem('token') } })
            .then(res => {
                this.email = res.data.boss.email;
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