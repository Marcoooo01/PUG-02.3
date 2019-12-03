import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastelliCComponent } from './castelli-c.component';

describe('CastelliCComponent', () => {
  let component: CastelliCComponent;
  let fixture: ComponentFixture<CastelliCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastelliCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastelliCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
