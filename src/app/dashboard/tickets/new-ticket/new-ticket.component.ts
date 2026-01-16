import { AfterViewInit, Component, effect, ElementRef, EventEmitter, OnInit, output, QueryList, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, FormsModule, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit, OnInit{
  @ViewChildren(ButtonComponent) btns!: QueryList<ButtonComponent>;
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private btn = viewChild(ButtonComponent);
  private formele = viewChild.required<ElementRef<HTMLFormElement>>('form');

  // @Output() addTicket = new EventEmitter();
  addTicket = output<{title:string; text:string}>()
   
  enteredTitle = '';
  enteredText = '';
  constructor(){
  }
  ngAfterViewInit(): void {
    console.log('After view init');
    console.log(this.form?.nativeElement);
  }
  ngOnInit(): void {
        console.log('on init');
    console.log(this.form?.nativeElement);
  }
  onSubmit(){
    // console.log(title);
    // console.log(ticketText);
    // this.form?.nativeElement.reset();

    this.addTicket.emit({title:this.enteredTitle, text: this.enteredText});

    // this.formele()?.nativeElement.reset();

    this.enteredText = '';
    this.enteredTitle = '';
  }
}
