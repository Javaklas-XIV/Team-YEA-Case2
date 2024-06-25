import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenVraagInvullenComponent } from './open-vraag-invullen.component';

describe('OpenVraagComponent', () => {
  let component: OpenVraagInvullenComponent;
  let fixture: ComponentFixture<OpenVraagInvullenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenVraagInvullenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenVraagInvullenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
