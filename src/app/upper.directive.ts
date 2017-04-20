import { Directive,ElementRef, Renderer,AfterViewInit  } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  constructor(private e: ElementRef, private r: Renderer) { 
    //e.nativeElement.innerHTML=e.nativeElement.innerHTML.toUpperCase();
  //  console.dir(this.e.nativeElement['innerHTML']);
    //e.nativeElement.innerHTML=""
     
  // r.setElementProperty(e.nativeElement, 'innerText', "j"); 

  }
ngAfterViewInit(){
   console.dir(this.e.nativeElement.innerHTML);
   let t=this.e.nativeElement.innerHTML;
        this. r.setElementProperty(this.e.nativeElement, 'innerText', t.toUpperCase()); 
    }

}
