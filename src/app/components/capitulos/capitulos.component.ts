import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-capitulos',
  templateUrl: './capitulos.component.html',
  styleUrls: ['./capitulos.component.css']
})
export class CapitulosComponent implements OnInit {

  @Input() datosPersonaje: any;

  constructor() { }

  ngOnInit(): void {
  }

}
