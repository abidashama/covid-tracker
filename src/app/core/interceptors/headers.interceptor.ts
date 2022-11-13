import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request = request.clone({
      setHeaders: {
        'X-RapidAPI-Key': 'bc177f8cf9msh869569afca410aep1e349cjsn8bdbcc947271',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
      }
    })

    return next.handle(request);
  }
}
