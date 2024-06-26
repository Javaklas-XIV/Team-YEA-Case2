import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedewerkerIngevuldeBeheerComponent } from './medewerker-ingevulde-beheer.component';

describe('MedewerkerIngevuldeBeheerComponent', () => {
  let component: MedewerkerIngevuldeBeheerComponent;
  let fixture: ComponentFixture<MedewerkerIngevuldeBeheerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedewerkerIngevuldeBeheerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedewerkerIngevuldeBeheerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
