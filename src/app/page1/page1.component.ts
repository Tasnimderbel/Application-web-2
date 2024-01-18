import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {


  afficher: boolean = false;
  

  fruits:string[] = ['Pomme','Banane','Orange','Fraise','Kiwi'];


  produits: any[] = [
    { 
      nom: 'Téléviseur',
      prix: 699.99,
      stock: 15,

    },
    {
      nom: 'Smartphone',
      prix: 399.99,
      stock: 10,

    },
    {
      nom: 'Pc',
      prix: 1099.99,
      stock: 5,
    }
  ];

  age = 22;
  name='tasnim';
  message: string = 'clic sur le bouton pour changer le message';
  ChangeMessage(){
    this.message='le message a été changeé';
  }

 
}
