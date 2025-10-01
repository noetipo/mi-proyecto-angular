import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Lista de Productos</h2>
    <div class="productos-grid">
      @for (producto of productos; track producto.id) {
        <div class="producto-card" (click)="verDetalle(producto.id)">
          <h3>{{ producto.nombre }}</h3>
          <p>{{ producto.precio | currency:'PEN' }}</p>
        </div>
      }
    </div>
  `,
  styles: [`
    .productos-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
    }
    .producto-card {
      border: 1px solid #ddd;
      padding: 1rem;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.2s;
    }
    .producto-card:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
  `]
})
export class Productos {
  productos = [
    { id: 1, nombre: 'Laptop', precio: 2500 },
    { id: 2, nombre: 'Mouse', precio: 50 },
    { id: 3, nombre: 'Teclado', precio: 120 },
    { id: 4, nombre: 'Monitor', precio: 800 }
  ];

  constructor(private router: Router) {}

  verDetalle(id: number) {
    this.router.navigate(['/productos', id]);
  }
}
