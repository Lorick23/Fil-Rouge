import { Injectable } from '@angular/core';
import { Produit } from '../modele';
import { of, Observable } from 'rxjs';
import { HttpClient } from'@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private listeProduit: Produit[] = [
        {
            nom: "wow",
            description: "trop bien",
            prix: 10,
            categorie: "jeu",
            sous_categorie: "mmo",
            image: "https://dyw7ncnq1en5l.cloudfront.net/optim/produits/0/45243/blizzard-entertainment-world-of-warcraft-battle-for-azeroth_03e30e867170ce89__450_400.jpg",
            stock: 50,
        }

    ]
    constructor(private _httpClient: HttpClient) {

    }
    lister(): Observable<Produit[]> {
        if (this.listeProduit.length > 0) {
            return of(this.listeProduit);
        } 
        
    }
}