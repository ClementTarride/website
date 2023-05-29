<template>
    <body>
        <div class="wrapper">
            <div class="input">
                <h2>Connexion</h2>
                <div class="inputbox">
                    <label>Email</label>
                    <input type="email" required v-model="email">
                </div>
                <div class="inputbox">
                    <label>Mot de passe</label>
                    <input type="password" required v-model="password">
                </div>
                <button type="submit" class="btn" @click="login">Connexion</button>
            </div>
        </div>
    </body>
</template>
<script>
import axios from 'axios';
export default {
    name: 'loginUser',
    data() {
        return {
            email: '',
            password: '',

            error: ''
        }
    },
    methods: {
        login() {
            let user = {
                email: this.email,
                password: this.password
            }
            axios.post('http://localhost:3000/login', user)
                .then(res => {
                    localStorage.setItem('token', res.data.token);
                    this.$router.push('/landing');
                })
                .catch(err => {
                    console.log("Erreur lors de la connexion :", err);
                    axios.post('http://localhost:3000/mode', user)
                        .then(res => {
                            localStorage.setItem('token', res.data.token);
                            this.$router.push('/mode');
                        })
                        .catch(err => {
                            console.log("Erreur lors de la requête pour '/mode' :", err);
                        });
                });
        }
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