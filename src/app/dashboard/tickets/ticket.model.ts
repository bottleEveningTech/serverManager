export interface TicketModel {
    id: string;
    title: string;
    requestText: string;
    status: 'open' | 'closed';
}