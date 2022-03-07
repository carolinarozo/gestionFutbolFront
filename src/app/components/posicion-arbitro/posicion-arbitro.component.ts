import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArbitroposicionService } from 'src/app/service/arbitroposicion.service';

import { WebsocketService } from 'src/app/service/websocket.service.service';

@Component({
  selector: 'app-posicion-arbitro',
  templateUrl: './posicion-arbitro.component.html',
  styleUrls: ['./posicion-arbitro.component.css']
})
export class PosicionArbitroComponent implements OnInit {
  form: FormGroup
  nombre: AbstractControl
  nomenclatura: AbstractControl
  sub = false

  constructor(private fb: FormBuilder, private servicePosicionArbitro: ArbitroposicionService, private websoket: WebsocketService) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      nomenclatura: ['', Validators.required],
    })
    this.nombre = this.form.controls['nombre']
    this.nomenclatura = this.form.controls['nomenclatura']
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
    this.servicePosicionArbitro.sendDatos(this.form.value).subscribe((res: any) => {
      if (res.status) {

        this.websoket.saveNewProducto(this.form.value)
      }

    })


  }

}
