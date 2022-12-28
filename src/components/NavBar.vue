<template>

    <nav class="navbar navbar-light bg-primary navbar-expand-sm">
        <div class="container">
            <router-link to="/" class="navbar">Normal</router-link>
            <router-link to="/shiny" class="navbar">Shiny</router-link>
        </div>

    </nav>
  
  </template>
  
  <script>
  
    export default{
      name: "NavBar"
    }
    
  </script>
  
  <style>
  
  </style>