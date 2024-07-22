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

  constructor( 
    private service: PokemonMBService
  ){}


  ngOnInit(){
    this.carregando = true
    this.service.cartas().subscribe((res) =>{
      this.carregando = false
      this.cartas = res.data
    })

    console.log("Cartas", this.cartas)

  }
}
