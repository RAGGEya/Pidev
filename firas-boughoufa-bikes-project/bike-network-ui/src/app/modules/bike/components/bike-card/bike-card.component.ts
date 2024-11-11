import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BikeResponse} from '../../../../services/models/bike-response';

@Component({
  selector: 'app-bike-card',
  templateUrl: './bike-card.component.html',
  styleUrls: ['./bike-card.component.scss']
})
export class BikeCardComponent {
  private _bike: BikeResponse = {};
  private _manage = false;
  private _bikeCover: string | undefined;

  get bikeCover(): string | undefined {
    if (this._bike.cover) {
      return 'data:image/jpg;base64,' + this._bike.cover
    }
    return 'https://source.unsplash.com/user/c_v_r/1900x800';
  }

  get bike(): BikeResponse {
    return this._bike;
  }

  @Input()
  set bike(value: BikeResponse) {
    this._bike = value;
  }


  get manage(): boolean {
    return this._manage;
  }

  @Input()
  set manage(value: boolean) {
    this._manage = value;
  }

  @Output() private share: EventEmitter<BikeResponse> = new EventEmitter<BikeResponse>();
  @Output() private archive: EventEmitter<BikeResponse> = new EventEmitter<BikeResponse>();
  @Output() private addToWaitingList: EventEmitter<BikeResponse> = new EventEmitter<BikeResponse>();
  @Output() private borrow: EventEmitter<BikeResponse> = new EventEmitter<BikeResponse>();
  @Output() private edit: EventEmitter<BikeResponse> = new EventEmitter<BikeResponse>();
  @Output() private details: EventEmitter<BikeResponse> = new EventEmitter<BikeResponse>();

  onShare() {
    this.share.emit(this._bike);
  }

  onArchive() {
    this.archive.emit(this._bike);
  }

  onAddToWaitingList() {
    this.addToWaitingList.emit(this._bike);
  }

  onBorrow() {
    this.borrow.emit(this._bike);
  }

  onEdit() {
    this.edit.emit(this._bike);
  }

  onShowDetails() {
    this.details.emit(this._bike);
  }
}
