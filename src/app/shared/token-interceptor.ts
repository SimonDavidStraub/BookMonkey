import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //Hier können Requests manipuliert werden

    const newReq = req.clone({ setHeaders: { Authorization: 'Bearer 1234567890'} });

    return next.handle(newReq).pipe(
      // Hier können Responses manipuliert werden
      tap(
        resp => console.log('response:', resp)
      )
    );
  }
}
