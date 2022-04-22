import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  url: string = `https://pokeapi.co/api/v2/`
  public pokemon: any
  private setPokeList: any

  constructor(private activeRoute: ActivatedRoute,
    private pokeService: PokeApiService
  ) {
  }

  ngOnInit(
  ): void {
    this.pokeService.apiGetPokemon(`https://pokeapi.co/api/v2/pokemon/${this.activeRoute.snapshot.params['name']}`).subscribe(
      res => {
        console.log(res)
        console.log(res.results)
        this.pokemon = res
        console.log(this.pokemon)

      },
      error => error
    )


  }

}
