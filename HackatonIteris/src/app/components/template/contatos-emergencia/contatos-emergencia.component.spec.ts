import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosEmergenciaComponent } from './contatos-emergencia.component';

describe('ContatosEmergenciaComponent', () => {
  let component: ContatosEmergenciaComponent;
  let fixture: ComponentFixture<ContatosEmergenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatosEmergenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosEmergenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
