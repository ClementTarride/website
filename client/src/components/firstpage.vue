<template>
  <body>
    <div class="app">
      <NavbarMenu />
    </div>
  </body>
</template>

<script>
import NavbarMenu from './NavBar.vue';

export default {
  name: "first_page",
  components: {
    NavbarMenu,
  }
};
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
