import { ComponentFixture, TestBed } from '@angular/core/testing';
import { faker } from '@faker-js/faker';
import { CoffeeListComponent } from './coffee-list.component';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoffeeService } from '../coffee.service';
import { Coffee } from '../coffee';

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
        faker.person.jobType(),
        faker.lorem.sentence(),
        faker.location.country(),
        faker.lorem.sentence(),
        faker.image.url()
      );
      component.coffees.push(coffee);
    }
    
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
