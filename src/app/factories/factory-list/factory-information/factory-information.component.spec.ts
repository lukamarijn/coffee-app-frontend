import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryInformationComponent } from './factory-information.component';

describe('FactoryInformationComponent', () => {
  let component: FactoryInformationComponent;
  let fixture: ComponentFixture<FactoryInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
