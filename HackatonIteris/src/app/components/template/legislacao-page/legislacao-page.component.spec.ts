import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegislacaoPageComponent } from './legislacao-page.component';

describe('LegislacaoPageComponent', () => {
  let component: LegislacaoPageComponent;
  let fixture: ComponentFixture<LegislacaoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegislacaoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegislacaoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
