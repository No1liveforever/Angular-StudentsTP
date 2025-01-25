import { Component } from '@angular/core';
import { Personne } from './classes/personne';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TPTestAngular1';
  personne:Personne = new Personne(10,'khalid',"abdllah");
  tab: number[]= [12,13,17,90];
  public val: number=10;
  direBonjour():string{
    return 'Bonjour les amis';
  }

  sumfunction(nb1,nb2): number{
    return nb1+ nb2;
  }

  public AfficherAlert(): void{
    alert('Hi khalid :)')
  }

  public text:string='';
}
