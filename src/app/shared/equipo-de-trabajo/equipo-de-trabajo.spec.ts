import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoDeTrabajo } from './equipo-de-trabajo';

describe('EquipoDeTrabajo', () => {
  let component: EquipoDeTrabajo;
  let fixture: ComponentFixture<EquipoDeTrabajo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipoDeTrabajo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipoDeTrabajo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
