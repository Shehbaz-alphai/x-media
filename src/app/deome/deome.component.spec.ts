import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeomeComponent } from './deome.component';

describe('DeomeComponent', () => {
  let component: DeomeComponent;
  let fixture: ComponentFixture<DeomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
