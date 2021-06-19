import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.css']
})
export class MenuHomeComponent implements OnInit {
  public title = 'Pandemia e Violência Contra a Mulher'
  public texto = 'Com a pandemia do covid-19 os casos de violência contra a mulher aumentaram consideravelmente, isso se deve ao fato de que as vítimas acabaram sendo obrigadas a conviver 24h com o seu agressor.'
  public texto2 = 'Uma forma de ajudar as vítimas foi a possibilidade de realizar boletim de ocorrência de forma virtual, além do acesso ja existente ao Disque 180. O Ministério da Mulher, da Família e dos Direitos Humanos também ofereceu contatos por Whatsapp em que era possível a vítima pedir ajuda, além de lançarem um aplicativo chamado "Direitos Humanos no Brasil.'
  public textofinal = 'Apesar de toda a evolução que esses meios possibilitaram, ainda é difícil oferecer qualquer tipo de ajuda quando a vítima é obrigada a fazer quarentena com seu agressor. '

  constructor() { }

  ngOnInit(): void {
  }

}
