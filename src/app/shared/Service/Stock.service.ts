import { Inject, Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StockService {
  readonly API_URL = 'http://'+this.apiUrl+'t:8089/SpringMVC/stock';

  constructor(private httpClient: HttpClient,
    @Inject('API_URL') private apiUrl: string
    ) { }

  getAllStocks() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-stocks`)
  }
  addStock(stock : any) {
    return this.httpClient.post(`${this.API_URL}/add-stock`, stock)
  }
  editStock(stock : any){
    return this.httpClient.put(`${this.API_URL}/modify-stock`, stock)
  }
  deleteStock(idStock : any){
    return  this.httpClient.delete(`${this.API_URL}/remove-stock/${idStock}`)
  }
}
