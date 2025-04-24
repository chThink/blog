import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-author-post-info',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './author-post-info.component.html',
  styleUrl: './author-post-info.component.scss',
})
export class AuthorPostInfoComponent {
  @Input() post: any;
  @Input() totalUserPosts!: number;
}
