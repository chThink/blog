import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostCardComponent } from './components/post-card/post-card.component';
import { BlogExplorerComponent } from './pages/blog-explorer/blog-explorer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PostCardComponent,
    BlogExplorerComponent,
    HeaderComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'test-smarter';

  search() {}
}
