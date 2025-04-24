import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { PostsService } from '../../services/posts/posts.service';
import { forkJoin, Subscription, switchMap } from 'rxjs';
import { UsersService } from '../../services/users/users.service';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthorPostInfoComponent } from '../../components/author-post-info/author-post-info/author-post-info.component';
import { PostCardFullComponent } from '../../components/post-card-full/post-card-full/post-card-full.component';
import { CommentPostItemComponent } from '../../components/comment-post-item/comment-post-item/comment-post-item.component';
import { CommentPostFormComponent } from '../../components/comment-post-form/comment-post-form/comment-post-form.component';

interface Post {
  id: number;
  title: string;
  body: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
  comments: [
    {
      name: string;
      email: string;
      body: string;
    }
  ];
}
@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [
    PostCardComponent,
    CommonModule,
    RouterLink,
    ButtonComponent,
    FormsModule,
    AuthorPostInfoComponent,
    PostCardFullComponent,
    CommentPostItemComponent,
    CommentPostFormComponent,
  ],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss',
})
export class BlogPostComponent {
  id: string = '';
  defaultCover = 'assets/cover.png';
  post: Post = {
    id: 0,
    title: '',
    body: '',
    user: { name: '', email: '', id: 0 },
    comments: [{ name: '', email: '', body: '' }],
  };
  posts: Post[] = [];
  private routeSub!: Subscription;

  totalUserPosts: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const idParam = params.get('id');
          if (!idParam) {
            throw new Error('"id" parameter is required');
          }
          const postId = parseInt(idParam, 10);

          return this.postsService.getPostById(postId).pipe(
            switchMap((post) => {
              const userId = post.userId;
              return forkJoin({
                post: this.postsService.getPostById(postId),
                user: this.usersService.getUserById(userId),
                comments: this.postsService.getCommentsByPostID(postId),
                userPosts: this.postsService.getPostsByUserID(userId),
              });
            })
          );
        })
      )
      .subscribe({
        next: ({ post, user, comments, userPosts }) => {
          this.post = { ...post, user, comments };
          this.totalUserPosts = userPosts.length;
          this.posts = this.postsService.posts;
        },
        error: (error) => {
          console.error('Error loading data: ', error);
        },
      });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  sendComment(form: NgForm) {
    if (form.valid) {
      const { name, email, comment } = form.value;

      const newComment = {
        name,
        email,
        body: comment,
      };

      this.post.comments.push(newComment);
      form.resetForm();
    } else {
      console.log('Invalid Form!');
    }
  }

  clickPost = (id: number) => {
    this.router.navigate(['/post', id]);
  };
}
