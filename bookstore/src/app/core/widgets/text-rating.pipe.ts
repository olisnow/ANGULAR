import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textRating'
})
export class TextRatingPipe implements PipeTransform {

  transform(rating: number): string {
    return '*****'.substring(0, rating);
  }

}
