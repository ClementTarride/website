<template>
    <body>
    <div>
        <div id="app">
        <NavbarMenu />
      </div>
      <div id="login">
        <BtnLogin />
      </div>
    </div>
  </body>
  </template>
  
  <script>
  import NavbarMenu from './NavBar.vue'
  import BtnLogin from './BtnLogin.vue'
  
  export default {
    name: 'first_page',
    components: {
      NavbarMenu,
      BtnLogin
    },
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  body{
    background: #2c3e50;
  }
  </style>
  