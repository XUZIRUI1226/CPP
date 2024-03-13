App.Vue- Code
<template>
  <div id ="nav">
    <router-link to = "/"> Home </router-link> |
    <router-link to = "/about"> About </router-link> |
    <router-link to = "/profit"> Profits </router-link>
  </div>
  <router-view/>
</template>

<style> 
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 30px;
  }
  #nav{
    padding : 10px;
    text-align: left;
    position: relative;
  }
  #nav a {
    font-weight : bold;
    color: #2c3e50;
    padding: 10px;
  }
  #nav a.router-link-exact-active{ 
    color:cornflowerblue
  }

</style>

