import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('click') onClicks(){
    this.highlightColor('#ea1e63')
  }

  private highlightColor(action:string){
    this.elementRef.nativeElement.style.color = action;
  }

}
