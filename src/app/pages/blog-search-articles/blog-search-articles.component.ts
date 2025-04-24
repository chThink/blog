import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts/posts.service';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { forkJoin, map } from 'rxjs';
import { UsersService } from '../../services/users/users.service';
import { Router } from '@angular/router';
import { ExceptionPageMessageComponent } from '../../components/exception-page-message/exception-page-message/exception-page-message.component';

@Component({
  selector: 'app-blog-search-articles',
  standalone: true,
  imports: [
    CommonModule,
    PostCardComponent,
    ButtonComponent,
    ExceptionPageMessageComponent,
  ],
  templateUrl: './blog-search-articles.component.html',
  styleUrl: './blog-search-articles.component.scss',
})
export class BlogSearchArticlesComponent implements OnInit {
  filteredPosts: any[] = [];
  allLoaded: boolean = false;
  posts: any[] = [];
  postsRecents: any[] = [];
  allIds: number[] = [];
  currentIndex: number;
  batchSize: number;
  loading = false;
  topUser: any[] = [];
  postCounts: any[] = [];
  searchTerm: string = '';

  constructor(
    private postsService: PostsService,
    private usersServices: UsersService,
    private router: Router
  ) {
    this.currentIndex = 0;
    this.batchSize = 10;
  }

  ngOnInit() {
    this.postsService.searchTerm$.subscribe((term) => {
      this.searchTerm = term;
      this.postsService.filteredPosts$.subscribe((posts: any[]) => {
        this.filteredPosts = posts;
        this.posts = [];
        this.currentIndex = 0;
        this.allLoaded = false;
        this.load();
      });
    });
  }

  load = () => {
    if (this.allLoaded || this.loading || !this.filteredPosts) return;
    this.loading = true;

    const nextPosts = this.filteredPosts.slice(
      this.currentIndex,
      this.currentIndex + this.batchSize
    );

    const userObservables = nextPosts.map((post) =>
      this.usersServices
        .getUserById(post.userId)
        .pipe(map((user) => ({ ...post, user })))
    );

    forkJoin(userObservables).subscribe({
      next: (postsWithUsers: any[]) => {
        this.posts = [...this.posts, ...postsWithUsers];
        this.currentIndex += this.batchSize;
        this.loading = false;

        if (this.currentIndex >= this.filteredPosts.length) {
          this.allLoaded = true;
        }
      },
      error: (error) => {
        console.error('Error loading posts or users:', error);
        this.loading = false;
      },
    });
  };

  clickPost = (id: number) => {
    this.router.navigate(['/post', this.posts[id].id]);
  };
}
