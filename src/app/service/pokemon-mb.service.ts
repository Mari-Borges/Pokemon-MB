import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ICartas } from '../models/ICartas';

@Injectable({
  providedIn: 'root'
})
export class PokemonMBService {

  private api = environment.api
  constructor(
    private http: HttpClient
  ) { }

  cartas(): Observable<ICartas[]> {
    return this.http.get<ICartas[]>(`${this.api}cards`)
  }
  
}
