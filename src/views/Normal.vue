<template>

    <div class="instructions">
        <h3>Achieve your dreams! Get a Living Dex! Click on the Pokémon you have.</h3>
        <h2>Normal Forms</h2>
    </div>
    <div class="container" v-if="normalPokes.length > 0">
      <div class="container2" v-for="poke of normalPokes" :key="poke">
        <div class="card" v-if="poke.DoIHave == false" >
            <div class="name-poke">
                {{ poke.Names }}
            </div>
            <div class="img-poke">
                <img :src="require(`../assets/normal/${poke.Path}`)" alt="" class="img-poke poke-no" @click="clickDoIHave(poke)">
            </div>
            <div class="inneed">I need!</div>
        </div>
        <div class="card" v-if="poke.DoIHave == true" >
            <div class="name-poke">
                {{ poke.Names }}
            </div>
            <div class="img-poke">
                <img :src="require(`../assets/normal/${poke.Path}`)" alt="" class="img-poke" @click="clickDoIHave(poke)">
            </div>
            <div class="gotcha">Gotcha! <img src="../assets/pokeball.png" alt="" class="pokeball"></div>
        </div>        
      </div>        
    </div>    
  
  </template>
  
  <script>
import { pokeService } from '@/services/pokeService';
  
    export default{
      name: "Normal_Poke",
      data: function (){
        return{
            normalPokes: [],
            errorMessage: null
        }
      },
      created: async function(){
        try {
            let response = await pokeService.getAllNormalPokes();
            this.normalPokes = response.data;            
        } 
        catch (error){
            this.errorMessage = error;            
        }
      },
      methods: {
        clickDoIHave: async function (poke) {
          try {
            poke.DoIHave = !poke.DoIHave;
            let response = await pokeService.updateNormalPoke(poke, poke.id);
            if(response){
              let response = await pokeService.getAllNormalPokes();
              this.normalPokes = response.data;
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