import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundText } from './background-text';

describe('BackgroundText', () => {
  let component: BackgroundText;
  let fixture: ComponentFixture<BackgroundText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
