import { Inject, Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { apiUrl } from 'src/environments/url';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly API_URL = `http://${apiUrl}:8089/SpringMVC/produit`;

  constructor(private httpClient: HttpClient,
    ) { }
  getAllProducts() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-produits`)
  }
  addProduct(product : any) {
    return this.httpClient.post(`${this.API_URL}/add-produit`, product)
  }
  editProduct(product : any){
    return this.httpClient.put(`${this.API_URL}/modify-produit`, product)
  }
  deleteProduct(idProduct : any){
    return  this.httpClient.delete(`${this.API_URL}/remove-produit/${idProduct}`)
  }

}
