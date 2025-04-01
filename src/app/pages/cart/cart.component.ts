import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule]
})
export class CartComponent {
  cartItems: any[] = [];
  isCartOpen = false;

  constructor(private cartService: CartService) {
    // Suscribirse a los cambios en el carrito
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }
}
