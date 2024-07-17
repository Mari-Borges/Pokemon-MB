import { ListaCartasComponent } from './lista-cartas/lista-cartas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarBaralhoComponent } from './criar-baralho/criar-baralho.component';
import { MeusBaralhosComponent } from './meus-baralhos/meus-baralhos.component';

const routes: Routes = [
  {path: '', component: ListaCartasComponent},
  {path: 'criar-baralho', component: CriarBaralhoComponent},
  {path: 'meus-baralhos', component: MeusBaralhosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
