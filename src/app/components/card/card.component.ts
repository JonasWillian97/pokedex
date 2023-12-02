import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemons } from 'src/app/models/Pokemeons';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  pokemons$: Pokemons = {
    id: 0,
    name: "",
    sprites: {
      front_default: ""
    },
    types: []
  }
  constructor(private pokeService: PokemonService){
    this.searchPokemon('ditto');
  }
  
  searchPokemon(search: string){
    this.pokeService.getPokemon(search).subscribe({
  
      next:(res) => {
        this.pokemons$ = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types
        }
      }
    })
    
  }
}
