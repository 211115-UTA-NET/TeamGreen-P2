import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerUnitsComponent } from './owner-units.component';

describe('OwnerUnitsComponent', () => {
  let component: OwnerUnitsComponent;
  let fixture: ComponentFixture<OwnerUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerUnitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
