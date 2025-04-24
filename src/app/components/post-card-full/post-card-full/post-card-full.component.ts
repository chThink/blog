import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-card-full',
  standalone: true,
  imports: [],
  templateUrl: './post-card-full.component.html',
  styleUrl: './post-card-full.component.scss',
})
export class PostCardFullComponent {
  @Input() defaultCover: any;
  @Input() post!: any;
}
