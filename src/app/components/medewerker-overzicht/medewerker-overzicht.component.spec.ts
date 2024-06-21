import { ComponentFixture, TestBed } from '@angular/core/testing';

import {MedewerkerOverzichtComponent} from './medewerker-overzicht.component';

describe('MedewerkerOverzichtComponent', () => {
  let component: MedewerkerOverzichtComponent;
  let fixture: ComponentFixture<MedewerkerOverzichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedewerkerOverzichtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedewerkerOverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
