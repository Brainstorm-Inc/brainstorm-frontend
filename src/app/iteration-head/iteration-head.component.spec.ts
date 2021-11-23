import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IterationHeadComponent } from './iteration-head.component';

describe('IterationHeadComponent', () => {
  let component: IterationHeadComponent;
  let fixture: ComponentFixture<IterationHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IterationHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IterationHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
