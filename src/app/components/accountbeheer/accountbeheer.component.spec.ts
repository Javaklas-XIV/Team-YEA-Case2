import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountbeheerComponent } from './accountbeheer.component';

describe('AccountbeheerComponent', () => {
  let component: AccountbeheerComponent;
  let fixture: ComponentFixture<AccountbeheerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountbeheerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountbeheerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
