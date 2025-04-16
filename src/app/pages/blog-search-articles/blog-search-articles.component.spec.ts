import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSearchArticlesComponent } from './blog-search-articles.component';

describe('BlogSearchArticlesComponent', () => {
  let component: BlogSearchArticlesComponent;
  let fixture: ComponentFixture<BlogSearchArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSearchArticlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSearchArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
