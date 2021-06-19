import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos-emergencia',
  templateUrl: './contatos-emergencia.component.html',
  styleUrls: ['./contatos-emergencia.component.css']
})
export class ContatosEmergenciaComponent implements OnInit {
      public title = 'Contatos de Emergência';
      public texto1 = 'Qualquer delegacia está apta a receber ocorrências de violência contra a mulher, contudo, existem algumas unidades especializadas em atendimento à mulher, são as chamadas Delegacia da Mulher. '
      public texto2 = 'Além disso, alguns números são disponibilizados para ajuda:'
      public numero1 = 'Disque 180 - Central de Atendimento à Mulher'
      public numero2 = 'Disque 190 - Polícia Militar'
      public textofim = 'Não tenha medo, peça ajuda e denuncie já!'

  constructor() { }

  ngOnInit(): void {
  }

}
