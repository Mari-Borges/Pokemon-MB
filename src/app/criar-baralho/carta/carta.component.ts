import { Component, Inject,  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent {
  carta: any

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<CartaComponent>){

    this.carta = data

    console.log(this.carta)
      
  }

  ngOninit(){
    console.warn(this.data.img)
  }

  addCard(){
    this.dialogRef.close("add");
  }
}
