import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCounter'
})
export class DateCounterPipe implements PipeTransform {

  transform(value: any): any {
    if (value){
      let today = +new Date();
      var dateDifference = today-+value
      var dateDifferenceSeconds = Math.floor(dateDifference*0.001)

      if (dateDifferenceSeconds< 10){
        return 'Just now';
      }

      // Time is in secs

      const timeIntervals = {
        'year': 31536000,
        'month': 2592000,
        'week': 604800,
        'day': 86400,
        'hour': 3600,
        'minute': 60,
        'second': 1,
      };

      let counter;
      for (const i in timeIntervals){
        counter = Math.floor(dateDifferenceSeconds / timeIntervals[i]);
        if(counter > 0){
          if(counter === 1){
            return counter + '' + i + ' ago';
          }else{ 
            // return when its more than a day
            return counter + '' + i + 's ago';
          }
        }
      }

    }
    return value;
  }


}
