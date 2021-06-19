import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-page',
  templateUrl: './sobre-page.component.html',
  styleUrls: ['./sobre-page.component.css']
})
export class SobrePageComponent implements OnInit {

  public logoUrl = '../assets/images/sosmulher.png';
  public titulo = 'Sobre nossa organizaÃ§Ã£o';
  public descricao = 'O SOS MULHER Ã© focado em ajudar na proteÃ§Ã£oe  apoio contra a violÃªncia contra mulher, seja verbal, fÃ­sico ou qualquer outro tipo de violÃªncia dentro de casa.';
  public comoFunciona = 'Nossa plataforma visa trabalhar com informaÃ§Ãµes, orientaÃ§Ãµes e ajudar a mulher em casos de violÃªncia domÃ©stica principalmente nesta Ã©poca de pandemia, onde os relatos tem sido cada vez maiores.';


  constructor() { }

  ngOnInit(): void {
  }

}
