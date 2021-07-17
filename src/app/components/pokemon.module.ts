import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { MainComponent } from './main.component';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { PokemonsService } from '../services/pokemons.service';


@NgModule({
  declarations: [
    MainComponent,
    CardPokemonComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MaterialModule
  ],
  providers: [PokemonsService]
})
export class PokemonModule { }
