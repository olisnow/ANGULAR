import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent implements OnInit {

  @Input() set stars(rating: number) {
    this.array = [1, 2, 3, 4, 5]
      .map(value => value <= rating);
  }

  @Output() starsChange = new EventEmitter<number>();

  array: boolean[];

  changeRating(newRating: number) {
    this.starsChange.emit(newRating);
  }

  constructor() { }
  ngOnInit() { }

  log() {
    console.log('refresh');
  }
}
