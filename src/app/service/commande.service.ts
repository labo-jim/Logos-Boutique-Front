import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Commande } from '../models/Commande.model';
import { LigneCommande } from '../models/LigneCommande.model';
import { Produit } from '../models/Produit.model';

@Injectable()
export class CommandeService {

  url: string = "";
  ligneCommandes: LigneCommande[] = [
    new LigneCommande(1, new Produit(1, "pouet", "pouetdesc", 12.99, 3, null, null, null, 10.99), 2),
    new LigneCommande(1, new Produit(2, "pouet2", "pouetdesc2", 12.99, 3, null, null, null, 10.99), 2)
  ];
  commande: Commande = new Commande(1, this.ligneCommandes, "3 rue des trou du cul")

  constructor(private http: HttpClient) {

  }

  postCommande() {
    this.http.post(this.url, this.commande).subscribe(
      res => {
        console.log("goooood!!");
      },
      err => {
        console.log("not goooooood");
      }
    );
  }

}