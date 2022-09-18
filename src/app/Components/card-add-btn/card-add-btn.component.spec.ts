import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAddBtnComponent } from './card-add-btn.component';

describe('CardAddBtnComponent', () => {
  let component: CardAddBtnComponent;
  let fixture: ComponentFixture<CardAddBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAddBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAddBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
