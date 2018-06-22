import { Component, OnInit,Input } from '@angular/core';
import {Pessoa} from './Pessoa.model'
@Component({
  selector: 'app-content1',
  templateUrl: './content1.component.html',
  styleUrls: ['./content1.component.css']
})
export class Content1Component implements OnInit {

  constructor() { }
  @Input() pessoa: Pessoa
 @Input() titulo: string = 'Titulo Padrão'
  ngOnInit() {
  }

}
