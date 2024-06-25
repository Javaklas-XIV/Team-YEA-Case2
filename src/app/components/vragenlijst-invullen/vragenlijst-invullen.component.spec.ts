import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VragenlijstInvullenComponent } from './vragenlijst-invullen.component';

describe('VragenlijstComponent', () => {
  let component: VragenlijstInvullenComponent;
  let fixture: ComponentFixture<VragenlijstInvullenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VragenlijstInvullenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VragenlijstInvullenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
