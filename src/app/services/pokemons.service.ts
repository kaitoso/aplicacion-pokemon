import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  getAllPokemon =  async() =>{
    let respuesta;
   respuesta =  await axios.get(this.baseUrl).then(resp => { return resp.data; }  );
    return respuesta
    
  };
  constructor() { }
}
