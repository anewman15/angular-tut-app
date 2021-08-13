import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: [`
    .text-success {
      color: green;
    }

    .text-danager {
      color: red;
    }

    .text-special {
      font-style: italic;
    }
  `]
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
