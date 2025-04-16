import { Routes } from '@angular/router';
import { BlogExplorerComponent } from './pages/blog-explorer/blog-explorer.component';
import { BlogSearchArticlesComponent } from './pages/blog-search-articles/blog-search-articles.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { BlogAuthorProfileComponent } from './pages/blog-author-profile/blog-author-profile.component';

export const routes: Routes = [
  { path: '', component: BlogExplorerComponent },
  { path: 'search', component: BlogSearchArticlesComponent },
  { path: 'post/:id', component: BlogPostComponent },
  { path: 'author/:id', component: BlogAuthorProfileComponent },
];
