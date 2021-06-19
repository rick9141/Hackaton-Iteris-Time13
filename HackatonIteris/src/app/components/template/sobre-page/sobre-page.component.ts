import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-page',
  templateUrl: './sobre-page.component.html',
  styleUrls: ['./sobre-page.component.css']
})
export class SobrePageComponent implements OnInit {

  public logoUrl = '../assets/images/sosmulher.png';
  public titulo = 'Sobre nossa organização';
  public descricao = 'O SOS MULHER é focado em ajudar na proteçãoe  apoio contra a violência contra mulher, seja verbal, físico ou qualquer outro tipo de violência dentro de casa.';
  public comoFunciona = 'Nossa plataforma visa trabalhar com informações, orientações e ajudar a mulher em casos de violência doméstica principalmente nesta época de pandemia, onde os relatos tem sido cada vez maiores.';
​

  constructor() { }

  ngOnInit(): void {
  }

}
