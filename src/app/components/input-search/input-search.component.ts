import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PostsService } from '../../services/posts/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSearchComponent),
      multi: true,
    },
  ],
})
export class InputSearchComponent implements ControlValueAccessor {
  value: string = '';
  private onChange = (value: string) => {};
  private onTouched = () => {};
  allPosts: any[] = [];
  filteredPosts: any[] = [];

  constructor(private postsService: PostsService, private router: Router) {}

  writeValue = (value: string) => {
    this.value = value;
  };

  registerOnChange = (fn: (value: string) => void) => {
    this.onChange = fn;
  };

  registerOnTouched = (fn: () => void) => {
    this.onTouched = fn;
  };

  setDisabledState? = (isDisabled: boolean) => {};

  ngOnInit() {
    this.postsService.getAllPosts().subscribe((posts) => {
      this.allPosts = posts;
      this.postsService.setFilteredPosts(posts);
    });
  }

  onInputChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.value = value;

    const searchTerm = value.toLowerCase().trim();
    const filtered = this.allPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm)
    );

    this.postsService.setFilteredPosts(filtered);
    this.postsService.setSearchTerm(searchTerm);
  };

  onBlur = () => {
    this.onTouched();
  };

  onKeyUp = (event: KeyboardEvent) => {
    const searchTerm = (event.target as HTMLInputElement).value.trim();

    if (searchTerm.length === 0) {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['/search']);
    }
  };
}
