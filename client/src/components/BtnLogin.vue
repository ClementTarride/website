<template>
        <div class="wrapper">
            <span class="icon-close">
            </span>
            <div class="form-box login">
                <h2>Connexion</h2>
                <form action="login">
                    <div class="input-box">
                        <input type="email" required v-model="email">
                        <label>Email</label>
                    </div>
                    <div class="input-box">
                        <span class="icon">
                        </span>
                        <input type="password" required autocomplete="current-password" v-model="password">
                        <label>Mot de passe</label>
                    </div>
                    <div class="remember-forgot">
                        <label><input type="checkbox">Rester connecter</label>
                        <a href="#">Mot de passe oublié?</a>
                    </div>
                    <button type="submit" class="btn" @click="login">Connexion</button>
                    <div class="login-register">
                        <p>Je n'ai pas de compte?<span href="registerUser" 
                             class="register-link">Enregistrement</span>
                        </p>
                    </div>
                </form>
            </div>
            <div class="form-box register">
                <h2>Enregistrement</h2>
                <form action="register">
                    <div class="input-box">
                        <span class="icon">
                        </span>
                        <input type="text" required v-model="Username">
                        <label>Nom D'utilisateur</label>
                    </div>
                    <div class="input-box">
                        <span class="icon">
                        </span>
                        <input type="email" required v-model="email">
                        <label>Email</label>
                    </div>
                    <div class="input-box">
                        <span class="icon">
                        </span>
                        <input type="password" required v-model="password" >
                        <label>Mot de passe</label>
                    </div>
                    <div class="remember-forgot">
                        <label><input type="checkbox">J'accepte les thermes et conditions</label>
                    </div>
                    <button type="submit" class="btn" @click="registerUser">Connexion</button>
                    <div class="login-register">
                        <p>J'ai déjà un compte ?<span 
                            class="login-link">Connexion</span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
  </template>
  
<script>
import axios from 'axios';
  export default {
    name: 'registerUser',
    data() { 
        return{
            Username : '',
            email : '',
            password : '',

            error:''
        }
    },
     methods: {
        registerUser() {
            let response =  {
               Username : this.Username,
                email : this.email,
                password : this.password
            }
            console.log(response)
            axios.post('http://localhost:3000/registerUser',response)
                .then(res => {
                    console.log(res)
                    this.error = '';
                },err => {
                    console.log(err,response)
                    this.error = err.response.data.error
                })
        },
        login(){
            let user = {
                email : this.email,
                password : this.password
            }
            console.log(user)
            axios.post('http://localhost:3000/loginin', user)
             .then (res => {
                console.log(res)
                console.log("was here 200")
                if(res.status == 200){
                    localStorage.setItem('token',res.data.token);
                    this.$router.push('/landing');
                }
             }, err => {
                console.log("was here error")
                console.log(err.response);
                this.error = err.response.data.error
             },)
        },
    }
  };

  </script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins');
.wrapper{
    margin:auto;
    position : relative;
    width:400px;
    height: 440px;
    background: transparent;
    border: 2px solid rgb(255, 255, 255,.5);
    border-radius: 20px;
    backdrop-filter: blur(20px);
    box-shadow: 0 0 30px rgb(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transform: scale(0);
    transition: transform .5s ease ,height .2s ease;
}

.wrapper.active-popup {
    transform: scale(1);
}
.wrapper.active {
    height: 520px;
}
.wrapper .form-box{
    width: 100%;
    padding: 40px;
}
.wrapper .form-box.login{
   transition: transform .18s ease;
   transform: translateX(0);

}
.wrapper.active .form-box.login {
    transition: none;
    transform: translateX(-400px);
}
.wrapper .form-box.register {
    position:absolute;
    transition: none;
    transform: translateX(400px);
}
.wrapper.active .form-box.register {
    transition: transform .18s ease;
    transform: translateX(0);
}
.wrapper .icon-close {
    position: absolute;
    top: 0;
    right: 0;
    width: 45px;
    height: 45px;
    background: #162938;
    font-size: 2em;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 20px;
    cursor: pointer;
    z-index: 1;
}

.form-box h2{
    font-size: 2em;
    color: #00132b;
    text-align: center;
}
.input-box {
    position: relative;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid #00132b;
    margin: 30px 0;
}
.input-box label {
    position : absolute;
    top : 50%;
    left : 5px;
    transform : translateY(-50%);
    font-size: 1em;
    color : #ffffff;
    font-weight: 500;
    pointer-events: none;
    transition: .5s;
}
.input-box input:focus~label,
.input-box input:valid~label{
    top: -5px;
}
.input-box input {
    width: 100%;
    height: 100%;
    background: transparent;
    border : none;
    outline: none;
    font-size: 1em;
    color: #ffffff;
    font-weight: 600;
    padding: 0 35px 0 5px;

}
.input-box .icon {
    position : absolute;
    right: 8px;
    font-size: 1.2em;
    color : #ffffff;
    line-height: 57px;
}
.remember-forgot {
    font-size: .9em;
    color : #ffffff;
    font-weight: 500;
    margin: -15px 0 15px;
    display: flex;
    justify-content: space-between;
}
.remember-forgot label input {
    accent-color: #ffffff;
    margin-right: 3px;
}
.remember-forgot a {
    color: #ffffff;
    text-decoration: none;
}
.remember-forgot a:hover {
    text-decoration: underline;
}
.btn {
    width : 100%;
    height: 45px;
    background: #162938;
    border: none;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1em;
    color: #fff;
    font-weight: 500;
}
.login-register {
    font-size: .9em;
    color: #ffffff;
    text-align: center;
    font-weight: 500;
    margin: 25px 0 10px;
}
.login-register p a {
    color: #ffffff;
    text-decoration: none;
    font-weight: 600;
}
.login-register p a:hover {
    text-decoration: underline;
}
</style>