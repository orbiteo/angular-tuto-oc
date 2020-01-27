import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isAuth = false;
  appareils: any[];

  lastUpdate = new Promise((resolve, reject) => { // fonction qui simule un appel d'API avec donc un temps de réponse
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });


  posts = [
    {
      titre: 'Mon premier post',
      description: 'lorem ipsum'
    },
    {
      titre: 'Mon deuxième post',
      description: 'lorem ipsum'
    },
    {
      titre: 'Encore un post',
      description: 'lorem ipsum'
    },
  ];

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }
  onEteindre() {
    if(confirm('Êtes-vous sûr de vouloir éteindre tous vos appareil ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
    
  }
}
