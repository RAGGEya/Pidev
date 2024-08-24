/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { approveReturnBorrowBike } from '../fn/bike/approve-return-borrow-bike';
import { ApproveReturnBorrowBike$Params } from '../fn/bike/approve-return-borrow-bike';
import { BikeResponse } from '../models/bike-response';
import { borrowBike } from '../fn/bike/borrow-bike';
import { BorrowBike$Params } from '../fn/bike/borrow-bike';
import { findAllBikes } from '../fn/bike/find-all-bikes';
import { FindAllBikes$Params } from '../fn/bike/find-all-bikes';
import { findAllBikesByOwner } from '../fn/bike/find-all-bikes-by-owner';
import { FindAllBikesByOwner$Params } from '../fn/bike/find-all-bikes-by-owner';
import { findAllBorrowedBikes } from '../fn/bike/find-all-borrowed-bikes';
import { FindAllBorrowedBikes$Params } from '../fn/bike/find-all-borrowed-bikes';
import { findAllReturnedBikes } from '../fn/bike/find-all-returned-bikes';
import { FindAllReturnedBikes$Params } from '../fn/bike/find-all-returned-bikes';
import { findBikeById } from '../fn/bike/find-bike-by-id';
import { FindBikeById$Params } from '../fn/bike/find-bike-by-id';
import { PageResponseBikeResponse } from '../models/page-response-bike-response';
import { PageResponseBorrowedBikeResponse } from '../models/page-response-borrowed-bike-response';
import { returnBorrowBike } from '../fn/bike/return-borrow-bike';
import { ReturnBorrowBike$Params } from '../fn/bike/return-borrow-bike';
import { saveBike } from '../fn/bike/save-bike';
import { SaveBike$Params } from '../fn/bike/save-bike';
import { updateArchivedStatus } from '../fn/bike/update-archived-status';
import { UpdateArchivedStatus$Params } from '../fn/bike/update-archived-status';
import { updateShareableStatus } from '../fn/bike/update-shareable-status';
import { UpdateShareableStatus$Params } from '../fn/bike/update-shareable-status';
import { uploadBikeCoverPicture } from '../fn/bike/upload-bike-cover-picture';
import { UploadBikeCoverPicture$Params } from '../fn/bike/upload-bike-cover-picture';

