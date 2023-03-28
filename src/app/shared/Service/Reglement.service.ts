import {Inject, Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { apiUrl } from 'src/environments/url';

@Injectable({
  providedIn: 'root'
})
export class ReglementService {

  readonly API_URL = `http://${apiUrl}:8089/SpringMVC/reglement`;

  constructor(private httpClient: HttpClient,
    ) {
  }


  addReglement(reglement: any) {
    return this.httpClient.post(`${this.API_URL}/add-reglement`, reglement)
  }

  getAllReglements() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-reglements`)
  }


}
