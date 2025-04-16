import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogExplorerComponent } from './blog-explorer.component';

describe('BlogExplorerComponent', () => {
  let component: BlogExplorerComponent;
  let fixture: ComponentFixture<BlogExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogExplorerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
