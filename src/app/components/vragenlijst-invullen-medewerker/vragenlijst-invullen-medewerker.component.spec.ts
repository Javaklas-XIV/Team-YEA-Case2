import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VragenlijstInvullenMedewerkerComponent } from './vragenlijst-invullen-medewerker.component';

describe('VragenlijstInvullenMedewerkerComponent', () => {
  let component: VragenlijstInvullenMedewerkerComponent;
  let fixture: ComponentFixture<VragenlijstInvullenMedewerkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VragenlijstInvullenMedewerkerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VragenlijstInvullenMedewerkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
