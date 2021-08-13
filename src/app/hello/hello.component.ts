import { Component, OnInit } from '@angular/core';
import { builtinModules } from 'module';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`
    .text-success {
      color: green;
    }

    .text-danger {
      color: red;
    }

    .text-special {
      font-style: italic;
    }
  `]
})
export class HelloComponent implements OnInit {
  public name = 'Abdullah';
  public hasError = true;
  public isSpecial = true;
  public messageStyles = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  }

  public greetingStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  public highlightColor = 'orange';

  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return `Hello, ${this.name} from class method!`
  }
}
