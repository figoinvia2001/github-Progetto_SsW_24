import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { Archivio } from './archivio';

@Injectable({
  providedIn: 'root',
})
export class ServizioBibliotecaService {
  apiKey: string = '53f6530d';
  URL: string = 'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';
  constructor() {}
  public getData(): Observable<AjaxResponse<any>> {
    return ajax({
      method: 'GET',
      url: this.URL + '/get?key='+this.apiKey,
      crossDomain: true,
  });
  }

  public setData(new_archivio: Archivio): Observable<AjaxResponse<any>> {
    return ajax({
      method: 'POST',
      url: this.URL + '/set?key='+this.apiKey,
      crossDomain: true,
      body: new_archivio,
  });
  }
}