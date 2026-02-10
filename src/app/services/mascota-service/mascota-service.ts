import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apiresponse } from '../../models/pets';


@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private http = inject(HttpClient);
  private API_PET = 'https://www.mockdog.dev/api/dogs';

  getMascotas(): Observable<Apiresponse> {
    return this.http.get<Apiresponse>(this.API_PET);
  }
}