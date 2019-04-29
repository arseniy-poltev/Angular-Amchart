import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KansasComponent } from './kansas.component';

describe('KansasComponent', () => {
  let component: KansasComponent;
  let fixture: ComponentFixture<KansasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KansasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KansasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
