import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Background360 } from './background-360';

describe('Background360', () => {
  let component: Background360;
  let fixture: ComponentFixture<Background360>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Background360]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Background360);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
