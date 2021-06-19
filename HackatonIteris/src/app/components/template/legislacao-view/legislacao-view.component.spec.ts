import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegislacaoViewComponent } from './legislacao-view.component';

describe('LegislacaoViewComponent', () => {
  let component: LegislacaoViewComponent;
  let fixture: ComponentFixture<LegislacaoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegislacaoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegislacaoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
