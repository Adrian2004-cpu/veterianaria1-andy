import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaService } from './mascota-service';

describe('MascotaService', () => {
  let component: MascotaService;
  let fixture: ComponentFixture<MascotaService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MascotaService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MascotaService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
