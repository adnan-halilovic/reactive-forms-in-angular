import { CurrencyPipe, NgClass, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { CARS } from './cars.constants';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CurrencyPipe, NgClass, NgOptimizedImage],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})
export class CarsComponent {
  cars = CARS;
}
