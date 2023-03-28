import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {apiUrl} from 'src/environments/url';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  readonly API_URL = `http://${apiUrl}:8089/SpringMVC/facture`;

  constructor(private httpClient: HttpClient,
    
    ) {}
  

  getAllFactures() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-factures`)
  }
  addFacture(facture : any) {
    return this.httpClient.post(`${this.API_URL}/add-facture`, facture)
  }
}
