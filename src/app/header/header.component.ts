import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    nome: string = 'Nem aqui nem ná ?'
    resposta:boolean = true
  constructor() { }

  ngOnInit() {
  }

}
