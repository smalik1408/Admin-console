import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumwifiHeartBeatsByLocIdComponent } from './plumwifi-heart-beats-by-loc-id.component';

describe('PlumwifiHeartBeatsByLocIdComponent', () => {
  let component: PlumwifiHeartBeatsByLocIdComponent;
  let fixture: ComponentFixture<PlumwifiHeartBeatsByLocIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlumwifiHeartBeatsByLocIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlumwifiHeartBeatsByLocIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
