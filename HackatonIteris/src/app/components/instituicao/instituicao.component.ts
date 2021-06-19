import { Component, OnInit } from '@angular/core';
import { InstitucaoApiService } from 'src/app/services/instituicaoApi/institucao-api.service';
import { InstituicaoApiModel } from 'src/app/services/instituicaoApi/instituicao-api-model';

@Component({
  selector: 'app-instituicao',
  templateUrl: './instituicao.component.html',
  styleUrls: ['./instituicao.component.css']
})
export class InstituicaoComponent implements OnInit {

  instituicao: InstituicaoApiModel[] = [];

  constructor(public instituicaoApi : InstitucaoApiService) { }

  ngOnInit(): void {
    this.instituicaoApi.get().subscribe({
      next: (retornoDaApi) => {
        this.instituicao = retornoDaApi
      }
    })
  }

}
