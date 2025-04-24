import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorProfileInfoComponent } from './author-profile-info.component';

describe('AuthorProfileInfoComponent', () => {
  let component: AuthorProfileInfoComponent;
  let fixture: ComponentFixture<AuthorProfileInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorProfileInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorProfileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