@Injectable({ providedIn: 'root' })
export class BikeService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAllBikes()` */
  static readonly FindAllBikesPath = '/bikes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllBikes()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllBikes$Response(params?: FindAllBikes$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBikeResponse>> {
    return findAllBikes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllBikes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllBikes(params?: FindAllBikes$Params, context?: HttpContext): Observable<PageResponseBikeResponse> {
    return this.findAllBikes$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseBikeResponse>): PageResponseBikeResponse => r.body)
    );
  }

  /** Path part for operation `saveBike()` */
  static readonly SaveBikePath = '/bikes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveBike()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveBike$Response(params: SaveBike$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return saveBike(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveBike$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveBike(params: SaveBike$Params, context?: HttpContext): Observable<number> {
    return this.saveBike$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `uploadBikeCoverPicture()` */
  static readonly UploadBikeCoverPicturePath = '/bikes/cover/{bike-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadBikeCoverPicture()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadBikeCoverPicture$Response(params: UploadBikeCoverPicture$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return uploadBikeCoverPicture(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadBikeCoverPicture$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadBikeCoverPicture(params: UploadBikeCoverPicture$Params, context?: HttpContext): Observable<{
}> {
    return this.uploadBikeCoverPicture$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `borrowBike()` */
  static readonly BorrowBikePath = '/bikes/borrow/{bike-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `borrowBike()` instead.
   *
   * This method doesn't expect any request body.
   */
  borrowBike$Response(params: BorrowBike$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return borrowBike(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `borrowBike$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  borrowBike(params: BorrowBike$Params, context?: HttpContext): Observable<number> {
    return this.borrowBike$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `updateShareableStatus()` */
  static readonly UpdateShareableStatusPath = '/bikes/shareable/{bike-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateShareableStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateShareableStatus$Response(params: UpdateShareableStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return updateShareableStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateShareableStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateShareableStatus(params: UpdateShareableStatus$Params, context?: HttpContext): Observable<number> {
    return this.updateShareableStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `returnBorrowBike()` */
  static readonly ReturnBorrowBikePath = '/bikes/borrow/return/{bike-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `returnBorrowBike()` instead.
   *
   * This method doesn't expect any request body.
   */
  returnBorrowBike$Response(params: ReturnBorrowBike$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return returnBorrowBike(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `returnBorrowBike$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  returnBorrowBike(params: ReturnBorrowBike$Params, context?: HttpContext): Observable<number> {
    return this.returnBorrowBike$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `approveReturnBorrowBike()` */
  static readonly ApproveReturnBorrowBikePath = '/bikes/borrow/return/approve/{bike-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `approveReturnBorrowBike()` instead.
   *
   * This method doesn't expect any request body.
   */
  approveReturnBorrowBike$Response(params: ApproveReturnBorrowBike$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return approveReturnBorrowBike(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `approveReturnBorrowBike$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  approveReturnBorrowBike(params: ApproveReturnBorrowBike$Params, context?: HttpContext): Observable<number> {
    return this.approveReturnBorrowBike$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `updateArchivedStatus()` */
  static readonly UpdateArchivedStatusPath = '/bikes/archived/{bike-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateArchivedStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArchivedStatus$Response(params: UpdateArchivedStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return updateArchivedStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateArchivedStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArchivedStatus(params: UpdateArchivedStatus$Params, context?: HttpContext): Observable<number> {
    return this.updateArchivedStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findBikeById()` */
  static readonly FindBikeByIdPath = '/bikes/{bike-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findBikeById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findBikeById$Response(params: FindBikeById$Params, context?: HttpContext): Observable<StrictHttpResponse<BikeResponse>> {
    return findBikeById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findBikeById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findBikeById(params: FindBikeById$Params, context?: HttpContext): Observable<BikeResponse> {
    return this.findBikeById$Response(params, context).pipe(
      map((r: StrictHttpResponse<BikeResponse>): BikeResponse => r.body)
    );
  }

  /** Path part for operation `findAllReturnedBikes()` */
  static readonly FindAllReturnedBikesPath = '/bikes/returned';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllReturnedBikes()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllReturnedBikes$Response(params?: FindAllReturnedBikes$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBorrowedBikeResponse>> {
    return findAllReturnedBikes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllReturnedBikes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllReturnedBikes(params?: FindAllReturnedBikes$Params, context?: HttpContext): Observable<PageResponseBorrowedBikeResponse> {
    return this.findAllReturnedBikes$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseBorrowedBikeResponse>): PageResponseBorrowedBikeResponse => r.body)
    );
  }

  /** Path part for operation `findAllBikesByOwner()` */
  static readonly FindAllBikesByOwnerPath = '/bikes/owner';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllBikesByOwner()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllBikesByOwner$Response(params?: FindAllBikesByOwner$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBikeResponse>> {
    return findAllBikesByOwner(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllBikesByOwner$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllBikesByOwner(params?: FindAllBikesByOwner$Params, context?: HttpContext): Observable<PageResponseBikeResponse> {
    return this.findAllBikesByOwner$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseBikeResponse>): PageResponseBikeResponse => r.body)
    );
  }

  /** Path part for operation `findAllBorrowedBikes()` */
  static readonly FindAllBorrowedBikesPath = '/bikes/borrowed';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllBorrowedBikes()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllBorrowedBikes$Response(params?: FindAllBorrowedBikes$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBorrowedBikeResponse>> {
    return findAllBorrowedBikes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllBorrowedBikes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllBorrowedBikes(params?: FindAllBorrowedBikes$Params, context?: HttpContext): Observable<PageResponseBorrowedBikeResponse> {
    return this.findAllBorrowedBikes$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseBorrowedBikeResponse>): PageResponseBorrowedBikeResponse => r.body)
    );
  }

}
