import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoffeeListComponent } from './coffee/coffee-list/coffee-list.component';



const routes: Routes =  [
  { path: '', component: CoffeeListComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
