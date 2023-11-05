import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  coffees: Coffee[];
  showSpinner: boolean;
  totalOrigen: number;
  totalBlend: number;
  

  constructor(private service: CoffeeService) {
    this.coffees = [];
    this.showSpinner = false;
    this.totalOrigen = 0;
    this.totalBlend = 0;
  }

  ngOnInit(): void {
    this.getCoffees();
  }
  
  getCoffees(): void {
    this.service.getCoffees().subscribe({
      next: (data) => {
        this.coffees = data;
        this.showSpinner = false;
        this.getTotalOrigen();
        this.getTotalBlend();
      },
      error: (error) => {
        console.error(error);
        this.showSpinner = false;
      }
    });
  }

  getTotalOrigen() {
    this.totalOrigen = this.coffees.filter(o => o.tipo === "Café de Origen").length;
  }

  getTotalBlend() {
    this.totalBlend = this.coffees.filter(o => o.tipo === "Blend").length;
  }
}
