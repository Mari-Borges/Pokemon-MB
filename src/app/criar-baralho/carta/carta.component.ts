import { AnimationStyleMetadata, style } from '@angular/animations';
import { Component, Inject, OnInit,  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent implements OnInit{

  statusClass = ''
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private dialogRef: MatDialogRef<CartaComponent>,
  )
  {
     data      
  }

  ngOnInit(){
    for(let i = 0; i < this.data.types.length; i++){
      const type = this.data.types[i]
      if(type === "Fire") {
        this.statusClass = "fogo"
      } 
      if(type === "Grass") {
        this.statusClass = "planta"
      } 
      if(type === "Darkness") {
        this.statusClass = "escuridao"
      } 
      if(type === "Dragon") {
        this.statusClass = "dragao"
      } 
      if(type === "Lightning") {
        this.statusClass = "raio"
      } 
      if(type === "Water") {
        this.statusClass = "agua"
      } 
      if(type === "Fighting") {
        this.statusClass = "luta"
      } 
      if(type === "Fairy") {
        this.statusClass = "fada"
      } 
      if(type === "Metal") {
        this.statusClass = "metal"
      } 
      if(type === "Psychic") {
        this.statusClass = "psiquico"
      } 
      if(type === "Colorless") {
        this.statusClass = "incolor"
      } 
   }
  }

  addCard(){
    this.dialogRef.close("add");
  }
}
