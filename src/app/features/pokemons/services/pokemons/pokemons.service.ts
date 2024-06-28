import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from '@envs/environment';
import {
  Cries,
  GameIndex,
  HeldItem,
  Move,
  Pokemon,
  PokemonResponse,
  Species,
  Sprites,
  Stat,
  Type,
  pokemonDetail,
} from 'app/shared/pokemonResponse.interface';
import { concatMap, from, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private readonly baseUrl = environment.baseUrl;
  public pokemons = signal<pokemonDetail[]>([]);
  public countPokemons = signal<number>(0);
  public next = signal<string | null | undefined>('');
  public prev = signal<string | null | undefined>('');
  private readonly _http = inject(HttpClient);

  constructor() {
    this.getPokemons();
  }

  public getPokemons(queryParam?: string | null): void {
    queryParam = queryParam ? queryParam : '/';
    this._http
      .get<PokemonResponse>(`${this.baseUrl}/api/v2/pokemon${queryParam}`)
      .pipe(
        map((pokemonResponse) => pokemonResponse),
        tap((pokemonResponse: PokemonResponse) => {
          this.getPokemonsByName(pokemonResponse.results).subscribe(
            (response: any) => {
              this.pokemons.set([...this.pokemons(), response]);
            }
          );
        })
      )
      .subscribe((result) => {
        this.countPokemons.set(result.count);
        this.next.set(this.getParamsPokemonUrl(result.next));
        this.prev.set(this.getParamsPokemonUrl(result.previous));
      });
  }
  public getPokemonsByName(pokemons: any) {
    const pokemonNames = pokemons.map((pokemon: Pokemon) => pokemon.name);

    return from(pokemonNames).pipe(
      concatMap((pokemonNames) =>
        this._http.get(`${this.baseUrl}/api/v2/pokemon/${pokemonNames}`)
      )
    );
  }

  private getParamsPokemonUrl(url: string | null) {
    let params = null;
    if (typeof url === 'string') {
      params = `?${url.split('?').pop()}`;
    }
    return params;
  }
}
