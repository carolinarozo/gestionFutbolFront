import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class PosicionServiceService {

  config = config

  constructor(private http: HttpClient) { }

  sendDatos(data: any) {

    return this.http.post(this.config.url + '/api/posicion', data)

  }

  get() {
    return this.http.get(this.config.url + "/api/posicion")

  }
  delete(id: any | string) {
    return this.http.delete(this.config.url + `/api/posicion/${id}`)



  }

  search(data: any) {
    return this.http.post(this.config.url + "/api/posicion/search", data)
  }


  update(data: any) {
    return this.http.put(this.config.url + "/api/posicion", data)
  }

  findById(id: string) {
    return this.http.get(this.config.url + `/api/posicion/${id}`)
  }
}
