import { ComponentFixture, TestBed } from '@angular/core/testing';
import { faker } from '@faker-js/faker';
import { CoffeeListComponent } from './coffee-list.component';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoffeeService } from '../coffee.service';
import { Coffee } from '../coffee';
import { By } from '@angular/platform-browser';

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CoffeeListComponent ],
      providers: [CoffeeService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 10; i++) {
      const coffee = new Coffee(
        faker.number.int(),
        faker.person.firstName(),
        i % 2 == 0 ? "Blend" : "Café de Origen",
        faker.lorem.sentence(),
        faker.location.country(),
        faker.lorem.sentence(),
        faker.image.url()
      );
      component.coffees.push(coffee);
    }
    component.getTotalOrigen();
    component.getTotalBlend();

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have h1 tag with the coffee shop name', () => {
    debug.queryAll(By.css('.title')).forEach((h1)=>{
      expect(h1.nativeElement.textContent).toContain("El aroma mágico")
    });
  });
 
  it('should have 11 <tr> elements', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(11)
  });

  it('should have the corresponding table header elements', () => {
    let headerTable = debug.queryAll(By.css('tr'))[0];
    expect(headerTable.children[0].nativeElement.textContent).toEqual("#")
    expect(headerTable.children[1].nativeElement.textContent).toEqual("Nombre")
    expect(headerTable.children[2].nativeElement.textContent).toEqual("Tipo")
    expect(headerTable.children[3].nativeElement.textContent).toEqual("Región")
  });

  it('should have the corresponding id, nombre, tipo and region to the 10 coffees elements', () => {
     let coffeTable = debug.queryAll(By.css('tr'));
     coffeTable.forEach((row, i) => {
      if(i != 0) {
        expect(row.children[0].nativeElement.textContent).toEqual(component.coffees[i - 1].id.toString())
        expect(row.children[1].nativeElement.textContent).toEqual(component.coffees[i - 1].nombre)
        expect(row.children[2].nativeElement.textContent).toEqual(component.coffees[i - 1].tipo)
        expect(row.children[3].nativeElement.textContent).toEqual(component.coffees[i - 1].region)
      }
     });
  });
 
  it('should have the corresponding total blend coffe types', () => {
    expect(debug.queryAll(By.css('#blend'))[0].nativeElement.textContent).
      toEqual("Total café blend: " + component.totalBlend)
  });

  it('should have the corresponding total origen coffe types', () => {
    expect(debug.queryAll(By.css('#origen'))[0].nativeElement.textContent).
      toEqual("Total café de origen: " + component.totalBlend)
  });
 
});
