import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeriekeVraagInvullenComponent } from './numerieke-vraag-invullen.component';

describe('NumeriekeVraagComponent', () => {
  let component: NumeriekeVraagInvullenComponent;
  let fixture: ComponentFixture<NumeriekeVraagInvullenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumeriekeVraagInvullenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumeriekeVraagInvullenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
