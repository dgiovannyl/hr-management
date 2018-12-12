import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpApiService } from 'src/app/core/http-api.service';
import { environment } from 'src/environments/environment';
import { Color } from './color.interface';

@Injectable()
export class ColorService {
  constructor(private httpApiService: HttpApiService) {}

  getColors(): Observable<Color[]> {
    const url = `${environment.backEndUrl}${environment.colorsPath}`;
    return this.httpApiService.get<Color[]>(url);
  }
}
