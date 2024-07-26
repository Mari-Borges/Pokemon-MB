import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PokemonMBService } from 'src/app/service/pokemon-mb.service';

@Component({
  selector: 'app-minhas-cartas',
  templateUrl: './minhas-cartas.component.html',
  styleUrls: ['./minhas-cartas.component.scss']
})
export class MinhasCartasComponent implements OnInit {

  pokemon = 0;
  treiner = 0;
  types: Array<any> = [];


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private dialogRef: MatDialogRef<MinhasCartasComponent>, 
    private route: Router, 
    private service: PokemonMBService) 
    {
      data
    }

    
  ngOnInit(): void {
    for(let cartas of this.data.cards){
      if(cartas.supertype === "Pokémon"){
        this.pokemon = 1 + this.pokemon;
      }
      if(cartas.supertype === "Trainer"){
        this.treiner = 1 + this.treiner;
      }
    }
  }
}
