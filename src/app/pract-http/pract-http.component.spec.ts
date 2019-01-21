import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractHttpComponent } from './pract-http.component';

describe('PractHttpComponent', () => {
  let component: PractHttpComponent;
  let fixture: ComponentFixture<PractHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
