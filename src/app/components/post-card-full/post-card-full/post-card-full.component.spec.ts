import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardFullComponent } from './post-card-full.component';

describe('PostCardFullComponent', () => {
  let component: PostCardFullComponent;
  let fixture: ComponentFixture<PostCardFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCardFullComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCardFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
