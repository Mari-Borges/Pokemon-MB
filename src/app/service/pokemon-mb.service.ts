import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ICartas } from '../models/ICartas';

@Injectable({
  providedIn: 'root'
})
export class PokemonMBService {

  private api = environment.api;
  private mock = "http://localhost:3000/baralhos";


  constructor(
    private http: HttpClient
  ) { }

  cartas(): Observable<any> {
    return this.http.get<any>(`${this.api}cards`)
  }
  criarBaralho(baralho: any): Observable<any>{
    return this.http.post<any>(`${this.mock}`, baralho);
  }
  MeusBaralhos(): Observable<any>{
    return this.http.get<any>(`${this.mock}`);
  }
  
}
