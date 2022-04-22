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
      },
      error => error
    )
  }

  public search(event: Event): void {
    const target = event.target as HTMLInputElement
    const value = target.value
    const filter = this.setPokeList.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    })

    this.pokeList = filter
  }



}
