import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rating: number;
  starWidth: number;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.rating = 0;
    this.starWidth = 0;
  }

  ngOnInit(): void {
    console.log(this.rating);
  }

  setRating(rating: number): void {
    this.rating = rating;
    this.starWidth = this.rating * 86 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`Đánh Giá Của Sản Phẩm Đó Là ${this.rating} Sao`);
  }
}
