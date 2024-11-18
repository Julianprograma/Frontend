import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue',
  templateUrl: './cola.component.html',
  styleUrls: ['./cola.component.css']
})
export class ColaComponent implements OnInit {
  queue = [
    { name: 'Juan Pérez', service: 'Limpieza', status: 'En espera', date: '2024-11-17' },
    { name: 'Ana García', service: 'Reparación', status: 'En progreso', date: '2024-11-16' },
    { name: 'Luis Rodríguez', service: 'Consulta', status: 'Completado', date: '2024-11-15' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
