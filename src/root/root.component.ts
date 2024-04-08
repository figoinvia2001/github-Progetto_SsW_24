import { Component, OnInit } from '@angular/core';
import { RicercaComponent } from './ricerca/ricerca.component';
import { InserimentoComponent } from './inserimento/inserimento.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  imports: [ RicercaComponent, CommonModule, InserimentoComponent ],
})
export class RootComponent implements OnInit {
  Titolo: string = "Gestione biblioteca";
  bottone1: string ="Ricerca";
  bottone2: string ="Inserimento";
  selezione: string | undefined;
  

  bottone_ricerca() {
    this.selezione = "ricerca";
    var button: HTMLButtonElement = document.getElementById('esci') as HTMLButtonElement;
    button.removeAttribute('hidden');
  }

  bottone_inserimento() {
    this.selezione = "inserimento";
    var button: HTMLButtonElement = document.getElementById('esci') as HTMLButtonElement;
    button.removeAttribute('hidden');
  }

  clean() {
    this.selezione = undefined;
    var button: HTMLButtonElement = document.getElementById('esci') as HTMLButtonElement;
    button.setAttribute('hidden','true');
  }

  constructor() { }

  ngOnInit() {
  }

}