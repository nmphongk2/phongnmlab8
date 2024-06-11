import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment";
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  getProductById(productId: string): Observable<any> {
    const url = `${this.urlProduct}/${productId}`; // Tạo URL đầy đủ
    return this.httpService.get(url); // Gửi yêu cầu GET đến URL đã tạo
  }
  urlProduct = environment.url + "/product";

  constructor(private httpService: HttpClient) { }

  getAllSP(): Observable<any> {
    return this.httpService.get(this.urlProduct);
  }

  createSP(dataSP): Observable<any> {
    return this.httpService.post(this.urlProduct, dataSP);
  }

  updateSP(id: string, dataSP): Observable<any> {
    const url = `${this.urlProduct}/${id}`;
    return this.httpService.put(url, dataSP);
  }
  

  deleteSP(id: string): Observable<any> {
    const url = `${this.urlProduct}/${id}`;
    return this.httpService.delete(url);
  }
}
