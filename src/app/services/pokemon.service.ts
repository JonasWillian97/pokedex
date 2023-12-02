import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl: string = environments.pokeApi;

  constructor(private http: HttpClient) {

   }

   getPokemon(){
    return this.http.get(`${this.baseUrl}`) ; 
   }
}
