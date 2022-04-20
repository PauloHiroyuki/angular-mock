import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

import { Mock } from './model/mock';



@Injectable({
  providedIn: 'root'
})
export class MockService {

  private readonly API = '/assets/data/mocks.json';

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Mock[]> {
    console.log('ar');
    return this.httpClient.get<Mock[]>(this.API).pipe(take(1));
  }

}
