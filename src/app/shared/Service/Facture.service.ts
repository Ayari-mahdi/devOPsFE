import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  readonly API_URL = 'http://'+this.apiUrl+':8089/SpringMVC/facture';

  constructor(private httpClient: HttpClient,
    @Inject('API_URL') private apiUrl: string
    ) {}
  

  getAllFactures() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-factures`)
  }
  addFacture(facture : any) {
    return this.httpClient.post(`${this.API_URL}/add-facture`, facture)
  }
}
