import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeriekeVraagComponent } from './numerieke-vraag.component';

describe('NumeriekeVraagComponent', () => {
  let component: NumeriekeVraagComponent;
  let fixture: ComponentFixture<NumeriekeVraagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumeriekeVraagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumeriekeVraagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
