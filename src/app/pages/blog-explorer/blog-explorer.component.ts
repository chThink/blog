import { Component } from '@angular/core';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { CommonModule } from '@angular/common';
import { ChipComponent } from '../../components/chip/chip.component';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';
import { PostsService } from '../../services/posts/posts.service';
import { catchError, forkJoin, map, of, switchMap, take } from 'rxjs';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-blog-explorer',
  standalone: true,
  imports: [PostCardComponent, CommonModule, ChipComponent, ButtonComponent],
  templateUrl: './blog-explorer.component.html',
  styleUrl: './blog-explorer.component.scss',
})
export class BlogExplorerComponent {
  posts: any[] = [];
  postsRecents: any[] = [];
  allIds: number[] = [];
  currentIndex: number;
  batchSize: number;
  loading = false;
  allLoaded = false;
  topUser: any[] = [];
  postCounts: any[] = [];

  constructor(
    private router: Router,
    private postsService: PostsService,
    private usersService: UsersService
  ) {
    this.currentIndex = 0;
    this.batchSize = 10;
  }

  ngOnInit() {
    this.initializeIds();
    this.load();
    this.loadTopUsers();
  }

  initializeIds = () => {
    this.allIds = Array.from({ length: 100 }, (_, i) => i + 1);
    this.shuffle(this.allIds);
  };

  shuffle = (array: number[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  load = () => {
    if (this.allLoaded || this.loading || !this.allIds) return;
    this.loading = true;

    const nextIds = this.allIds.slice(
      this.currentIndex,
      this.currentIndex + this.batchSize
    );

    this.postsService
      .getPostsByIds(nextIds)
      .pipe(
        switchMap((posts: any[]) => {
          const userObservables = posts.map((post) =>
            this.usersService
              .getUserById(post.userId)
              .pipe(map((user) => ({ ...post, user })))
          );

          return forkJoin(userObservables);
        })
      )
      .subscribe({
        next: (postsWithUsers: any[]) => {
          this.posts = [...this.posts, ...postsWithUsers];
          this.postsService.posts = [...this.posts, ...postsWithUsers];
          this.currentIndex += this.batchSize;
          this.loading = false;
          if (this.currentIndex >= this.allIds.length) {
            this.allLoaded = true;
          }
        },
        error: (error) => {
          console.error('Error loading posts or users:', error);
          this.loading = false;
        },
      });
  };

  loadTopUsers = () => {
    const userIds = [1, 2, 3];

    const userRequests = userIds.map((id) =>
      this.usersService.getUserById(id).pipe(
        take(1),
        catchError((error) => {
          console.error(`Error getting user with ID ${id}:`, error);
          return of(null);
        })
      )
    );

    forkJoin(userRequests).subscribe((usersData) => {
      this.topUser = usersData;
    });

    const postCountRequests = userIds.map((id) =>
      this.postsService.getPostsByUserID(id).pipe(
        map((posts) => ({ userId: id, count: posts.length })),
        catchError((error) => {
          console.error(`Error getting posts from user with ID ${id}:`, error);
          return of({ userId: id, count: 0 });
        })
      )
    );

    forkJoin(postCountRequests).subscribe((postCounts) => {
      this.postCounts = postCounts;
    });
  };

  clickPost = (id: number) => {
    this.router.navigate(['/post', this.posts[id].id]);
  };

  clickAuthor = (id: number) => {
    this.router.navigate(['/author', id]);
  };
}
