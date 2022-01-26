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
  unit: any;

  constructor(private unitService: UnitService) { }

  ngOnInit(): void {
    this.getUnits();
  }

  getUnits(): void {
    console.log("4");
    this.unitService.getUnits().subscribe(unit => this.unit = unit);
    console.log(this.unit);
  }
}
