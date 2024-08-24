/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseBikeResponse } from '../../models/page-response-bike-response';

export interface FindAllBikesByOwner$Params {
  page?: number;
  size?: number;
}

export function findAllBikesByOwner(http: HttpClient, rootUrl: string, params?: FindAllBikesByOwner$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBikeResponse>> {
  const rb = new RequestBuilder(rootUrl, findAllBikesByOwner.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageResponseBikeResponse>;
    })
  );
}

findAllBikesByOwner.PATH = '/bikes/owner';
