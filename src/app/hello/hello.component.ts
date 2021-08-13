import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  public name = 'Abdullah'
  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return `Hello, ${this.name} from class method!`
  }
}
