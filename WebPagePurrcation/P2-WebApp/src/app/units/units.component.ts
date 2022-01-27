import { Component, OnInit } from '@angular/core';
import { UnitService } from '../unit.service';
import { Unit } from '../unit';
import { HttpResponse, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {

  units: Unit[] = [];
  unnis: HttpResponse<Unit[]> | undefined;
  seeUnits: boolean = false;
  seeUnitDetails: boolean = false;

  constructor(private unitService: UnitService, private http: HttpClient) { }

  ngOnInit(): void {
    //this.getUnits();
  }
  /**this.userService.verify(email, password).subscribe(response => {
      this.http.jsonp;
      this.userhttp = response;
      this.user = <User[]>this.userhttp?.body; */

  getUnits(): void {
    const unnis = this.unitService.getUnits().subscribe(unit => {
      this.http.jsonp;
      this.unnis = unit;
      this.units = <Unit[]>this.unnis?.body;
      console.log(this.units[0].Address);
    });
  }

  showUnits(): void {
    this.getUnits();
    this.seeUnits = true;
  }

  getSpecificUnitDetails(id: number): void {
    this.seeUnitDetails = true;
  }
}
