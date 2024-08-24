/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BikeResponse } from '../../models/bike-response';

export interface FindBikeById$Params {
  'bike-id': number;
}

export function findBikeById(http: HttpClient, rootUrl: string, params: FindBikeById$Params, context?: HttpContext): Observable<StrictHttpResponse<BikeResponse>> {
  const rb = new RequestBuilder(rootUrl, findBikeById.PATH, 'get');
  if (params) {
    rb.path('bike-id', params['bike-id'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<BikeResponse>;
    })
  );
}

findBikeById.PATH = '/bikes/{bike-id}';
