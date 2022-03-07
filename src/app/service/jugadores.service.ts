import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  config = config

  constructor(private http: HttpClient) { }

  sendDatos(data: any) {

    return this.http.post(this.config.url + '/api/jugador', data)

  }

  get() {
    return this.http.get(this.config.url + "/api/jugador")

  }
  delete(id: any | string) {
    return this.http.delete(this.config.url + `/api/jugador/${id}`)



  }

  search(data: any) {
    return this.http.post(this.config.url + "/api/jugador/search", data)
  }


  update(data: any) {
    return this.http.put(this.config.url + "/api/jugador", data)
  }

  findById(id: string) {
    return this.http.get(this.config.url + `/api/jugador/${id}`)
  }
}
