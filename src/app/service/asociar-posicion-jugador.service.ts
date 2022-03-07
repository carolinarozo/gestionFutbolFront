import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class AsociarPosicionJugadorService {
  config = config

  constructor(private http: HttpClient) { }

  sendDatos(data: any) {
    console.log(data)

    return this.http.post(this.config.url + '/api/asociarPosicionJugador', data)

  }

  get() {
    return this.http.get(this.config.url + "/api/asociarPosicionJugador")

  }
  delete(id: any | string) {
    return this.http.delete(this.config.url + `/api/asociarPosicionJugador/${id}`)



  }




  update(data: any) {
    return this.http.put(this.config.url + "/api/asociarPosicionJugador", data)
  }

  findById(id: string) {
    return this.http.get(this.config.url + `/api/asociarPosicionJugador/${id}`)
  }
}
