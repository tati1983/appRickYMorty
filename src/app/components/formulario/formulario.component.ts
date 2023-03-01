import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() personajeSeleccionado = new EventEmitter<any>();

  constructor() { }

  miFormulario = new FormGroup({
    personaje : new FormControl('', [])
  });

  buscarPersonaje(){
    console.log(this.miFormulario.value);
    const PERSONAJE = {
      personaje : this.miFormulario.value
    }
    this.personajeSeleccionado.emit(PERSONAJE);
  }

  ngOnInit(): void {
  }
}
