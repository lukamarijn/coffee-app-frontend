import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsDetailedComponent } from './shops-detailed.component';

describe('ShopsDetailedComponent', () => {
  let component: ShopsDetailedComponent;
  let fixture: ComponentFixture<ShopsDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopsDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
