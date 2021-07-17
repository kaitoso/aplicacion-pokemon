import { Component, OnInit } from '@angular/core';
import {PokemonsService} from '../../services/pokemons.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemons;
  constructor(private pokeService: PokemonsService) { 
   this.getAllPokemon();
  }

   ngOnInit() {
      console.log(this.pokemons)
  }

  getAllPokemon = () =>{ this.pokeService.getAllPokemon().then(resp => { this.pokemons =  resp})};

}
