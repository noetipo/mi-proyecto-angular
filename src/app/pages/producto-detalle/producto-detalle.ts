import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="detalle-container">
      <button (click)="volver()">← Volver</button>

      @if (producto) {
        <div class="producto-detalle">
          <h2>{{ producto.nombre }}</h2>
          <p class="precio">{{ producto.precio | currency:'PEN' }}</p>
          <p>{{ producto.descripcion }}</p>
          <button class="btn-comprar">Agregar al carrito</button>
        </div>
      } @else {
        <p>Producto no encontrado</p>
      }
    </div>
  `,
  styles: [`
    .detalle-container {
      max-width: 600px;
      margin: 0 auto;
    }
    .producto-detalle {
      margin-top: 2rem;
      padding: 2rem;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
    .precio {
      font-size: 2rem;
      color: #4caf50;
      font-weight: bold;
    }
    button {
      background-color: #3f51b5;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 1rem;
    }
    .btn-comprar {
      background-color: #4caf50;
      font-size: 1.1rem;
      margin-top: 1rem;
    }
  `]
})
export class ProductoDetalle implements OnInit {
  productoId: number = 0;
  producto: any;

  productosData = [
    { id: 1, nombre: 'Laptop', precio: 2500, descripcion: 'Laptop de alta gama para profesionales' },
    { id: 2, nombre: 'Mouse', precio: 50, descripcion: 'Mouse ergonómico inalámbrico' },
    { id: 3, nombre: 'Teclado', precio: 120, descripcion: 'Teclado mecánico RGB' },
    { id: 4, nombre: 'Monitor', precio: 800, descripcion: 'Monitor 4K 27 pulgadas' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Obtener parámetro de la ruta
    this.route.params.subscribe(params => {
      this.productoId = +params['id'];
      this.producto = this.productosData.find(p => p.id === this.productoId);
    });
  }

  volver() {
    this.router.navigate(['/productos']);
  }
}
