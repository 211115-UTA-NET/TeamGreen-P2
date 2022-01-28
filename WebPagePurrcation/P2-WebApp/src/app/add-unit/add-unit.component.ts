import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UnitService } from '../unit.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


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
  

  constructor(private unitservice: UnitService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  submitUnit(info: string): void {
    this.unitservice.submitUnit(info);
    this.location.back();
  }
}
