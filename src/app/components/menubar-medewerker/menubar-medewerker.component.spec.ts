import { ComponentFixture, TestBed } from '@angular/core/testing';

import {MenubarMedewerkerComponent} from './menubar-medewerker.component';

describe('MenubarMedewerkerComponent', () => {
  let component: MenubarMedewerkerComponent;
  let fixture: ComponentFixture<MenubarMedewerkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubarMedewerkerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenubarMedewerkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
