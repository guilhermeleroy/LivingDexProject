import axios from "axios";

export class pokeService{
    static serverURL = `http://localhost:9000`;

    static getAllNormalPokes(){
        let dataURL = `${this.serverURL}/normal`;
        return axios.get(dataURL);
    }

    static getAllShinyPokes(){
        let dataURL = `${this.serverURL}/shiny`;
        return axios.get(dataURL);
    }

    static updateNormalPoke(poke, pokeId){
        let dataURL = `${this.serverURL}/normal/${pokeId}`;
        return axios.put(dataURL, poke);
    }

    static updateShinyPoke(poke, pokeId){
        let dataURL = `${this.serverURL}/shiny/${pokeId}`;
        return axios.put(dataURL, poke);
    }
}