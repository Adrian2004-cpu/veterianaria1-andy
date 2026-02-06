import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaVision } from './acerca-vision';

describe('AcercaVision', () => {
  let component: AcercaVision;
  let fixture: ComponentFixture<AcercaVision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcercaVision]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaVision);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
