import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumwifiHeartBeatComponent } from './plumwifi-heart-beat.component';

describe('PlumwifiHeartBeatComponent', () => {
  let component: PlumwifiHeartBeatComponent;
  let fixture: ComponentFixture<PlumwifiHeartBeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlumwifiHeartBeatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlumwifiHeartBeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
