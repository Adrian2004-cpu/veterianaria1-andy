import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaMision } from './acerca-mision';

describe('AcercaMision', () => {
  let component: AcercaMision;
  let fixture: ComponentFixture<AcercaMision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcercaMision]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaMision);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
