<template>
    <body>
    <div>
        <NavbarmodeMenuconnect />
    </div>
</body>
</template>
<script>
import axios from 'axios';
import NavbarmodeMenuconnect from './Navbar_mode.vue';
export default {
    name: 'LandingPage-mode',
    data (){
        return {
            email : '',
        }
    },
    created() {
        if (localStorage.getItem('token') === null) {
            this.$route.push('/');
        }
    }, components: {
        NavbarmodeMenuconnect,
    }, mounted() {
        axios.get('http://localhost:3000/modetry', { headers: { token: localStorage.getItem('token') } })
            .then(res => {
                this.email = res.data.boss.email;
            })

    }
}
</script>
<style scoped>
</style>