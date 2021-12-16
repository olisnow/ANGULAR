import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlRating'
})
export class HtmlRatingPipe implements PipeTransform {

  transform(rating: number): string {
    const star = '&bigstar;';
    const emptyStar = '&star;';
    let html = '';
    for (let i = 0 ; i < rating ; i++) {
      html += star;
    }
    for (let i = 0 ; i < 5 - rating ; i++) {
      html += emptyStar;
    }
    return html;
  }

}
