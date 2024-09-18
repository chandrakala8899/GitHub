import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansearchComponent } from './loansearch.component';

describe('LoansearchComponent', () => {
  let component: LoansearchComponent;
  let fixture: ComponentFixture<LoansearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoansearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoansearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
