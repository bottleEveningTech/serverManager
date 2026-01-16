import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { TicketModel } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: TicketModel[] = [];

  onAddTicket(ticketData: { title: string; text: string; }) {
    const ticket: TicketModel = {
      title: ticketData.title,
      requestText: ticketData.text,
      id: Math.random().toString(),
      status: 'open'
    }

    this.tickets.push(ticket);
  }

  onCloseTicket(id: string){
    this.tickets = this.tickets.map((tick)=> {
      if(tick.id === id){
        return { ...tick, status: 'closed'}
      }
      return tick;
    })
  }
}
