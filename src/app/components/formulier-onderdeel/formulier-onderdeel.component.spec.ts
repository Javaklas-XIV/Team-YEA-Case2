import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulierOnderdeelComponent } from './formulier-onderdeel.component';

describe('FormulierOnderdeelComponent', () => {
  let component: FormulierOnderdeelComponent;
  let fixture: ComponentFixture<FormulierOnderdeelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulierOnderdeelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulierOnderdeelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
