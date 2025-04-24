import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentPostItemComponent } from './comment-post-item.component';

describe('CommentPostItemComponent', () => {
  let component: CommentPostItemComponent;
  let fixture: ComponentFixture<CommentPostItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentPostItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentPostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
