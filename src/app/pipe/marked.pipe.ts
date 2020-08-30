import { Pipe, PipeTransform } from "@angular/core";
import * as marked from 'marked';

@Pipe({
  name: 'marked'
})
export class MarkedPipe implements PipeTransform {
  transform(makedownFile: string): any {
    // if (makedownFile && makedownFile.length > 0) {
      return marked(makedownFile);
    // }
    // return makedownFile;
  }
}
