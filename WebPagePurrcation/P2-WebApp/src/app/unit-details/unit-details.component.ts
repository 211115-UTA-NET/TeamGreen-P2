import { Component, OnInit } from '@angular/core';
import { Unit } from '../unit';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html',
  styleUrls: ['./unit-details.component.css']
})
export class UnitDetailsComponent implements OnInit {

  id: number = 0;
  unit: Unit | undefined;

  constructor(private route: ActivatedRoute, private unitService: UnitService, private location: Location) { }

  ngOnInit(): void {
    this.getUnit();
  }

  getUnit():void {
    const id = Number(this.route.snapshot.paramMap.get('Unit_ID'));
    this.id = id;
    const unni = this.unitService.getUnit(id);
    if (unni != undefined) {
      unni.subscribe(unit => this.unit = unit);
    } else {
      console.log("error in getUnit unni is undefined")
    }
  }
}
