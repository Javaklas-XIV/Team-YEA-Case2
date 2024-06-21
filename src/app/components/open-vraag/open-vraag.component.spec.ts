import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenVraagComponent } from './open-vraag.component';

describe('OpenVraagComponent', () => {
  let component: OpenVraagComponent;
  let fixture: ComponentFixture<OpenVraagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenVraagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenVraagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
