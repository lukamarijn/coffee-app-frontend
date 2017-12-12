import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsInformationComponent } from './shops-information.component';

describe('ShopsInformationComponent', () => {
  let component: ShopsInformationComponent;
  let fixture: ComponentFixture<ShopsInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopsInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
