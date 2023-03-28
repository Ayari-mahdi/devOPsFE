import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperateurService {
  readonly API_URL = 'http://'+this.apiUrl+':8089/SpringMVC/operateur';

  constructor(private httpClient: HttpClient,
    @Inject('API_URL') private apiUrl: string
    ) { }

  getAllOperateurs() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-operateurs`)
  }
  addOperateur(operateur : any) {
    return this.httpClient.post(`${this.API_URL}/add-operateur`, operateur)
  }
  editOperateur(operateur : any){
    return this.httpClient.put(`${this.API_URL}/modify-operateur`, operateur)
  }
  deleteOperateur(idOperateur : any){
    return  this.httpClient.delete(`${this.API_URL}/remove-operateur/${idOperateur}`)
  }
}
