import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewyorkComponent } from './newyork.component';

describe('NewyorkComponent', () => {
  let component: NewyorkComponent;
  let fixture: ComponentFixture<NewyorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewyorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewyorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
