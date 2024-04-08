import { Libro } from './libro';
export class Archivio {
  libri: Array<Libro>;
  constructor(libri: Array<Libro>) {
    this.libri = libri;
  }
  cerca(stringa: string) {
    var i :number = 0;
    const one_element: Array<any> = [];
    let new_stringa = stringa.toLowerCase();
    
    if(this.libri != null){
      this.libri.map((value) => {
        let new_value1 = value.autore?.toLowerCase();
        let new_value2 = value.titolo?.toLowerCase();
        if ((new_value1.includes(new_stringa) || new_value2.includes(new_stringa)) && new_stringa !== '') {
          i++;
          one_element.push(value.posizione, value.autore, value.titolo, value.utente_prestito);
        }
      })
    }
    if(i==1){return one_element;
    }else if(i>1){return i + ' corrispondenze';
    }else{return 'Nessun risultato';
    }
  }
}
