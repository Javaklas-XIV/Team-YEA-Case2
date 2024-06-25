import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeerkeuzeVraagInvullenComponent } from './meerkeuze-vraag-invullen.component';

describe('MeerkeuzeVraagComponent', () => {
  let component: MeerkeuzeVraagInvullenComponent;
  let fixture: ComponentFixture<MeerkeuzeVraagInvullenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeerkeuzeVraagInvullenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeerkeuzeVraagInvullenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
