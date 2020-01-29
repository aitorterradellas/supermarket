import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from '../constantsService/constants.service';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(ConstantsService.URL).pipe(data => data);
  }
}
