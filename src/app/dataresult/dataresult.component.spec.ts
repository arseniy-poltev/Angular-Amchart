import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataresultComponent } from './dataresult.component';

describe('DataresultComponent', () => {
  let component: DataresultComponent;
  let fixture: ComponentFixture<DataresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
