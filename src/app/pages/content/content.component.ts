import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = "https://pirapop.com.br/wp-content/uploads/2022/10/20221029-quem-ama-cuida-ilustracao.png";
  contentTitle: string = "Notícias personalizadas";
  contentDescricao: string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident voluptates cupiditate deserunt vel. Quibusdam mollitia dignissimos enim quis facere impedit! Id eligendi quam praesentium sint impedit delectus molestias deserunt dicta?";
  contentReturn: string = "VOLTAR";

  constructor() { }

  ngOnInit(): void {
  }

}
