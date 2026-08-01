import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumGifts } from './premium-gifts';

describe('PremiumGifts', () => {
  let component: PremiumGifts;
  let fixture: ComponentFixture<PremiumGifts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiumGifts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiumGifts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
