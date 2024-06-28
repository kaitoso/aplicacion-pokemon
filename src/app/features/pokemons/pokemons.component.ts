import { Component, inject } from '@angular/core';
import { PokemonsService } from './services/pokemons/pokemons.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [
    JsonPipe,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss',
})
export default class PokemonsComponent {
  private pokemonsService = inject(PokemonsService);
  public pokemons = this.pokemonsService.pokemons;
  public pokemonsCount = this.pokemonsService.countPokemons;
  public nextSignal = this.pokemonsService.next;

  next() {
    this.pokemonsService.getPokemons(this.nextSignal());
  }
}
