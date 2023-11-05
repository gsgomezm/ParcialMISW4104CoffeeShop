import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeComponent } from './coffee.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';



@NgModule({
  declarations: [
    CoffeeComponent,
    CoffeeListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoffeeListComponent
  ]
})
export class CoffeeModule { }
