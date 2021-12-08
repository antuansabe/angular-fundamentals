import { Component } from '@angular/core';
import { Product } from  './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'Antonn';
  age = 18;
  btnDisabled = true;
  register = {
    name: '',
    email: '',
    password: '',
  }
  person = {
    name: 'Antonn',
    age: 18,
  }


  names: string[ ]= [ 'Lola' , 'Ronnie', 'Filly','Santi', 'Bobi'];
  newName = '';
  box = {
    width: 100,
    heigth: 100,
    background: 'red'
  };
  products: Product[] = [
    {
      name: 'El mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]


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

  addName() {
    this.names.push(this.newName);
  }

  deleteName(index: number ) {
    this.names.splice(index,1);
  }

  onRegister() {
    console.log(this.register);
  }
}
