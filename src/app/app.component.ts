import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Antonn';
  age = 18;
  btnDisabled = true;
  person = {
    name: 'Antonn',
    age: 18,
  }

  toggleButton() {
      this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLElement;

  }
}
