import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private router: Router, 
  ){}

  cartas(){
    this.router.navigate([''])

  }
  criarBaralho(){
    this.router.navigate(['criar-baralho'])
  }
  meusBaralhos(){
    this.router.navigate(['meus-baralhos'])
  }
}
