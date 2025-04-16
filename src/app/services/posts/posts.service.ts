import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private endpoint = '/posts';
  posts: any[] = [];

  private filteredPostsSubject = new BehaviorSubject<any[]>([]);
  filteredPosts$ = this.filteredPostsSubject.asObservable();

  private searchTermSubject = new BehaviorSubject<string>('');
  searchTerm$ = this.searchTermSubject.asObservable();

  constructor(private http: HttpClient, private apiService: ApiService) {}

  getPostById(id: number): Observable<any> {
    return this.http.get(`${this.apiService.baseUrl}/${this.endpoint}/${id}`);
  }

  getPostsByIds(ids: number[]): Observable<any[]> {
    const requests = ids.map((id) => this.getPostById(id));
    return forkJoin(requests);
  }

  getCommentsByPostID(id: number): Observable<any> {
    return this.http.get(
      `${this.apiService.baseUrl}/${this.endpoint}/${id}/comments`
    );
  }

  getPostsByUserID(id: number): Observable<any> {
    return this.http.get(
      `${this.apiService.baseUrl}/${this.endpoint}?userId=${id}`
    );
  }

  getAllPosts(): Observable<any> {
    return this.http.get(`${this.apiService.baseUrl}/${this.endpoint}`);
  }

  setFilteredPosts(posts: any[]): void {
    this.filteredPostsSubject.next(posts);
  }

  setSearchTerm(term: string): void {
    this.searchTermSubject.next(term);
  }
}
