import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWidget]',
})
export class WidgetDirective implements AfterViewInit {
  private isHeaderExpanded: boolean = false;
  private widgetHeader: any;

  constructor(private _el: ElementRef, private _renderer: Renderer2) {
  }


  ngAfterViewInit(): void {
    this._renderer.addClass(this._el.nativeElement.children[0], 'widget-element');

    this.widgetHeader = this._renderer.createElement('div');
    this._renderer.addClass(this.widgetHeader, 'widget-header');
    this._renderer.insertBefore(this._el.nativeElement.firstChild, this.widgetHeader, this._el.nativeElement.firstChild.firstChild);

    this._renderer.listen(this.widgetHeader, 'click', (event) => {
      this.onClick(event);
    });
  }

  onClick(event) {
    this.isHeaderExpanded = !this.isHeaderExpanded;

    if (this.isHeaderExpanded) {

      this.widgetHeader.innerHTML = '<div class="active-marker"></div><i class="icon-settings"></i>';
      this._renderer.addClass(this.widgetHeader, 'expanded');

      this._renderer.listen(this.widgetHeader.querySelector('.icon-settings'), 'click', ($event) => {
        $event.stopPropagation();
      });
      return;
    }

    this.widgetHeader.innerHTML = '';
    this._renderer.removeClass(this.widgetHeader, 'expanded');
  }

}
