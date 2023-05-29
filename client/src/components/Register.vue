<template>
    <body>
        <div class="wrapper">
            <div class="input">
                <h2>Enregistrement</h2>
                <div class="inputbox">
                    <label>Nom D'utilisateur</label>
                    <input type="text" required v-model="Username">
                </div>
                <div class="inputbox">
                    <label>Email</label>
                    <input type="email" required v-model="email">
                </div>
                <div class="inputbox">
                    <label>Mot de passe</label>
                    <input type="password" required v-model="password">
                </div>
                <div>
                    <button type="submit" class="btn" @click="registerUser">Connexion</button>
                </div>
            </div>
        </div>
    </body>
</template>
<script>
import axios from 'axios';
export default {
    name: 'registerUser',
    data() {
        return {
            Username: '',
            email: '',
            password: '',

            error: ''
        }
    },
    methods: {
        registerUser() {
            let response = {
                Username: this.Username,
                email: this.email,
                password: this.password
            }
            console.log(response)
            axios.post('http://localhost:3000/registerUser', response)
                .then(res => {
                    console.log(res)
                    this.error = '';
                }, err => {
                    console.log(err, response)
                    this.error = err.response.data.error
                })
        },
    }
};
</script>
<style>
.wrapper {
    margin: auto;
    position: relative;
    width: 400px;
    height: 440px;
    background: transparent;
    border: 2px solid rgb(255, 255, 255, .5);
    border-radius: 20px;
    backdrop-filter: blur(20px);
    box-shadow: 0 0 30px rgb(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

}

label {
    display: block;
    font-weight: bold;
    color: #333;
}

.input {
    font-size: 1.2em;
    color: #00132b;
    text-align: center;
}

.inputbox {
    position: relative;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid #00132b;
    margin: 30px 0;

}

.input-box label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 1em;
    color: #ffffff;
    font-weight: 500;
    pointer-events: none;
    transition: .5s;
}


.input-box input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    color: #ffffff;
    font-weight: 600;
    padding: 0 35px 0 5px;

}

h2 .input {
    font-size: 2em;
    color: #00132b;
    text-align: center;
}
</style>