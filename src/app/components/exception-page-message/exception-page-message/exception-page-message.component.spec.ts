import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionPageMessageComponent } from './exception-page-message.component';

describe('ExceptionPageMessageComponent', () => {
  let component: ExceptionPageMessageComponent;
  let fixture: ComponentFixture<ExceptionPageMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExceptionPageMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExceptionPageMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
