<template>
<div>
    <button> logout</button>
</div>
</template>
<script>
export default {
    name : 'LandingPage',
    created(){
        if (localStorage.getItem('token') === null){
            this.$route.push('/');
        }
    }
}
</script>
<style>
</style>