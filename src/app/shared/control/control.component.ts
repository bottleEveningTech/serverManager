import { AfterContentInit, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, //emulated is default,
  host:{
    class: 'control',
    '(click)':'onClick()'
  }
})
export class ControlComponent implements AfterContentInit {

  // @HostBinding('class') className = 'control';
  // @HostListener('click') 

  private el = inject(ElementRef);
  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private controlsgnl = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  onClick(){
    console.log('clicked');
    console.log(this.el);
    console.log(this.control);
    console.log(this.controlsgnl());
  };
  label = input.required<string>();

  ngAfterContentInit(): void {
    console.log(this.control?.nativeElement);
  }

}
