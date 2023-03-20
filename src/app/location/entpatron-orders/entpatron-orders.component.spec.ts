import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntpatronOrdersComponent } from './entpatron-orders.component';

describe('EntpatronOrdersComponent', () => {
  let component: EntpatronOrdersComponent;
  let fixture: ComponentFixture<EntpatronOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntpatronOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntpatronOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
