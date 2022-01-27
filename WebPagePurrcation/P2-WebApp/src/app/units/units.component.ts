import { Component, OnInit } from '@angular/core';
import { UnitService } from '../unit.service';
import { Unit } from '../unit';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {

  units: Unit[] = [];
  unit: HttpResponse<Unit[]> | undefined;
  seeUnits: boolean = false;
  seeUnitDetails: boolean = false;

  constructor(private unitService: UnitService) { }

  ngOnInit(): void {
    this.getUnits();
  }

  getUnits(): void {
    const unnis = this.unitService.getUnits();
    if (unnis != undefined) {
      unnis.subscribe(unit => this.unit = unit);
    } else {
      console.log("error in get units unnis is undefined")
    }
    console.log(this.unit);
  }

  showUnits(): void {
    this.getUnits();
    this.seeUnits = true;
  }

  getSpecificUnitDetails(id: number): void {
    this.seeUnitDetails = true;
  }
}
