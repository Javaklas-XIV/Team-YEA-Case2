import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VragenlijstFragmentComponent } from './vragenlijst-fragment.component';

describe('VragenlijstFragmentComponent', () => {
  let component: VragenlijstFragmentComponent;
  let fixture: ComponentFixture<VragenlijstFragmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VragenlijstFragmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VragenlijstFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
