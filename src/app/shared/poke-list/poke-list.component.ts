import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service'


@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  public pokeList: any
  private setPokeList: any

  constructor(private pokeService: PokeApiService) { }

  ngOnInit(): void {
    this.pokeService.getAllPokemons().subscribe(
      res => {
        this.setPokeList = res.results
        this.pokeList = this.setPokeList
        this.pokeList.sort()
      },
      error => error
    )
  }

}
