import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private endpoint = '/users';
  users: any[] = [];
  constructor(private http: HttpClient, private apiService: ApiService) {}

  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.apiService.baseUrl}/${this.endpoint}/${id}`);
  }

  getUsersByIds(ids: number[]): Observable<any[]> {
    const requests = ids.map((id) => this.getUserById(id));
    return forkJoin(requests);
  }
}
