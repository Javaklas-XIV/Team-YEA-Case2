import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VragenlijstOnderdeelInvullenComponent } from './vragenlijst-onderdeel-invullen.component';

describe('VragenlijstOnderdeelComponent', () => {
  let component: VragenlijstOnderdeelInvullenComponent;
  let fixture: ComponentFixture<VragenlijstOnderdeelInvullenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VragenlijstOnderdeelInvullenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VragenlijstOnderdeelInvullenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
