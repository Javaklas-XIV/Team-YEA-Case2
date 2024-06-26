import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsbeheerComponent } from './accountsbeheer.component';

describe('AccountsbeheerComponent', () => {
  let component: AccountsbeheerComponent;
  let fixture: ComponentFixture<AccountsbeheerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsbeheerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsbeheerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
