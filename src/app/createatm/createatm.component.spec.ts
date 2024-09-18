import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateatmComponent } from './createatm.component';

describe('CreateatmComponent', () => {
  let component: CreateatmComponent;
  let fixture: ComponentFixture<CreateatmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateatmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateatmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
