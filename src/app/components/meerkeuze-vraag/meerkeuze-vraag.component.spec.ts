import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeerkeuzeVraagComponent } from './meerkeuze-vraag.component';

describe('MeerkeuzeVraagComponent', () => {
  let component: MeerkeuzeVraagComponent;
  let fixture: ComponentFixture<MeerkeuzeVraagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeerkeuzeVraagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeerkeuzeVraagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
