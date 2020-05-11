import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeditComponent } from './agedit.component';

describe('AgeditComponent', () => {
  let component: AgeditComponent;
  let fixture: ComponentFixture<AgeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
