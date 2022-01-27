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

  constructor(private unitService: UnitService) { }

  ngOnInit(): void {
    this.getUnits();
  }

  getUnits(): void {
    this.unitService.getUnits().subscribe(unit => this.unit = unit);
    console.log(this.unit);
  }

  showUnits(): void {
    this.getUnits();
    this.seeUnits = true;
  }
}
