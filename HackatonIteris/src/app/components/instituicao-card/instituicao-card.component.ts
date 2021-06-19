import { Component, Input, OnInit } from '@angular/core';
import { InstituicaoApiModel } from 'src/app/services/instituicaoApi/instituicao-api-model';

@Component({
  selector: 'app-instituicao-card',
  templateUrl: './instituicao-card.component.html',
  styleUrls: ['./instituicao-card.component.css'],
})
export class InstituicaoCardComponent implements OnInit {

  @Input() instituicao: InstituicaoApiModel | undefined;

  constructor() {}

  ngOnInit(): void {}
}
