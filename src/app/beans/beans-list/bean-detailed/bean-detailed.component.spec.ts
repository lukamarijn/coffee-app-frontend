import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeanDetailedComponent } from './bean-detailed.component';

describe('BeanDetailedComponent', () => {
  let component: BeanDetailedComponent;
  let fixture: ComponentFixture<BeanDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeanDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeanDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
