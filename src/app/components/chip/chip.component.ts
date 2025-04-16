import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss',
})
export class ChipComponent {
  @Input() dafaultProfile: string = 'assets/default-avatar.png';
  @Input() articles: number = 0;
  @Input() name: string = '';
  @Input() clickChip!: (id: number) => void;
  @Input() id!: number;
}
