import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ImageInterface } from '../interface/imageInterface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient)

  getAllImages(): Observable<ImageInterface[]> {
    return this.http.get<ImageInterface[]>("https://picsum.photos/v2/list?page=8&limit=10");
  }

}
