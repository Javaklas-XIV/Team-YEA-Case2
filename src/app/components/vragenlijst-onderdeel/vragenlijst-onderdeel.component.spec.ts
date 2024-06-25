import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VragenlijstOnderdeelComponent } from './vragenlijst-onderdeel.component';

describe('VragenlijstOnderdeelComponent', () => {
  let component: VragenlijstOnderdeelComponent;
  let fixture: ComponentFixture<VragenlijstOnderdeelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VragenlijstOnderdeelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VragenlijstOnderdeelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
