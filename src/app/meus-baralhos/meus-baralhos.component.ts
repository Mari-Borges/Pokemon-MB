import { Component, OnInit } from '@angular/core';
import { PokemonMBService } from '../service/pokemon-mb.service';
import { MatDialog } from '@angular/material/dialog';
import { MinhasCartasComponent } from './minhas-cartas/minhas-cartas.component';

@Component({
  selector: 'app-meus-baralhos',
  templateUrl: './meus-baralhos.component.html',
  styleUrls: ['./meus-baralhos.component.scss']
})
export class MeusBaralhosComponent {

  baralhos: any;
  semBaralho = false;

  constructor(
    private service: PokemonMBService,
    private dialog: MatDialog,
  ){}


  ngOnInit(){
    this.service.MeusBaralhos().subscribe((res) =>{
      if (res.length === 0){
        this.semBaralho = true

      }else{
      this.baralhos = res
      }
    })
  }

  abrirBaralho(carta: any){
    const dialogRef = this.dialog.open(MinhasCartasComponent, {
      width: '700px',
      data: carta,
    })
  }
}
