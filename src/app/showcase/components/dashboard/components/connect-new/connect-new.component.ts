import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, AfterViewInit, ViewChild } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { MatStepper } from "@angular/material/stepper";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { of, Subject } from "rxjs";
import { NotificationService } from "src/app/showcase/services/notification.service";
import { StepperService } from "src/app/showcase/services/stepper-service";
import { TicketsService } from "src/app/showcase/service/tickets.service";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-connect-new',
  templateUrl: './connect-new.component.html',
  styleUrls: ['./connect-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConnectNewComponent implements OnInit, OnDestroy, AfterViewInit {

  ticket!: any;
  currentUserMail!: string;
  @ViewChild('stepper') stepper: MatStepper | any;

  stepsList: any = [
    {
      id: 'ticket-info',
      label: 'Info',
      isBackEnabled: true,
      isPreviousEnabled: true,
    },
    {
      id: 'ticket-options',
      label: 'Ticket Options',
      isBackEnabled: true,
      isPreviousEnabled: true,
    },
    {
      id: 'ticket-submitted',
      label: 'Ticket Submitted',
      isBackEnabled: true,
      isPreviousEnabled: true,
    }
  ];
  isLinear: any = false;
  selectedIndex: any = 0;

  navigationSubscription;
  currentRoute: any = '';

  constructor(
    private router: Router,
    private ticketService: TicketsService,
    private notificationService: NotificationService,
    public formService: StepperService,
    private route: ActivatedRoute
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.currentRoute = this.router.url;
      }
    });
  }

  ngOnInit(): void {
    this.getCurrentUserMail();
    // this.stepsList = [...this.freeStepsList];
    // this.goto_component({selectedIndex: 0});
    // this.stepsList = [...[]];
  }

  handleNextClick(step: any) {
    if (step.id === "ticket-options") {
      this.ticket = {
        my_id: uuidv4(),
        category: 'category',
        description: 'description',
        contact: Number('contact'),
        contact_email: 'ashwathb7569@gmail.com',
        ticket_status: "New"
      };
      this.ticketService.addStud(this.ticket).finally(() => {
        this.selectedIndex++;
        this.goto_component({ selectedIndex: this.selectedIndex });
      });
    }
    else if (this.selectedIndex > 2) {
      // this.selectedIndex = 0;
      // this.goto_component({ selectedIndex: this.selectedIndex});
    }
    else {
      this.selectedIndex++;
      this.goto_component({ selectedIndex: this.selectedIndex });
    }
  }

  handlePrevClick(step: any) {
    console.log(step);
  }

  onSubmit(): void {
    if (confirm('Submit ticket?')) {
      this.ticket = {
        my_id: uuidv4(),
        category: 'category',
        description: 'description',
        contact: Number('contact'),
        contact_email: this.currentUserMail,
        ticket_status: "New"
      }
      // this.ticketService.createTicket(this.ticket)
      this.notificationService.sendToAdminEmail(this.ticket.my_id, this.ticket.contact_email, this.ticket.contact, this.ticket.category, this.ticket.description)
    }
  }

  getCurrentUserMail(): void {
    const currentUser = JSON.parse(localStorage.getItem("user") || '{}')
    this.currentUserMail = currentUser.email
  }

  handleSelectMsgTypeEvt(event: any) {
    console.log("Handle msg type select here");
  }

  goto_component(event: any) {
    if (event.selectedIndex == 0) {
      this.router.navigate(['connect/connect-new/info']);
    }
    else if (event.selectedIndex == 1) {
      this.router.navigate(['connect/connect-new/options']);
    }
    else if (event.selectedIndex == 2) {
      this.router.navigate(['connect/connect-new/summary']);
    }
  }

  ngAfterViewInit(): void { }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}
