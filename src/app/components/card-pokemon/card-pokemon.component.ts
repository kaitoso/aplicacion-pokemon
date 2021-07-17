import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {
 
  @Input() nombre:string;
  @Input() tipo:string;
  @Input() imagen:string;
  @Input() habilidades:any;
  constructor() { }

  ngOnInit(): void {
  }

}
