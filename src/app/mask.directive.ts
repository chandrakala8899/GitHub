import { Directive, ElementRef, HostListener, Input, input } from '@angular/core';

@Directive({
  selector: '[appMask]'
})
export class MaskDirective {

  @Input()
  appMask :string = '';

  maskData : string = '********';
  originalData:string='';

  constructor(private eleref:ElementRef) {
console.log(" From Mask directive")
   }

  @HostListener("mouseenter")
  mouseEnter() {
    
  console.log("Mouse Enter into the enter method " + this.appMask);
    
  this.appMask = this.originalData;
  this.eleref.nativeElement.value=this.appMask;
  
  }

  @HostListener("mouseleave")
  mouseOut(){
    this.originalData = this.appMask;
   this.appMask= this.maskData;
   
    console.log(" mouse enter into the MouseLeave method originalData" + this.originalData);

    console.log(" mouse enter  into the MouseLeave method   appMask" + this.appMask);
    this.eleref.nativeElement.value=this.appMask;
  }
@HostListener("mouseover")
mouseover(){
  console.log("  mouseover  " + this.appMask);
}
}
