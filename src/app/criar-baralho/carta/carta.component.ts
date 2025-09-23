import { AnimationStyleMetadata, style } from '@angular/animations';
import { Component, Inject, OnInit,  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UrlTree } from '@angular/router';
import { PokemonMBService } from 'src/app/service/pokemon-mb.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent implements OnInit{

  statusClass!: any[];
  cartas!: any[];
  ressistencia!: number;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private dialogRef: MatDialogRef<CartaComponent>,
    private service: PokemonMBService
  )
  {
     data;
     console.log(data)
  }

  ngOnInit(){
    this.detalhes();
    console.log(this.detalhes())
    this.converterString();
  }

  converterString(){
    for(let i = 0; i < this.data.resistances.length; i++){
       const resis = parseInt(this.data.resistances[i].value);
       this.ressistencia = resis;
    }
    console.log(this.ressistencia);
  }

  detalhes(){
    for(let i = 0; i < this.data.types.length; i++){
      const type = this.data.types[i]
      if(type === "Fire") {
        this.statusClass = ["/assets/imgs/fogo-removebg-preview.png"]
      } 
      if(type === "Grass") {
        this.statusClass = ["/assets/imgs/planta-removebg-preview.png"]
      } 
      if(type === "Darkness") {
        this.statusClass = ["/assets/imgs/escuridao-removebg-preview (2).png"]
      } 
      if(type === "Dragon") {
        this.statusClass = ["/assets/imgs/dragao-removebg-preview.png"]
      } 
      if(type === "Lightning") {
        this.statusClass = ["/assets/imgs/raio-removebg-preview.png"]
      } 
      if(type === "Water") {
        this.statusClass = ["/assets/imgs/agua-removebg-preview.png"]
      } 
      if(type === "Fighting") {
        this.statusClass = ["/assets/imgs/luta-removebg-preview.png"]
      } 
      if(type === "Fairy") {
        this.statusClass = ["/assets/imgs/fada-removebg-preview.png"]
      } 
      if(type === "Metal") {
        this.statusClass = ["/assets/imgs/metal-removebg-preview.png"]
      } 
      if(type === "Psychic") {
        this.statusClass = ["/assets/imgs/psiquico-removebg-preview.png"]
      } 
      if(type === "Colorless") {
        this.statusClass = ["/assets/imgs/incolor-removebg-preview.png"]
      } 
    console.log(this.statusClass)
   }
    
  }

  addCard(){
    this.dialogRef.close("add");
  }
}
