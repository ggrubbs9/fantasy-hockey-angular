import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MAIN_API_HOST } from 'src/app/core/api-path.token';
import { Team } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class TeamListApiService {
  constructor(
    private http: HttpClient,
    @Inject(MAIN_API_HOST) private apiBase: string,
  ) {}

  getList(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.apiBase}/v1/Teams`);
  }
}
