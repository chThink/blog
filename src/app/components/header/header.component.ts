import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from '../input-search/input-search.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, CommonModule, InputSearchComponent, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() clickSearch: () => void = () => {};

  searchText = '';
  showInputSearch: boolean = false;

  constructor(private router: Router, private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (
      !clickedInside &&
      this.showInputSearch &&
      this.searchText.trim() === ''
    ) {
      this.showInputSearch = false;
    }
  }

  toggleInputSearch = () => {
    this.showInputSearch = !this.showInputSearch;
  };

  goExplorer = () => {
    this.router.navigate(['']);
  };
}
