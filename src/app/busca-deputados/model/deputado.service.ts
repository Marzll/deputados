import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deputado } from './deputado';

@Injectable({
  providedIn: 'root'
})
export class DeputadoService {
  private API = 'https://dadosabertos.camara.leg.br/api/v2';

  constructor(private http: HttpClient) {}

  buscarDeputadosPorNome(nome: string): Observable<Deputado[]> {
    const url = `${this.API}/deputados?nome=${nome}&ordem=ASC&ordenarPor=nome`;
    return this.http.get<Deputado[]>(url);
  }

  buscarDeputadosPorPartido(partido: string): Observable<Deputado[]> {
    const url = `${this.API}/deputados?siglaPartido=${partido}&ordem=ASC&ordenarPor=nome`;
    return this.http.get<Deputado[]>(url);
  }
}
