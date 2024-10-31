import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeTypeComponent } from './bee-type.component';

describe('BeeTypeComponent', () => {
  let component: BeeTypeComponent;
  let fixture: ComponentFixture<BeeTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeeTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
