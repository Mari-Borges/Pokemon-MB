import { Component, OnInit } from '@angular/core';
import { PokemonMBService } from '../service/pokemon-mb.service';

@Component({
  selector: 'app-meus-baralhos',
  templateUrl: './meus-baralhos.component.html',
  styleUrls: ['./meus-baralhos.component.scss']
})
export class MeusBaralhosComponent {

  baralhos: any;
  semBaralho = false;

  constructor(
    private service: PokemonMBService
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

}
