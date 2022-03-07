import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ArbitroService {

  config = config

  constructor(private http: HttpClient) { }

  sendDatos(data: any) {

    return this.http.post(this.config.url + '/api/arbitro', data)

  }

  get() {
    return this.http.get(this.config.url + "/api/arbitro")

  }
  delete(id: any | string) {
    return this.http.delete(this.config.url + `/api/arbitro/${id}`)



  }

  search(data: any) {
    return this.http.post(this.config.url + "/api/arbitro/search", data)
  }


  update(data: any) {
    return this.http.put(this.config.url + "/api/arbitro", data)
  }

  findById(id: string) {
    return this.http.get(this.config.url + `/api/arbitro/${id}`)
  }
}
