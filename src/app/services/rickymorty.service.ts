import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickymortyService {

  constructor(private httpClient: HttpClient) { }

  getPersonaje(personaje: any): Observable<any> {
    console.log(personaje)
    const URL = 'https://rickandmortyapi.com/api/character?name='+personaje.personaje.name+''
    console.log(URL)
    return this.httpClient.get(URL);
  }
}
