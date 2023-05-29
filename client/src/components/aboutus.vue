<template>
    <div><NavBarconnect /></div>
    <div>
      <h1>Blender</h1>
      <p>Blender est un logiciel de modélisation 3D, d'animation et de rendu.</p>
      <p>Je suis passionné par Blender et j'apprécie toutes les fonctionnalités puissantes qu'il offre.</p>
      <p>Voici quelques raisons pour lesquelles j'aime Blender :</p>
      <ul>
        <li>Interface conviviale</li>
        <li>Large gamme d'outils de modélisation</li>
        <li>Système d'animation avancé</li>
        <li>Rendu réaliste</li>
        <li>Support de scripts et de plugins</li>
      </ul>
    </div>
  </template>
  
  <script>
  import NavBarconnect from './NavBarconnect.vue';
  export default {
    name: 'BlenderInfo',
    components: {
        NavBarconnect
    }
  };
  </script>
  
  <style scoped>
  h1 {
    font-size: 24px;
    color: #333;
  }
  
  p {
    font-size: 16px;
    color: #666;
    margin-bottom: 10px;
  }
  
  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  
  li {
    font-size: 14px;
    color: #999;
  }
  </style>
  