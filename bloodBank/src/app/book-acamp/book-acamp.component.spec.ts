import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookACampComponent } from './book-acamp.component';

describe('BookACampComponent', () => {
  let component: BookACampComponent;
  let fixture: ComponentFixture<BookACampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookACampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookACampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
