import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'https://jsonplaceholder.typicode.com';
  constructor() {}
}
