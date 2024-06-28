import { Component } from '@angular/core';
import { PokemonMBService } from '../service/pokemon-mb.service';
import { ICartas } from '../models/ICartas';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-cartas',
  templateUrl: './lista-cartas.component.html',
  styleUrls: ['./lista-cartas.component.scss']
})
export class ListaCartasComponent {

  cartas!: any;

  constructor( 
    private service: PokemonMBService
  ){
    this.listaCartas();
  }


  listaCartas(){
    this.service.cartas().subscribe((res) =>{
      this.cartas = res
    })
    console.log("Cartas", this.cartas)

  }

}