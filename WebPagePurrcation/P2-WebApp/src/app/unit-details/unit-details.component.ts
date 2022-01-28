import { Component, OnInit } from '@angular/core';
import { Unit } from '../unit';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UnitService } from '../unit.service';
import { HttpResponse, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html',
  styleUrls: ['./unit-details.component.css']
})
export class UnitDetailsComponent implements OnInit {

  id: number = 0;
  unit: Unit[] = [];
  unni: HttpResponse<Unit[]> | undefined;

  constructor(private route: ActivatedRoute, private unitService: UnitService, private location: Location, private http: HttpClient) { }

  ngOnInit(): void {
    this.getUnit();
  }

  getUnit():void {
    console.log("hello");
    const id = Number(this.route.snapshot.paramMap.get('Unit_ID'));
    this.id = id;
    this.unitService.getUnit(id)?.subscribe(unit => {
      this.http.jsonp;
      this.unni = unit;
      this.unit = <Unit[]>this.unni.body;
    });
    
  }
}
