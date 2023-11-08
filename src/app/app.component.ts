import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

interface Form {
  name: FormControl<string>;
  price: FormControl<number>;
}

// Create folder structure
// Create services according to the Angular Architecture best practices
// Hold the state in behaviour subjects in the facades
// Refactor the naming
// Finish the methods

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items: any;
  form = new FormGroup<Form>({
    name: new FormControl('', { nonNullable: true }),
    price: new FormControl(),
  });

  async fetch() {
    const response = await fetch('./assets/shoppingList.json');
    const movies = await response.json();
    console.log(movies);
    this.items = movies;
  }

  add() {
    this.items.push({
      name: this.form.value.name,
      price: this.form.value.price,
      id: new Date().toISOString,
    });
  }

  remove() {
    // remove from the cart
  }

  summarize() {
    // summarize and show the price
  }
}
