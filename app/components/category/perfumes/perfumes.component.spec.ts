import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumesComponent } from './perfumes.component';

describe('PerfumesComponent', () => {
  let component: PerfumesComponent;
  let fixture: ComponentFixture<PerfumesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfumesComponent]
    });
    fixture = TestBed.createComponent(PerfumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
