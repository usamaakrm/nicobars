import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorsComponent } from './decors.component';

describe('DecorsComponent', () => {
  let component: DecorsComponent;
  let fixture: ComponentFixture<DecorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecorsComponent]
    });
    fixture = TestBed.createComponent(DecorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
