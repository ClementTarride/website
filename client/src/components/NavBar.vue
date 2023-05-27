<template >

    <header>
      <a href="#" class="logo">Logo</a>
    
      <input type="checkbox" id="menu-bar">
      <label for="menu-bar">Menu</label>
    
      <nav class="navbar">
      <ul>
        <li><a to="/App">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Blender</a>
          <ul>
            <li><a href="#">Learn</a></li>
            <li><a href="#">3d scratch</a></li>
          </ul>
        </li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Social</a></li>
        <li class="alreadi_login"><a href="#"> MyProfile</a></li>
          <button class = "btnLogin">Connexion</button>
      </ul>
    </nav>
    </header>
    
    </template>
    
    <script>
    export default {
        name: "NavbarMenu",
        mounted(){
        const wrapper = document.querySelector('.wrapper');
        const loginLink = document.querySelector('.login-link');
        const registerLink = document.querySelector('.register-link');
        const btnPopup = document.querySelector('.btnLogin');
        const iconClose = document.querySelector('.icon-close');

        registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
});
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

}
}
    
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
      text-transform: capitalize;
      text-decoration: none;
    }
    header{
      position : fixed;
      top : 0; left : 0;right: 0;
      background: #ffff;
      box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
      padding : 0px 7%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 1000;
    }
    .btnLogin{
        border: none;
    }
    .navbar .btnLogin{
        width : 130px;
        height: 50px;
        background: transparent;/*transparent*/
        outline: none;
        backdrop-filter: blur(20px);
        border-radius: 6px;
        cursor: pointer;
        font-size: 1em;
        color:#333;
        font-weight: 500;
        margin-left: 20px;  
    }
    .navigation .btnLogin:hover{
        background-color: #fff;
        color : #00132b;
    }
    header .logo{
      font-weight: bolder;
      font-size: 25px;
      color: #333;
    }
    header .navbar ul{
      list-style: none;
    }
    header .navbar ul li {
      position: relative;
      float : left;
    }
    header .navbar ul li a {
      font-size: 20px;
      padding: 20px;
      color: #333;
      display: block;
    }
    header .navbar ul li a:hover {
      background: #333;
      color: #ffff;
    }
    header .navbar ul li ul {
      position: absolute;
      left: 0;
      width: 200px;
      background: #ffff;
      display: none;
    }
    header .navbar ul li ul li {
      width: 100%;
      border-top: 1px solid rgba(0, 0, 0, .1);
    }
    header .navbar ul li:hover > ul {
      display: initial;
    }
    #menu-bar{
      display: none;
    }
    header label{
      font-size: 20px;
      color: #333;
      cursor: pointer;
      display: none;
    }
    
    @media(max-width:991px){
    
      header{
        padding: 20px;
      }
      header label{
        display: initial;
      }
      header .navbar {
        position: absolute;
        top: 100%;left: 0%;right: 0;
        background: #ffff;
        border-top: 1px solid rgba(0, 0, 0, .1);
        display: none;
      }
      header .navbar ul li {
        width: 100%;
      }
      header .navbar ul li ul {
        position: relative;
        width: 100%;
      }
      header .navbar ul li ul li {
        background: #eee;
      }
      #menu-bar:checked ~ .navbar{
        display: initial;
      }
    }
    </style>
    