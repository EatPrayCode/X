import { Component, OnInit, ChangeDetectionStrategy, Input, SimpleChanges, OnChanges, EventEmitter, Output } from '@angular/core';
import { NgZone } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-grid-primeng',
  templateUrl: './grid-primeng.component.html',
  styleUrls: ['./grid-primeng.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridPrimengComponent implements OnInit, OnChanges {

  @Input() data: any = [];

  productDialog: boolean = false;

  products: any[] = [];

  product: any;

  selectedProducts: any[] = [];

  submitted: boolean = false;

  cols:any = [];

  @Output() saveNetaDetails = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    let value: any = changes.data.currentValue;
    if (value && value?.data) {
      this.data = [...(value?.data)];
    }
    // console.log(this.data);
    // this.zone.run(() => this.data = [...value])
  }

  constructor(
    public zone: NgZone,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void { 
    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' },
      { field: 'inventoryStatus', header: 'Status' },
      { field: 'rating', header: 'Rating' }
  ];
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  openNetaDetails(payload: any) {
    this.saveNetaDetails.emit(payload);
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        this.selectedProducts = [];
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      }
    });
  }

  editProduct(product: any) {
    this.product = { ...product };
    this.productDialog = true;
  }

  deleteProduct(product: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(val => val.id !== product.id);
        this.product = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {

    this.submitted = true;
    this.saveNetaDetails.next(this.product);
    this.productDialog = false;
    this.product = {};

    // if (this.product.name.trim()) {
    //   if (this.product.id) {
    //     this.products[this.findIndexById(this.product.id)] = this.product;
    //     this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
    //   }
    //   else {
    //     this.product.id = this.createId();
    //     this.product.image = 'product-placeholder.svg';
    //     this.products.push(this.product);
    //     this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
    //   }

    //   this.products = [...this.products];
    //   this.productDialog = false;
    //   this.product = {};
    // }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

}
