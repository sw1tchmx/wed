import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalsPage } from './professionals.page';

describe('ProfessionalsPage', () => {
  let component: ProfessionalsPage;
  let fixture: ComponentFixture<ProfessionalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
