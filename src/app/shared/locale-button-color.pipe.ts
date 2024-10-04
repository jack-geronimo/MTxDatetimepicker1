import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localeButtonColor',
  pure: true
})
export class LocaleButtonColorPipe implements PipeTransform {
  transform(currentLocale: string | undefined, buttonLocale: string): string {
    return currentLocale === buttonLocale ? 'primary' : 'accent';
  }
}
