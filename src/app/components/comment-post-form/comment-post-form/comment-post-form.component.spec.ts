import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentPostFormComponent } from './comment-post-form.component';

describe('CommentPostFormComponent', () => {
  let component: CommentPostFormComponent;
  let fixture: ComponentFixture<CommentPostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentPostFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
