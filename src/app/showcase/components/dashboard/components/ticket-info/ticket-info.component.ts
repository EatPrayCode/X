import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, AfterViewInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.scss']
})
export class TicketInfoComponent implements OnInit, AfterViewInit {

  constructor(
    private fb: FormBuilder,
  ) { }

  messageCategories: any = [];
  selectedType: any;
  msgTypeObj: any = [];

  netasList: any = [
    { value: 'nmodi', viewValue: 'Narendra Modi' },
    { value: 'rahulg', viewValue: 'Rahul Gandhi' },
  ];

  freeMsgTypeObj: any = [
    {
      name: '140 Chars',
      type: 'twitter',
      class: 'twitter-class',
      isFree: false,
      salePrice: 10,
      maxCharsCount: 140,
      id: '140t'
    },
    {
      name: '500 Chars',
      type: 'slack',
      class: 'slack-class',
      isFree: false,
      salePrice: 20,
      maxCharsCount: 500,
      id: '500sl'
    },
    {
      name: '1000 Chars',
      type: 'gmail',
      class: 'gmail-class',
      isFree: false,
      salePrice: 50,
      maxCharsCount: 1000,
      id: '1000g'
    },
    {
      name: '140 Chars',
      type: 'twitter',
      class: 'twitter-class',
      isFree: false,
      salePrice: 10,
      maxCharsCount: 140,
      id: 's140t'
    },
    {
      name: '500 Chars',
      type: 'slack',
      class: 'slack-class',
      isFree: false,
      salePrice: 20,
      maxCharsCount: 500,
      id: 's500sl'
    },
    {
      name: '1000 Chars',
      type: 'gmail',
      class: 'gmail-class',
      isFree: false,
      salePrice: 50,
      maxCharsCount: 1000,
      id: 's1000g'
    }
  ];

  paidMsgTypeObj: any = [
    {
      name: 'Prefilled100',
      type: 'zomato',
      class: 'zomato-class',
      isPremium: false,
      isFree: true,
      salePrice: 0,
      maxCharsCount: 100,
      id: '100z'
    },
    {
      name: 'Prefilled500',
      type: 'swiggy',
      class: 'swiggy-class',
      isPremium: false,
      isFree: true,
      salePrice: 0,
      maxCharsCount: 500,
      id: '500s'
    },
    {
      name: 'Prefilled1000',
      type: 'flipkart',
      class: 'flipkart-class',
      isPremium: false,
      isFree: true,
      salePrice: 0,
      maxCharsCount: 1000,
      id: '1000f'
    },
    {
      name: 'Prefilled100',
      type: 'zomato',
      class: 'zomato-class',
      isPremium: false,
      isFree: true,
      salePrice: 0,
      maxCharsCount: 100,
      id: 'g100z'
    },
    {
      name: 'Prefilled500',
      type: 'swiggy',
      class: 'swiggy-class',
      isPremium: false,
      isFree: true,
      salePrice: 0,
      maxCharsCount: 500,
      id: 'g500s'
    },
    {
      name: 'Prefilled1000',
      type: 'flipkart',
      class: 'flipkart-class',
      isPremium: false,
      isFree: true,
      salePrice: 0,
      maxCharsCount: 1000,
      id: 'g1000f'
    },
  ];
  selectedNeta: any;

  @Output() selectMsgTypeEvt = new EventEmitter();

  messageTypes: any[] = [
    { value: 'free', viewValue: 'Free' },
    { value: 'paid', viewValue: 'Paid' },
  ];

  handleMsgTypeChange(event: any) {
    let msgTyp = event.value;
    if (msgTyp == 'paid') {
      this.selectMsgTypeEvt.emit(event);
      this.messageCategories = this.paidMsgTypeObj;
    }
    else if (msgTyp == 'free') {
      this.selectMsgTypeEvt.emit(event);
      this.messageCategories = this.freeMsgTypeObj;
    }
  }

  handleNetaChange(event: any) { }

  netaForm: any;

  ngOnInit(): void {
    this.handleMsgTypeChange({});

    this.netaForm = this.fb.group({
      neta: [null, Validators.required],
      messageType: ['', Validators.required],
    });

    const toSelect = this.netasList[0];
    this.netaForm.get('neta').setValue(toSelect);

    this.netaForm.get('neta').valueChanges.subscribe(
      (filterValue: any) => {
        console.log(filterValue);
        this.netaForm.get('messageType').setValue(null);
        this.messageCategories = [];
      }
    );
    this.netaForm.get('messageType').valueChanges.subscribe(
      (filterValue: any) => {
        console.log(filterValue);
        this.handleMsgTypeChange({value: filterValue});
      }
    );
  }

  ngAfterViewInit(): void {
    // this.selectedType = null;
  }

  handleMessageOptionClick(event: any) {
    this.selectedType = event;
  }
}
