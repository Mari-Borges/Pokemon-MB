import { Component, ViewChild } from '@angular/core';
import { PokemonMBService } from '../service/pokemon-mb.service';
import { ICartas } from '../models/ICartas';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-lista-cartas',
  templateUrl: './lista-cartas.component.html',
  styleUrls: ['./lista-cartas.component.scss']
})
export class ListaCartasComponent {

  cartas!: any[];
  dataSource: any;
  carregando = false;
  test!: any[];

  fire!: any[];
  grass!: any[];
  darkness!: any[];
  dragon!: any[];
  lightning!: any[];
  water!: any[];
  fighting!: any[];
  fairy!: any[];
  metal!: any[];
  psychic!: any[];
  colorless!: any[]

  constructor( 
    private service: PokemonMBService
  ){}


  ngOnInit(){
    this.carregando = true
    this.teste()
  }

  teste(){
    this.service.cartas().subscribe((res) =>{
      this.carregando = false
      this.cartas = res.data

      for(let i = 0; i < this.cartas.length; i++){
        const type = this.cartas[i].types
        for(let j = 0; j < type.length; j++){
          const todos = type[j]
        
          
          console.log(todos)

/*           const todos = type[j]
          if(todos === "Metal"){
            this.metal = todos;
            this.metal 
            console.log(this.metal)
          } */
        }
      }
    })
  }
}
