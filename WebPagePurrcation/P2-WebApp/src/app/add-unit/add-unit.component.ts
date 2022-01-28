import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UnitService } from '../unit.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.css']
})
export class AddUnitComponent implements OnInit {

  @Output() address = new EventEmitter<string>();
  @Output() city = new EventEmitter<string>();
  @Output() state = new EventEmitter<string>();
  @Output() zip = new EventEmitter<string>();
  @Output() pictureUrl = new EventEmitter<string>();
  @Output() description = new EventEmitter<string>();
  @Output() price = new EventEmitter<string>();
  @Output() maxGuests = new EventEmitter<string>();
  

  constructor(private unitservice: UnitService, private location: Location) { }

  ngOnInit(): void {
  }

  submitUnit(address: string, city: string, state: string, zip: string, pictureUrl: string, description: string, price: string, maxGuests: string): void {
    let pri = <unknown>price;
    let pric = <number>pri;
    let maxg = <unknown>maxGuests;
    let maxgu = <number>maxg;
    this.unitservice.submitUnit(address, city, state, zip, pictureUrl, description, pric, maxgu);
    this.location.back();
  }

}
