import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelComponent } from './jewel.component';

describe('JewelComponent', () => {
  let component: JewelComponent;
  let fixture: ComponentFixture<JewelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JewelComponent]
    });
    fixture = TestBed.createComponent(JewelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
