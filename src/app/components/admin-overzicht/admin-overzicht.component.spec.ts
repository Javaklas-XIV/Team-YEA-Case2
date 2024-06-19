import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOverzichtComponent } from './admin-overzicht.component';

describe('AdminOverzichtComponent', () => {
  let component: AdminOverzichtComponent;
  let fixture: ComponentFixture<AdminOverzichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminOverzichtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
