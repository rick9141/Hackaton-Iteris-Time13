import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { LeisApiModel } from 'src/app/services/leis-api-model';

@Component({
  selector: 'app-legislacao-page',
  templateUrl: './legislacao-page.component.html',
  styleUrls: ['./legislacao-page.component.css']
})
export class LegislacaoPageComponent implements OnInit {

  @Input() leis: LeisApiModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
