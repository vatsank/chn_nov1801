import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDonarsComponent } from './show-donars.component';

describe('ShowDonarsComponent', () => {
  let component: ShowDonarsComponent;
  let fixture: ComponentFixture<ShowDonarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDonarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDonarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
