import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-comment-post-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ButtonComponent],
  templateUrl: './comment-post-form.component.html',
  styleUrl: './comment-post-form.component.scss',
})
export class CommentPostFormComponent {
  @Input() comment = {
    comment: '',
    name: '',
    email: '',
  };

  @Output() commentData = new EventEmitter<NgForm>();

  onSubmit = (form: NgForm) => {
    this.commentData.emit(form);
  };
}
