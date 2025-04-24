import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorPostInfoComponent } from './author-post-info.component';

describe('AuthorPostInfoComponent', () => {
  let component: AuthorPostInfoComponent;
  let fixture: ComponentFixture<AuthorPostInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorPostInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorPostInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
