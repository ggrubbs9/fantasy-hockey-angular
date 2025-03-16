import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MAIN_API_HOST } from 'src/app/core/api-path.token';
import { Company } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class CompanyListApiService {
  constructor(
    private http: HttpClient,
    @Inject(MAIN_API_HOST) private apiBase: string,
  ) {}

  getList(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiBase}/v1/Companies`);
  }
}
