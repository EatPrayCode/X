import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { NotificationService } from '../../services/notification.service';
import { TicketsService } from '../../services/tickets.service';

@Component({
  selector: 'app-ticket-options',
  templateUrl: './ticket-options.component.html',
  styleUrls: ['./ticket-options.component.scss']
})
export class TicketOptionsComponent implements OnInit, OnDestroy, AfterViewInit {
  ticket!: any;
  currentUserMail!: string;
  navigationSubscription:any;
  currentRoute: any = '';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private ticketService: TicketsService,
    private notificationService: NotificationService,
    private route: ActivatedRoute
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {

        this.currentRoute = this.router.url;
      }
    });
  }

  // ticketForm = this.fb.group({
  //   category: ["", [Validators.required]],
  //   description: ["", [Validators.required]],
  //   contact: ["", [Validators.required]]
  // });

  // pokemonControl = new FormControl();
  pokemonGroups: any[] = [
    {
      name: 'Grass',
      pokemon: [
        { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
        { value: 'oddish-1', viewValue: 'Oddish' },
        { value: 'bellsprout-2', viewValue: 'Bellsprout' }
      ]
    },
    {
      name: 'Water',
      pokemon: [
        { value: 'squirtle-3', viewValue: 'Squirtle' },
        { value: 'psyduck-4', viewValue: 'Psyduck' },
        { value: 'horsea-5', viewValue: 'Horsea' }
      ]
    },
    {
      name: 'Fire',
      disabled: true,
      pokemon: [
        { value: 'charmander-6', viewValue: 'Charmander' },
        { value: 'vulpix-7', viewValue: 'Vulpix' },
        { value: 'flareon-8', viewValue: 'Flareon' }
      ]
    },
    {
      name: 'Psychic',
      pokemon: [
        { value: 'mew-9', viewValue: 'Mew' },
        { value: 'mewtwo-10', viewValue: 'Mewtwo' },
      ]
    }
  ];

  // ngOnInit(): void {
  //   this.getCurrentUserMail();
  //   // this.goto_component({selectedIndex: 0});
  // }

  onSubmit(): void {
    this.ticket = {
      my_id: uuidv4(),
      category: 'CategoryType',
      description: 'Description Here',
      contact: 9999999999,
      contact_email: this.currentUserMail,
      ticket_status: "New"
    };
    // this.ticketService.createTicket(this.ticket);
    this.notificationService
      .sendToAdminEmail(this.ticket.my_id, this.ticket.contact_email,
        this.ticket.contact, this.ticket.category, this.ticket.description
      );
  }

  getCurrentUserMail(): void {
    const currentUser = JSON.parse(localStorage.getItem("user") || '{}')
    this.currentUserMail = currentUser.email
  }

  // cancel(): void {
  //   this.router.navigateByUrl('dashboard')
  // }

  // stepsObj: any = [{}, {}, {}];

  // goto_component(event: any) {
  //   console.log(event);
  //   if (event.selectedIndex == 0) {
  //     this.router.navigate(['/connect/raise-ticket/info']);
  //   }
  //   else if (event.selectedIndex == 1) {
  //     this.router.navigate(['/connect/raise-ticket/options']);
  //   }
  //   else if (event.selectedIndex == 2) {
  //     this.router.navigate(['/connect/raise-ticket/payment']);
  //   }
  //   else if (event.selectedIndex == 3) {
  //     this.router.navigate(['/connect/raise-ticket/summary']);
  //   }
  // }

  // myForm: Array<string> = [];

  // keys(): Array<string> {
  //   return Object.keys(this.myForm);
  // }

  ngAfterViewInit(): void { }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  messageCategories: any = [];
  selectedType: any;
  msgTypeObj: any = [];

  netasList: any = [
    { value: 'nmodi', viewValue: 'Narendra Modi' },
    { value: 'rahulg', viewValue: 'Rahul Gandhi' },
  ];
  selectedNeta: any;

  @Output() selectMsgTypeEvt = new EventEmitter();

  messageTypes: any[] = [
    { value: 'transport', viewValue: 'Transport' },
    { value: 'electricity', viewValue: 'Electricity' },
  ];

  handleMsgTypeChange(event: any) {
    let msgTyp = event.value;
  }

  handleNetaChange(event: any) { }

  netaForm: any;

  ngOnInit(): void {
    this.handleMsgTypeChange({});
    this.getCurrentUserMail();

    this.netaForm = this.fb.group({
      problem: [null, Validators.required],
      subproblem: [null, Validators.required],
      department: [null, Validators.required],
    });

    // const toSelect = this.netasList[0];
    // this.netaForm.get('neta').setValue(toSelect);

    // this.netaForm.get('neta').valueChanges.subscribe(
    //   (filterValue: any) => {
    //     console.log(filterValue);
    //     this.netaForm.get('messageType').setValue(null);
    //     this.messageCategories = [];
    //   }
    // );
    // this.netaForm.get('messageType').valueChanges.subscribe(
    //   (filterValue: any) => {
    //     console.log(filterValue);
    //     this.handleMsgTypeChange({value: filterValue});
    //   }
    // );
  }

  // ngAfterViewInit(): void {
  //   // this.selectedType = null;
  // }

  handleMessageOptionClick(event: any) {
    this.selectedType = event;
  }

}
