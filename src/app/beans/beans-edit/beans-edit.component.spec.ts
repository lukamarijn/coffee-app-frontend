import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeansEditComponent } from './beans-edit.component';

describe('BeansEditComponent', () => {
  let component: BeansEditComponent;
  let fixture: ComponentFixture<BeansEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeansEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeansEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
