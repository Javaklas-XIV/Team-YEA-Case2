import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedewerkerVragenlijstBeheerComponent } from './medewerker-vragenlijst-beheer.component';

describe('MedewerkerVragenlijstBeheerComponent', () => {
  let component: MedewerkerVragenlijstBeheerComponent;
  let fixture: ComponentFixture<MedewerkerVragenlijstBeheerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedewerkerVragenlijstBeheerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedewerkerVragenlijstBeheerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
