import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VragenlijstenOverzichtClientComponent } from './vragenlijsten-overzicht-client.component';

describe('VragenlijstenOverzichtClientComponent', () => {
  let component: VragenlijstenOverzichtClientComponent;
  let fixture: ComponentFixture<VragenlijstenOverzichtClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VragenlijstenOverzichtClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VragenlijstenOverzichtClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
