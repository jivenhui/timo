import {Component, Input, OnInit, DoCheck, AfterContentInit, OnChanges} from '@angular/core';

@Component({
  selector: 'bresc-sauzen',
  templateUrl: './sauzen.component.html',
  styleUrls: ['./sauzen.component.css']
})
export class SauzenComponent implements OnChanges {
  SausRecepten = [];
  saus;
  @Input()
  isCollapsed;
  slideConfig = {'slidesToShow': 3, 'slidesToScroll': 3, visibility: true};

  constructor() {
  }

  async ngOnChanges() {
    if (this.isCollapsed = true) {
      await this.delay(10);
    this.SausRecepten = [
      {
        img: 'assets/images/recepten/sauzen/basilicum-mayo.png',
        recept: 'Basilicummayonaise',
        ingredienten:
            '<b>Ingrediënten:</b><br><br>\n' +
            '1 eidooier<br>\n' +
            'Zout & peper<br>\n' +
            '½ tl mosterd<br>\n' +
            '1 el azijn<br>\n' +
            '150 ml neutrale olie<br>\n' +
            '15 gram pesto di basilico\n',
        bereidingswijze: '<b>Bereidingswijze:</b><br><br>\n' +
            'Laat alle ingrediënten op kamertemperatuur komen. Doe alle ingrediënten op de olie na in een (bij voorkeur smal en hoog) bekken/bakje en blend tot een gladde massa. Voeg nu tijdens het blenden de olie druppelsgewijs toe tot de mayonaise dik genoeg is. Lekker bij krokante polenta, friet of op een sandwich. Voor een variatie vervang de pesto di basilico voor tomaten tapenade of de tikka masala. Om het jezelf nog makkelijker te maken kan je kant en klare mayonaise gebruiken!\n'
      },
      {
        img: '../../assets/images/recepten/sauzen/roomSaus.png',
        recept: 'Pesto room dressing',
        ingredienten:
            '<b>Ingrediënten:</b><br><br>\n' +
            '3 el witte wijn azijn<br>\n' +
            'zout en peper<br>\n' +
            '1 tl Dijon mosterd<br>\n' +
            '3 el Bresc pesto verde<br>\n' +
            '200 ml room<br>\n',
        bereidingswijze: '<b>Bereidingswijze:</b><br><br>\n' +
            'Klop met de garde in een kom de azijn, zout en peper naar smaak, de mosterd en de pesto. Roer de room er doorheen. Lekker bij een Mediterraanse salade.\n'
      },
      {
        img: '../../assets/images/recepten/sauzen/Tika-masala.png',
        recept: 'Tika masala mayonaise',
        ingredienten:
            '<b>Ingrediënten:</b><br><br>\n' +
            '1 eidooier<br>\n' +
            'Zout & peper<br>\n' +
            '½ tl mosterd<br>\n' +
            '1 el azijn<br>\n' +
            '150 ml neutrale olie<br>\n',
        bereidingswijze: '<b>Bereidingswijze:</b><br><br>\n' +
            'Laat alle ingrediënten op kamertemperatuur komen. Doe alle ingrediënten op de olie na in een (bij voorkeur smal en hoog) bekken/bakje en blend tot een gladde massa. Voeg nu tijdens het blenden de olie druppelsgewijs toe tot de mayonaise dik genoeg is. Lekker bij krokante polenta, friet of op een sandwich. Om het jezelf nog makkelijker te maken kan je kant en klare mayonaise gebruiken!\n'
      }
    ];
    this.saus = this.SausRecepten[0];
    }
  }

  imageClick(recept) {
    this.saus = recept;
  }

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
