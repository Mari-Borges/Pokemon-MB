import { ICartas } from './../models/ICartas';
import { Component } from '@angular/core';
import { PokemonMBService } from '../service/pokemon-mb.service';
import { MatDialog } from '@angular/material/dialog';
import { CartaComponent } from './carta/carta.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IBaralho } from '../models/baralho';

@Component({
  selector: 'app-criar-baralho',
  templateUrl: './criar-baralho.component.html',
  styleUrls: ['./criar-baralho.component.scss']
})
export class CriarBaralhoComponent {

  cartas!: any[];
  dataSource: any;
  cont = 0
  cartasAdd: Array<any> = [];
  test!: ICartas[];
  baralho: Array<ICartas> = [];
  nome = '';

  constructor( 
    private service: PokemonMBService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ){}

  ngOnInit(){
    this.service.cartas().subscribe((res) =>{
      this.cartas = res.data
    })
  }

  adicionar(carta: any){
    const dialogRef  = this.dialog.open(CartaComponent, {
      width: '500px',
      data: carta
    });
    dialogRef.afterClosed().subscribe((res) =>{
      let adicionar = res === 'add'
      if(adicionar){
        const filtroNome = this.cartasAdd.filter(
          (c) => c.name === carta.name,
        );

        if(filtroNome.length <= 3){
          this.cartasAdd.push(carta);
          console.log(carta)
          this.cont = this.cont + 1;
        }else {
            this._snackBar.open('Você atingiu o limite permitido desse personagem!!', '',{
              duration: 5000
           });
        }
      }
    })
  }
  criarBaralho(){
    if((this.cartasAdd.length >= 2 && this.cartasAdd.length <= 5) && (this.nome != "")){
      let baralho: IBaralho = {
        nome: this.nome,
        cards: this.cartasAdd
      }
      this.service.criarBaralho(baralho).subscribe();
    }else{
      this._snackBar.open('Dever conter entre 24 e 60 cartas e um nome para o baralho', '',{
        duration: 5000
     });
    }
  }
}
