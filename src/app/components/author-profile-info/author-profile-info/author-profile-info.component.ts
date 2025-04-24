import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-author-profile-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './author-profile-info.component.html',
  styleUrl: './author-profile-info.component.scss',
})
export class AuthorProfileInfoComponent {
  @Input() user: any;
  @Input() description!: any;
  @Input() postCounts!: number;
}
