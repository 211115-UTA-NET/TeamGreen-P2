import { Component, OnInit } from '@angular/core';
import { UnitService } from '../unit.service';
import { Unit } from '../unit';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-owner-units',
  templateUrl: './owner-units.component.html',
  styleUrls: ['./owner-units.component.css']
})
export class OwnerUnitsComponent implements OnInit {

  units: Unit[] = [];
  unnis: HttpResponse<Unit[]> | undefined;
  seeUnits: boolean = false;
  seeUnitDetails: boolean = false;

  constructor(private unitService: UnitService, private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.showUnits();
  }
  /**this.userService.verify(email, password).subscribe(response => {
      this.http.jsonp;
      this.userhttp = response;
      this.user = <User[]>this.userhttp?.body; */

  getUnits(): void {
    const id = Number(this.route.snapshot.paramMap.get('User_ID'));
    const unnis = this.unitService.getOwnerUnits(id).subscribe(unit => {
      this.http.jsonp;
      this.unnis = unit;
      this.units = <Unit[]>this.unnis?.body;
      console.log(this.unnis);
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
