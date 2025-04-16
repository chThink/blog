import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAuthorProfileComponent } from './blog-author-profile.component';

describe('BlogAuthorProfileComponent', () => {
  let component: BlogAuthorProfileComponent;
  let fixture: ComponentFixture<BlogAuthorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogAuthorProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogAuthorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
