import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaHistoria } from './acerca-historia';

describe('AcercaHistoria', () => {
  let component: AcercaHistoria;
  let fixture: ComponentFixture<AcercaHistoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcercaHistoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaHistoria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
