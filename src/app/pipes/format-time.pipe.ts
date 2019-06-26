import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: string): any {
    let time:string=value.toString();
    let seconds:string;
    let minutes:string;
    let hours:string;
    let l:number;

    l=time.length==6?2:1;
      
    seconds=time.substr(time.length-2,2);
    minutes=time.substr(time.length-4,2);
    hours=time.substr(time.length-6,l);

    return hours + ':' + minutes + ':' + seconds;
  }

}
