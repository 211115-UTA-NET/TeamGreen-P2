import { Component, OnInit } from '@angular/core';
import { UnitService } from '../unit.service';
import { Unit } from '../unit';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {

  units: Unit[] = [];
  num: number = 0;

  constructor(private unitService: UnitService) { }

  ngOnInit(): void {
    //this.getUnits();
  }

  getUnits(): void {
    this.unitService.getUnits().subscribe(units => this.units = units);
  }

  getNumber(): void {
    this.num = 10101;
  }

}
