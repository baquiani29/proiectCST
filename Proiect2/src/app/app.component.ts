import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  
  persoana:Persoana=new Persoana("Eduard",20,183);

  persoane:Persoana[]=[new Persoana("Anca",25,164),new Persoana("Dodel",33,180),new Persoana("Mirel",45,176)]
  
  delete():void{

     console.log("Button pressed");


  }

  deleteCard(index:number):void{

   console.log("Card deleted");
   this.persoane.splice(index,1);


  }




}


export class Persoana{

nume:string;
varsta:number;
inaltime:number;

constructor(nume:string,varsta:number,inaltime:number){

  this.nume=nume;
  this.varsta=varsta;
  this.inaltime=inaltime;


}

}