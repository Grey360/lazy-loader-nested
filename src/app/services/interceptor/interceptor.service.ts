import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

/**
 * This class enables the tampering of outgoing API calls.
 */
@Injectable()
export class InterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqTmp = req.clone(); // Clone the outgoing request.
    console.log(reqTmp);        // Log it to the console.
    return next.handle(reqTmp); // Onto the next.
  }
}
