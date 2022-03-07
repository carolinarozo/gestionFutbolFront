import { Injectable } from '@angular/core';
import { config } from '../config/config';
import { io, Socket } from 'socket.io-client'
import { observable, Observable } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  config = config
  private socket: Socket

  constructor() {
    this.socket = io(this.config.url)

  }

  getNewProducto() {
    this.socket.on('escuchar', () => {

    })
  }

  saveNewProducto(data: any) {
    this.socket.emit('newProducto', data)
  }

}
