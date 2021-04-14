import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  SimpleChanges,
  Input,
  Output,
  OnChanges,
  AfterViewInit,
} from '@angular/core';

interface RateObj {
  selected: boolean;
  index: number;
  percentage: string;
  starId: string;
}

@Component({
  selector: 'sv-star-rating',
  templateUrl: 'sv-star-rating.component.html',
  styleUrls: ['./sv-star-rating.component.css']
})
export class SvStarRatingComponent implements OnChanges, AfterViewInit {
  @Input() size = '40px';                 // height and widths of div of svg
  @Input() value: string | number = 2;
  @Input() margin = '2px';                // height and widths of div of svg
  @Input() bgColor = '#9c9c9c';
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() radiusRatio = 40;              // Svg radius
  @Input() activeBgColor = 'gold';
  @Input() innerOuterRadiusRatio = 2;     // Out/Inner radius ratio -> make stars thin or thick
  @Output() valueChange = new EventEmitter();
  hover = false;
  hwPoints = 0;                          // height and widths of svg
  innerRadius = 0;
  outerRadius = 0;
  ratingList: RateObj[] = [
    {selected: false, index: 1, percentage: '0%', starId: ''},
    {selected: false, index: 2, percentage: '0%', starId: ''},
    {selected: false, index: 3, percentage: '0%', starId: ''},
    {selected: false, index: 4, percentage: '0%', starId: ''},
    {selected: false, index: 5, percentage: '0%', starId: ''},
  ];
  ratingSave: RateObj[] = [];
  innerCirclePoints = 5;

  constructor(
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.value && Number(this.value) >= 0 && Number(this.value) <= 5) {
      this.ratingList.map((x) => {
        x.starId = Math.random().toString(36).substring(2, 15);
      });
      this.ratingSave = this.ratingList;
      this.completeRate(this.value);
    }
  }

  ngAfterViewInit(): void {
    this.hwPoints = document.getElementById('rating-' + this.ratingList[0].starId)?.clientHeight || 0;
    this.cdr.detectChanges();
  }

  completeRate(value: number | string): void {
    if (value && value.toString().split('.').length > 1) {
      this.ratingList.map((x) => {
        if (x.index - 1 === Number(value.toString().split('.')[0])) {
          x.percentage = (Number(value.toString().split('.')[1]) * 10).toString() + '%';
        } else {
          x.percentage = x.index - 1 > Number(value.toString().split('.')[0]) ? '0%' : '100%';
        }
      });
    } else {
      this.ratingList.map((x, index) => {
        x.percentage = index >= Number(value.toString()) ? '0%' : '100%';
      });
    }
  }

  get starPoints(): string {
    this.innerRadius = this.radiusRatio / this.innerCirclePoints;
    this.outerRadius = this.innerRadius * this.innerOuterRadiusRatio;
    return this.calcStartPoints(this.hwPoints / 2, this.innerCirclePoints, this.innerRadius, this.outerRadius);
  }

  calcStartPoints(center: number, innerCirclePoints: number, innerRadius: number, outerRadius: number): string {
    const angle = Math.PI / innerCirclePoints;
    const angleOffsetToCenterStar = 60;
    const totalPoints = innerCirclePoints * 2; // 10 in a 5-points star
    let points = '';
    for (let i = 0; i < totalPoints; i++) {
      const isEvenIndex = i % 2 === 0;
      const r = isEvenIndex ? outerRadius : innerRadius;
      const currX = center + Math.cos(i * angle + angleOffsetToCenterStar ) * r;
      const currY = center + Math.sin(i * angle + angleOffsetToCenterStar) * r;
      points += currX + ',' + currY + ' ';
    }
    return points;
  }

  rate(item: number): void {
    this.ratingList.forEach(x => x.selected = Number(x.index) <= Number(item));
  }

  hoverRating(item: RateObj): void {
    if (!this.disabled && !this.readonly) {
      this.hover = true;
      this.rate(item.index);
    }
  }

  exitRating(): void {
    if (!this.disabled && !this.readonly) {
      this.hover = false;
      this.rate(Number(this.value.toString().split('.')[0]));
    }
  }

  clickRating(item: RateObj): void {
    if (!this.disabled && !this.readonly) {
      for (const i in this.ratingSave) {
        if (Number(i) < item.index) {
          this.ratingList[i].percentage = '100%';
        } else {
          this.ratingList[i].percentage = '0%';
        }
      }
      this.ratingSave = this.ratingList;
      this.valueChange.emit(item.index);
    }
  }

}
