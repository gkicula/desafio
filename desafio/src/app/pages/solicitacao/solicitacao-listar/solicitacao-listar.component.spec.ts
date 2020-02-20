import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoListarComponent } from './solicitacao-listar.component';

describe('SolicitacaoListarComponent', () => {
  let component: SolicitacaoListarComponent;
  let fixture: ComponentFixture<SolicitacaoListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitacaoListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacaoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
