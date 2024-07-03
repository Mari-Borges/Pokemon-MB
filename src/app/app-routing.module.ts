import { ListaCartasComponent } from './lista-cartas/lista-cartas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarBaralhoComponent } from './criar-baralho/criar-baralho.component';

const routes: Routes = [
  {path: '', component: ListaCartasComponent},
  {path: 'criar-baralho', component: CriarBaralhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
