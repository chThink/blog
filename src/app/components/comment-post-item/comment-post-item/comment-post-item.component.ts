import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment-post-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment-post-item.component.html',
  styleUrl: './comment-post-item.component.scss',
})
export class CommentPostItemComponent {
  @Input() comments!: any;
}
