import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vercel } from './vercel';

describe('Vercel', () => {
  let component: Vercel;
  let fixture: ComponentFixture<Vercel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vercel],
    }).compileComponents();

    fixture = TestBed.createComponent(Vercel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
