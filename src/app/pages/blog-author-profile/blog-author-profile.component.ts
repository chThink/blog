import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { PostsService } from '../../services/posts/posts.service';
import { UsersService } from '../../services/users/users.service';
import { forkJoin, map } from 'rxjs';
import { AuthorPostInfoComponent } from '../../components/author-post-info/author-post-info/author-post-info.component';
import { AuthorProfileInfoComponent } from '../../components/author-profile-info/author-profile-info/author-profile-info.component';

interface Post {
  id: number;
  title: string;
  body: string;
  user: {
    name: string;
    email: string;
    address: { city: string };
  };
  comments: [
    {
      id: number;
      name: string;
      email: string;
      body: string;
    }
  ];
}

@Component({
  selector: 'app-blog-author-profile',
  standalone: true,
  imports: [
    PostCardComponent,
    CommonModule,
    ButtonComponent,
    AuthorProfileInfoComponent,
  ],
  templateUrl: './blog-author-profile.component.html',
  styleUrl: './blog-author-profile.component.scss',
})
export class BlogAuthorProfileComponent {
  id: string = '';
  posts: any[] = [];
  postsUser: any[] = [];

  postsRecents: any[] = [];
  allIds: number[] = [];
  currentIndex: number;
  batchSize: number;
  loading = false;
  allLoaded = false;
  topUser: any[] = [];
  postCounts: number = 0;

  post: Post = {
    id: 0,
    title: '',
    body: '',

    user: { name: '', email: '', address: { city: '' } },
    comments: [{ id: 0, name: '', email: '', body: '' }],
  };

  user: any = { name: '', email: '', address: { city: '' } };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService,
    private usersService: UsersService
  ) {
    this.currentIndex = 0;
    this.batchSize = 10;
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    if (!this.id) {
      throw new Error('Parâmetro "id" é obrigatório');
    }
    const userId = parseInt(this.id);

    this.usersService.getUserById(userId).subscribe((userData) => {
      this.user = userData;
    });

    this.postsService.getPostsByUserID(userId).subscribe((postsData) => {
      this.postsUser = postsData;
      this.allIds = postsData.map((post: any) => post.id);
      this.load();
    });
  }

  load = () => {
    if (this.allLoaded || this.loading) return;
    this.loading = true;

    const nextPosts = this.postsUser.slice(
      this.currentIndex,
      this.currentIndex + this.batchSize
    );

    const postObservables = nextPosts.map((post) =>
      forkJoin({
        user: this.usersService.getUserById(post.userId),
        comments: this.postsService.getCommentsByPostID(post.id),
      }).pipe(
        map(({ user, comments }) => ({
          ...post,
          user,
          comments,
        }))
      )
    );

    forkJoin(postObservables).subscribe({
      next: (postsWithDetails: any[]) => {
        this.posts = [...this.posts, ...postsWithDetails];
        this.currentIndex += this.batchSize;
        this.loading = false;
        this.postCounts = this.postsUser.length;
        if (this.currentIndex >= this.postsUser.length) {
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
