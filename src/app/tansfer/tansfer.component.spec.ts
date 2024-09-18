import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TansferComponent } from './tansfer.component';

describe('TansferComponent', () => {
  let component: TansferComponent;
  let fixture: ComponentFixture<TansferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TansferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TansferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
