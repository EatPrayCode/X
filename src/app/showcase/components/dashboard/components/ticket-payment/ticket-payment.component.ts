import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/showcase/services/notification.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-ticket-payment',
  templateUrl: './ticket-payment.component.html',
  styleUrls: ['./ticket-payment.component.scss']
})
export class TicketPaymentComponent implements OnInit {

  constructor(
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void { }

  handlePaymentSuccess() {
    const sampleTicket: any = {
      my_id: uuidv4(),
      category: 'CategoryType',
      description: 'Description Here',
      contact: 9999999999,
      contact_email: '',
      ticket_status: "New"
    };
    // this.ticketService.createTicket(sampleTicket);
    this.notificationService
      .sendToAdminEmail(sampleTicket.my_id, sampleTicket.contact_email,
        sampleTicket.contact, sampleTicket.category, sampleTicket.description
      );
  }

}
