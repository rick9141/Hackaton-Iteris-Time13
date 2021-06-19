import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstituicaoApiModel } from './instituicao-api-model';

@Injectable({
  providedIn: 'root'
})
export class InstitucaoApiService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://it3-klj-default-rtdb.firebaseio.com/instituicoesMulheres.json';

  public get(): Observable<InstituicaoApiModel[]> { /* observable de uma lista do obketo imoveisApiModel */
    return this.http.get<InstituicaoApiModel[]>(this.apiUrl);
  }
}
