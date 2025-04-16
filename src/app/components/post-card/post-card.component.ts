import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../utils/truncate/truncate.pipe';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss',
})
export class PostCardComponent {
  @Input() title: string = '';
  @Input() summary: string = '';
  @Input() author: string = '';
  @Input() defaultProfile: string = 'assets/default-avatar.png';
  @Input() defaultCover: string = 'assets/cover.png';
  @Input() clickCard!: (id: number) => void;
  @Input() id!: number;
  @Input() authorId!: number;
}
