import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountbeheerClientComponent } from './accountbeheer-client.component';

describe('AccountbeheerClientComponent', () => {
  let component: AccountbeheerClientComponent;
  let fixture: ComponentFixture<AccountbeheerClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountbeheerClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountbeheerClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
