/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseBorrowedBikeResponse } from '../../models/page-response-borrowed-bike-response';

export interface FindAllBorrowedBikes$Params {
  page?: number;
  size?: number;
}

export function findAllBorrowedBikes(http: HttpClient, rootUrl: string, params?: FindAllBorrowedBikes$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBorrowedBikeResponse>> {
  const rb = new RequestBuilder(rootUrl, findAllBorrowedBikes.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageResponseBorrowedBikeResponse>;
    })
  );
}

findAllBorrowedBikes.PATH = '/bikes/borrowed';
