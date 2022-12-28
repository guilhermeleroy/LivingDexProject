<template>

    <div class="instructions">
        <h3>Achieve your dreams! Get a Living Dex! Click on the Pokémon you have.</h3>
        <h2>Shiny Forms</h2>
    </div>
    <div class="container" v-if="shinyPokes.length > 0">
      <div class="container2" v-for="poke of shinyPokes" :key="poke">
        <div class="card" v-if="poke.DoIHave == false" >
            <div class="name-poke">
                {{ poke.Names }}
            </div>
            <div class="img-poke">
                <img :src="require(`../assets/shiny/${poke.Path}`)" alt="" class="img-poke poke-no" @click="clickDoIHave(poke)">
            </div>
            <div class="inneed">I need!</div>
        </div>
        <div class="card" v-if="poke.DoIHave == true" >
            <div class="name-poke">
                {{ poke.Names }}
            </div>
            <div class="img-poke">
                <img :src="require(`../assets/shiny/${poke.Path}`)" alt="" class="img-poke" @click="clickDoIHave(poke)">
            </div>
            <div class="gotcha">Gotcha! <img src="../assets/pokeball.png" alt="" class="pokeball"></div>
        </div>        
      </div>        
    </div>    
   
  
  </template>
  
  <script>
    import { pokeService } from '@/services/pokeService';
  
    export default{
      name: "Shiny_Poke",
      data: function (){
        return{
            shinyPokes: [],
            errorMessage: null
        }
      },
      created: async function(){
        try {
            let response = await pokeService.getAllShinyPokes();
            this.shinyPokes = response.data;            
        } 
        catch (error){
            this.errorMessage = error;            
        }
      },
      methods: {
        clickDoIHave: async function (poke) {
          try {
            poke.DoIHave = !poke.DoIHave;
            let response = await pokeService.updateShinyPoke(poke, poke.id);
            if(response){
              let response = await pokeService.getAllShinyPokes();
              this.shinyPokes = response.data;
            }
          }
          catch (error){
            this.errorMessage = error;
          }
        }
      }
    }
    
  </script>
  
  <style>
  
  </style>