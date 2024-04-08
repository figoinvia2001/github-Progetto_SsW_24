export class Libro {
  autore: string;
  titolo: string;
  posizione: string | undefined;
  utente_prestito: string | undefined;
  constructor(autore: string, titolo: string, posizione: string, utente_prestito: string | undefined) {
    this.autore=autore;
    this.titolo=titolo;
    this.posizione=posizione;
    this.utente_prestito=utente_prestito;
  }

}