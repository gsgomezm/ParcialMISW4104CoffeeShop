import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { CoffeeComponent } from './coffee.component';
import { Coffee } from './coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private apiUrl: string = environment.baseUrl;
  
  constructor(private http: HttpClient) { }
  
  getCoffees():Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.apiUrl);
  }
}
