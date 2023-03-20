import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationConfigComponentComponent } from './location-config-component.component';

describe('LocationConfigComponentComponent', () => {
  let component: LocationConfigComponentComponent;
  let fixture: ComponentFixture<LocationConfigComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationConfigComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationConfigComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
