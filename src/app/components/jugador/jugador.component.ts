import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JugadoresService } from 'src/app/service/jugadores.service';
import { WebsocketService } from 'src/app/service/websocket.service.service';
@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  form: FormGroup
  nombre: AbstractControl
  fechaNacimiento: AbstractControl

  sub = false

  constructor(private fb: FormBuilder, private serviceJugador: JugadoresService, private websoket: WebsocketService) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],

    })
    this.nombre = this.form.controls['nombre']
    this.fechaNacimiento = this.form.controls['fechaNacimiento']

  }

  ngOnInit(): void {
  }

  get getForm() {
    return this.form.controls
  }

  sendDatos() {
    this.sub = true
    if (this.form.invalid) {
      return
    }
    console.log(this.form.value)
    this.serviceJugador.sendDatos(this.form.value).subscribe((res: any) => {
      if (res.status) {

        this.websoket.saveNewProducto(this.form.value)
      }

    })


  }

}
