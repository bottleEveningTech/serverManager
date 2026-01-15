import { Component, ElementRef, QueryList, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @ViewChildren(ButtonComponent) btns!: QueryList<ButtonComponent>;
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private btn = viewChild(ButtonComponent);
  private formele = viewChild.required<ElementRef<HTMLFormElement>>('form');
   
  constructor(){

  }
  onSubmit(title:string, ticketText:string){
    console.log(title);
    console.log(ticketText);
    this.form?.nativeElement.reset();
    this.formele()?.nativeElement.reset();
  }
}
