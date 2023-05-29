<template>
    <div>
        <NavbarMenuconnect />
    </div>
</template>
<script>
import axios from 'axios';
import NavbarMenuconnect from './NavBarconnect';
export default {
    name: 'LandingPage',
    data (){
        return {
            name : '',
            email : '',
        }
    },
    created() {
        if (localStorage.getItem('token') === null) {
            this.$route.push('/');
        }
    }, components: {
        NavbarMenuconnect,
    }, mounted() {
        axios.get('http://localhost:3000/user', { headers: { token: localStorage.getItem('token') } })
            .then(res => {
                this.name = res.data.user.name;
                this.email = res.data.user.email;
            })

    }
}
</script>
<style></style>