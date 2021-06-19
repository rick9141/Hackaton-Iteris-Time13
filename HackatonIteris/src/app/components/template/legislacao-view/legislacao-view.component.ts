import { Component, OnInit } from '@angular/core';
import { LeisApiModel } from 'src/app/services/leis-api-model';
import { LeisApiService } from 'src/app/services/leis-api.service';

@Component({
  selector: 'app-legislacao-view',
  templateUrl: './legislacao-view.component.html',
  styleUrls: ['./legislacao-view.component.css']
})
export class LegislacaoViewComponent implements OnInit {

  listaDeLeis: LeisApiModel[] = [];

  constructor(public leisApi: LeisApiService) { }

  ngOnInit(): void {
    this.leisApi.get().subscribe({
      next: (retornoDaApi) => {
        this.listaDeLeis = retornoDaApi;
      }
    });

  }
}
