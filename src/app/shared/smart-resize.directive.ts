import { Directive, HostListener } from '@angular/core';

/**
 * Smart body resize
 */
@Directive({
  selector: '[appMain]',
})
export class SmartResizeDirective {

  private body = document.body;
  private html = document.documentElement;
  private height: number;

  // Check if element has class
  private hasClass(target: any, elementClassName: string) {
    return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
  }

  constructor() {
    if (this.hasClass(document.querySelector('body'), 'fixed-nav')) {
      // if fixed-nav do ...
    } else {
      setTimeout(() => {
        this.height = Math.max(this.body.scrollHeight, this.body.offsetHeight, this.html.clientHeight,
          this.html.scrollHeight, this.html.offsetHeight);
        document.getElementsByTagName('body')[0].style.minHeight = this.height + "px";
      }, 100);
    }

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.hasClass(document.querySelector('body'), 'fixed-nav')) {
      // if fixed-nav do ...
    } else {
      this.height = Math.max(this.body.scrollHeight, this.body.offsetHeight, this.html.clientHeight,
        this.html.scrollHeight, this.html.offsetHeight);
      document.getElementsByTagName('body')[0].style.minHeight = this.height + "px";
    }
  }
}
